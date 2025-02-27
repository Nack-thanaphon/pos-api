import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(createLogDto: CreateLogDto): Promise<import("./entities/log.entity").Log>;
    findAll(page: number, limit: number, filter: string): Promise<{
        data: import("./entities/log.entity").Log[];
        total: number;
    }>;
    findOne(id: number): Promise<import("./entities/log.entity").Log>;
    update(id: string, updateLogsDto: UpdateLogDto): Promise<import("./entities/log.entity").Log>;
    updateStatus(id: string, status: boolean): Promise<{
        status: string;
        data: import("./entities/log.entity").Log;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
}
