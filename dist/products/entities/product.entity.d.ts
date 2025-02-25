import { Brand } from '../../brands/entities/brand.entity';
import { Category } from '../../categories/entities/category.entity';
import { Sale } from '../../sale/entities/sale.entity';
import { Supplier } from '../../suppliers/entities/supplier.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    status: boolean;
    images: number;
    product_code: string;
    unit: string;
    barcode: string;
    brands: Brand;
    category: Category;
    supplier: Supplier;
    article: string;
    sales: Sale[];
    sale_price: number;
    image_url: string;
    created_at: Date;
    updated_at: Date;
}
