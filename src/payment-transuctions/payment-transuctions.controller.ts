import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentTransuctionsService } from './payment-transuctions.service';
import { CreatePaymentTransuctionDto } from './dto/create-payment-transuction.dto';
import { UpdatePaymentTransuctionDto } from './dto/update-payment-transuction.dto';

@Controller('payment-transuctions')
export class PaymentTransuctionsController {
  constructor(private readonly paymentTransuctionsService: PaymentTransuctionsService) {}

  @Post()
  create(@Body() createPaymentTransuctionDto: CreatePaymentTransuctionDto) {
    return this.paymentTransuctionsService.create(createPaymentTransuctionDto);
  }

  @Get()
  findAll() {
    return this.paymentTransuctionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentTransuctionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentTransuctionDto: UpdatePaymentTransuctionDto) {
    return this.paymentTransuctionsService.update(+id, updatePaymentTransuctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentTransuctionsService.remove(+id);
  }
}
