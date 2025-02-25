import { CreateChanelDto } from './dto/create-chanel.dto';
import { UpdateChanelDto } from './dto/update-chanel.dto';
export declare class ChanelService {
    create(createChanelDto: CreateChanelDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateChanelDto: UpdateChanelDto): string;
    remove(id: number): string;
}
