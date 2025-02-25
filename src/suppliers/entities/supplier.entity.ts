import { Product } from '../../products/entities/product.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('suppliers')
export class Supplier {
  @PrimaryColumn()
  supplier_id: number;

  @Column()
  supplier_name: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];
}
