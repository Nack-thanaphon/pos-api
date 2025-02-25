import { Injectable } from '@nestjs/common';
import { Banner } from './entities/banner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from 'src/libs/common/src';
import { Repository } from 'typeorm';

@Injectable()
export class BannerService extends CrudService<Banner> {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>,
  ) {
    super(bannerRepository);
  }

}
