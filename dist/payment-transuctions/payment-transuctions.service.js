"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransuctionsService = void 0;
const common_1 = require("@nestjs/common");
let PaymentTransuctionsService = class PaymentTransuctionsService {
    create(createPaymentTransuctionDto) {
        return 'This action adds a new paymentTransuction';
    }
    findAll() {
        return `This action returns all paymentTransuctions`;
    }
    findOne(id) {
        return `This action returns a #${id} paymentTransuction`;
    }
    update(id, updatePaymentTransuctionDto) {
        return `This action updates a #${id} paymentTransuction`;
    }
    remove(id) {
        return `This action removes a #${id} paymentTransuction`;
    }
};
exports.PaymentTransuctionsService = PaymentTransuctionsService;
exports.PaymentTransuctionsService = PaymentTransuctionsService = __decorate([
    (0, common_1.Injectable)()
], PaymentTransuctionsService);
//# sourceMappingURL=payment-transuctions.service.js.map