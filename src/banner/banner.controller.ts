import { Controller,Get,Post,Body,Patch,Param,Delete } from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) { }
  @Post('create')
  create(@Body() createBannerDto: CreateBannerDto) {
    return this.bannerService.create(createBannerDto);
  }

  @Get('getAll')
  findAll() {
    return this.bannerService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: number) {
    return this.bannerService.findOne({
      where: { id: id },
    });
  }

  @Patch('update/:id')
  update(@Param('id') id: string,@Body() updateBannerDto: UpdateBannerDto) {
    return this.bannerService.update(+id,updateBannerDto);
  }

  @Patch('updateStatus/:id')
  updateStatus(
    @Param('id') id: string,
    @Body() updateBannerDto: UpdateBannerDto,
  ) {
    return this.bannerService.update(+id,updateBannerDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.bannerService.remove(+id);
  }
}
