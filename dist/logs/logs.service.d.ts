import { Log } from './entities/log.entity';
import { Repository } from 'typeorm';
import { CrudService } from 'src/libs/common/src';
export declare class LogsService extends CrudService<Log> {
    private readonly logsRepository;
    constructor(logsRepository: Repository<Log>);
    getAllFiter(page?: number, limit?: number, filter?: string): Promise<{
        data: Log[];
        total: number;
    }>;
}
