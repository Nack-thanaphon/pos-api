import { Injectable } from '@nestjs/common';
import { CreatePaymentTransuctionDto } from './dto/create-payment-transuction.dto';
import { UpdatePaymentTransuctionDto } from './dto/update-payment-transuction.dto';

@Injectable()
export class PaymentTransuctionsService {
  create(createPaymentTransuctionDto: CreatePaymentTransuctionDto) {
    return 'This action adds a new paymentTransuction';
  }

  findAll() {
    return `This action returns all paymentTransuctions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentTransuction`;
  }

  update(id: number, updatePaymentTransuctionDto: UpdatePaymentTransuctionDto) {
    return `This action updates a #${id} paymentTransuction`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentTransuction`;
  }
}
