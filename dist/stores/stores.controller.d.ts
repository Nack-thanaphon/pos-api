import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    create(createStoreDto: CreateStoreDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStoreDto: UpdateStoreDto): string;
    remove(id: string): string;
}
