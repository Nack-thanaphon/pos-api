import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, imageUrl: string): Promise<import("./entities/product.entity").Product>;
    findAll(page: number, limit: number, filter: string): Promise<{
        data: import("./entities/product.entity").Product[];
        total: number;
    }>;
    findOne(id: number): Promise<import("./entities/product.entity").Product>;
    update(id: string, updateLogsDto: UpdateProductDto): Promise<import("./entities/product.entity").Product>;
    updateStatus(id: string, status: boolean): Promise<{
        status: string;
        data: import("./entities/product.entity").Product;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
