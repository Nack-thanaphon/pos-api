import { Banner } from './entities/banner.entity';
import { CrudService } from 'src/libs/common/src';
import { Repository } from 'typeorm';
export declare class BannerService extends CrudService<Banner> {
    private readonly bannerRepository;
    constructor(bannerRepository: Repository<Banner>);
}
