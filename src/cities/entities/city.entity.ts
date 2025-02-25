import { Store } from '../../stores/entities/store.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  city_id: number;

  @Column({ unique: true })
  city_name: string;

  @OneToMany(() => Store, (store) => store.city)
  stores: Store[];
}
