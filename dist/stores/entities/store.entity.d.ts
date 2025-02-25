import { Channel } from '../../chanel/entities/chanel.entity';
import { City } from '../../cities/entities/city.entity';
import { Sale } from '../../sale/entities/sale.entity';
export declare class Store {
    store_id: number;
    store_name: string;
    city: City;
    channel: Channel;
    sales: Sale[];
}
