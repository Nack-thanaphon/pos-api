import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CrudService } from 'src/libs/common/src';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

@Injectable()
export class ProductsService extends CrudService<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {
    super(productsRepository);
  }

  async getAllFiter(
    page: number = 1,
    limit: number = 10,
    filter: string = '',
  ): Promise<{ data: Product[]; total: number }> {
    const [products, total] = await this.productsRepository.findAndCount({
      where: {
        name: Like(`%${filter}%`),
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const baseUrl = process.env.BACKEND_URL || 'http://localhost:3500/';
    
    await Promise.all(
      products.map(async (product) => {
        product.image_url = baseUrl + product.image_url;
        return product;
      }),
    );

    return { data: products, total };
  }
}
