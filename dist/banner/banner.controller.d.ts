import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    create(createBannerDto: CreateBannerDto): Promise<import("./entities/banner.entity").Banner>;
    findAll(): Promise<import("./entities/banner.entity").Banner[]>;
    findOne(id: number): Promise<import("./entities/banner.entity").Banner>;
    update(id: string, updateBannerDto: UpdateBannerDto): Promise<import("./entities/banner.entity").Banner>;
    updateStatus(id: string, updateBannerDto: UpdateBannerDto): Promise<import("./entities/banner.entity").Banner>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
