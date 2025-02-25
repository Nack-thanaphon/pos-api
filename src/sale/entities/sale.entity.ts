import { Product } from '../../products/entities/product.entity';
import { Store } from '../../stores/entities/store.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('sales')
export class Sale {
  @PrimaryGeneratedColumn()
  sales_id: number;

  @Column()
  period_month: string;

  @ManyToOne(() => Store, (store) => store.sales)
  store: Store;

  @ManyToOne(() => Product, (product) => product.sales)
  product: Product;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @Column()
  qty: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  margin_value: number;
}
