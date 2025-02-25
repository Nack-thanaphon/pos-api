import { ChanelService } from './chanel.service';
import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';
export declare class ChanelController {
    private readonly chanelService;
    constructor(chanelService: ChanelService);
    create(createChanelDto: CreateChanelDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateChanelDto: UpdateChanelDto): string;
    remove(id: string): string;
}
