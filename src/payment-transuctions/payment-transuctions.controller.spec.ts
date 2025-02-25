import { Test, TestingModule } from '@nestjs/testing';
import { PaymentTransuctionsController } from './payment-transuctions.controller';
import { PaymentTransuctionsService } from './payment-transuctions.service';

describe('PaymentTransuctionsController', () => {
  let controller: PaymentTransuctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentTransuctionsController],
      providers: [PaymentTransuctionsService],
    }).compile();

    controller = module.get<PaymentTransuctionsController>(PaymentTransuctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
