import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { Like, Repository } from 'typeorm';
import { CrudService } from 'src/libs/common/src';

@Injectable()
export class LogsService extends CrudService<Log> {
  constructor(
    @InjectRepository(Log)
    private readonly logsRepository: Repository<Log>,
  ) {
    super(logsRepository);
  }

  async getAllFiter(
    page: number = 1,
    limit: number = 10,
    filter: string = '',
  ): Promise<{ data: Log[]; total: number }> {
    const [products, total] = await this.logsRepository.findAndCount({
      where: {
        event_type: Like(`%${filter}%`),
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    return { data: products, total };
  }
}
