import { Optional } from '@nestjs/common';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateProductDto {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: true })
  status: boolean;

  @Column({ nullable: true })
  images: number;

  @Column({ nullable: true })
  product_code: string;

  @Column({ nullable: true })
  unit: string;

  @Column({ nullable: true })
  additional_unit: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  sale_price: number;

  @Optional()
  @Column({ nullable: true })
  image_url?: string;
}
