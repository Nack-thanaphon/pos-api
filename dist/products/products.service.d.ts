import { CrudService } from 'src/libs/common/src';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductsService extends CrudService<Product> {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    getAllFiter(page?: number, limit?: number, filter?: string): Promise<{
        data: Product[];
        total: number;
    }>;
}
