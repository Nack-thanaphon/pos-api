import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
export declare class LogsController {
    private readonly logsService;
    constructor(logsService: LogsService);
    create(createLogDto: CreateLogDto): Promise<import("./entities/log.entity").Log>;
    findAll(page: number, limit: number, filter: string): Promise<{
        data: import("./entities/log.entity").Log[];
        total: number;
    }>;
}
