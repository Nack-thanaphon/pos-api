import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

// @UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) { }

  @Post('create')
  async create(
    @Body() createProductDto: CreateProductDto,
    @Body('image_url') imageUrl: string,
  ) {
    // if (imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '') {
    //   const imagePath = await this.fileUploadService.uploadFile(
    //     imageUrl,
    //     'products',
    //   );
    //   createProductDto.image_url = imagePath;
    // }

    return this.productsService.create(createProductDto);
  }

  @Get('getAll')
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('filter') filter: string,
  ) {
    return this.productsService.getAllFiter(page, limit, filter);
  }


  @Get('getOne/:id')
  async findOne(@Param('id') id: number) {
    const response = await this.productsService.findOne({
      where: { id: id },
    });
    if (!response) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const baseUrl = process.env.BACKEND_URL || 'http://localhost:3500/';
    if (response.image_url) {
      response.image_url = baseUrl + response.image_url;
    }
    return response;
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Body('image') imageUrl: string,
  ) {
    // if (imageUrl && typeof imageUrl === 'string' && imageUrl.trim() !== '') {
    //   const imagePath = await this.fileUploadService.uploadFile(
    //     imageUrl,
    //     'products',
    //   );
    //   updateProductDto.image_url = imagePath;
    // }
    return this.productsService.update(+id, updateProductDto);
  }

  @Patch('updateStatus')
  updateStatus(@Body('id') id: string, @Body('status') status: boolean) {
    // console.log('id', id);
    // console.log('status', status);
    return this.productsService.status(+id, status);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
