import { Module } from '@nestjs/common';
import { PaymentTransuctionsService } from './payment-transuctions.service';
import { PaymentTransuctionsController } from './payment-transuctions.controller';

@Module({
  controllers: [PaymentTransuctionsController],
  providers: [PaymentTransuctionsService],
})
export class PaymentTransuctionsModule {}
