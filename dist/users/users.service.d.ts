import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CrudService } from 'src/libs/common/src';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService extends CrudService<User> {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAllFiter(page?: number, limit?: number, filter?: string): Promise<{
        data: User[];
        total: number;
    }>;
    checkEmailExit(email: string): Promise<{
        status: boolean;
        data: User | null;
    }>;
    getNewCode(): Promise<string>;
    findPermissionByEmail(email: string): Promise<string>;
    createOrGetData(data: CreateUserDto): Promise<{
        status: string;
        role: string;
    }>;
}
