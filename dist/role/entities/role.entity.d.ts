import { User } from '../../users/entities/user.entity';
export declare class Role {
    id: number;
    name: string;
    users: User[];
    created_at: Date;
    updated_at: Date;
}
