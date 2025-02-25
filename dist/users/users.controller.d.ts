import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LogsService } from 'src/logs/logs.service';
export declare class UsersController {
    private readonly usersService;
    private readonly logsService;
    constructor(usersService: UserService, logsService: LogsService);
    login(createUserDto: CreateUserDto): Promise<{
        status: number;
        data: string;
        message: string;
    }>;
    findAll(page: number, limit: number, filter: string): Promise<{
        data: import("./entities/user.entity").User[];
        total: number;
    }>;
    getPermission(email: string): Promise<string>;
    findOne(code: string): Promise<void>;
    updateStatus(code: string, status: boolean): Promise<{
        status: string;
        data: import("./entities/user.entity").User;
    }>;
    remove(code: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
