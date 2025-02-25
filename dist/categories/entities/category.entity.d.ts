import { Product } from '../../products/entities/product.entity';
export declare class Category {
    category_id: number;
    category_group: string;
    category: string;
    sub_category: string;
    products: Product[];
}
