import { Store } from '../../stores/entities/store.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('channels')
export class Channel {
  @PrimaryGeneratedColumn()
  channel_id: number;

  @Column({ unique: true })
  channel_name: string;

  @OneToMany(() => Store, (store) => store.channel)
  stores: Store[];
}
