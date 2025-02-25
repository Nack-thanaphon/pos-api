import { Test, TestingModule } from '@nestjs/testing';
import { PaymentTransuctionsService } from './payment-transuctions.service';

describe('PaymentTransuctionsService', () => {
  let service: PaymentTransuctionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentTransuctionsService],
    }).compile();

    service = module.get<PaymentTransuctionsService>(PaymentTransuctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
