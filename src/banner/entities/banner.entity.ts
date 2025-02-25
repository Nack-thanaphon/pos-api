import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity('banner')
export class Banner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text',nullable: true })
    description: string;

    @Column()
    image: string;

    @Column()
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
