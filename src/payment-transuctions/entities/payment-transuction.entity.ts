import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('payment_transuction')
export class PaymentTransuction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    client_code: string;

    @Column()
    admin_code: string;

    @Column()
    cart_code: string;

    @Column()
    payment_code: string;

    @Column()
    payment_type: string;

    @Column()
    images: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
