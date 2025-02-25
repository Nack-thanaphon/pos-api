import { PartialType } from '@nestjs/swagger';
import { CreatePaymentTransuctionDto } from './create-payment-transuction.dto';

export class UpdatePaymentTransuctionDto extends PartialType(CreatePaymentTransuctionDto) {}
