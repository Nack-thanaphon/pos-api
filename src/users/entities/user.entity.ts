import { Role } from '../../role/entities/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ length: 255 })
  code: string;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column()
  role: number;
  
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role' })
  roles: Role;

  @Column()
  image: string;

  @Column()
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}