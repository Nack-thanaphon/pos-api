import { PaymentTransuctionsService } from './payment-transuctions.service';
import { CreatePaymentTransuctionDto } from './dto/create-payment-transuction.dto';
import { UpdatePaymentTransuctionDto } from './dto/update-payment-transuction.dto';
export declare class PaymentTransuctionsController {
    private readonly paymentTransuctionsService;
    constructor(paymentTransuctionsService: PaymentTransuctionsService);
    create(createPaymentTransuctionDto: CreatePaymentTransuctionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePaymentTransuctionDto: UpdatePaymentTransuctionDto): string;
    remove(id: string): string;
}
