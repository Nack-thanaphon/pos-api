import { Product } from '../../products/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category_group: string;

  @Column()
  category: string;

  @Column()
  sub_category: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
