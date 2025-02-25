import { Product } from '../../products/entities/product.entity';
import { Store } from '../../stores/entities/store.entity';
export declare class Sale {
    sales_id: number;
    period_month: string;
    store: Store;
    product: Product;
    value: number;
    qty: number;
    margin_value: number;
}
