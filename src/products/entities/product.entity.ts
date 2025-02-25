import { Brand } from '../../brands/entities/brand.entity';
import { Category } from '../../categories/entities/category.entity';
import { Sale } from '../../sale/entities/sale.entity';
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;


  @Column({ default: true })
  status: boolean;

  @Column({ nullable: true })
  images: number;

  @Column({ nullable: true })
  product_code: string;

  @Column({ nullable: true })
  unit: string;


  @Column()
  barcode: string;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brands: Brand;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  supplier: Supplier;

  @Column()
  article: string;

  @OneToMany(() => Sale, (sale) => sale.product)
  sales: Sale[];

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  sale_price: number;

  @Column({ nullable: true })
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
