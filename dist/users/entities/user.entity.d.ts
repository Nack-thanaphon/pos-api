import { Role } from '../../role/entities/role.entity';
export declare class User {
    id: number;
    username: string;
    code: string;
    email: string;
    role: number;
    roles: Role;
    image: string;
    status: boolean;
    created_at: Date;
}
