import { Product } from '../../products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  brand_id: number;

  @Column({ unique: true })
  brand_name: string;

  @OneToMany(() => Product, (product) => product.brands)
  products: Product[];
}
