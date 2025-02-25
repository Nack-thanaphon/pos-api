import { Channel } from '../../chanel/entities/chanel.entity';
import { City } from '../../cities/entities/city.entity';
import { Sale } from '../../sale/entities/sale.entity';
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity('stores')
export class Store {
  @PrimaryColumn()
  store_id: number;

  @Column()
  store_name: string;

  @ManyToOne(() => City, (city) => city.stores)
  city: City;

  @ManyToOne(() => Channel, (channel) => channel.stores)
  channel: Channel;

  @OneToMany(() => Sale, (sale) => sale.store)
  sales: Sale[];
}
