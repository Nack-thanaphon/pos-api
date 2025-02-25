import { CreatePaymentTransuctionDto } from './dto/create-payment-transuction.dto';
import { UpdatePaymentTransuctionDto } from './dto/update-payment-transuction.dto';
export declare class PaymentTransuctionsService {
    create(createPaymentTransuctionDto: CreatePaymentTransuctionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePaymentTransuctionDto: UpdatePaymentTransuctionDto): string;
    remove(id: number): string;
}
