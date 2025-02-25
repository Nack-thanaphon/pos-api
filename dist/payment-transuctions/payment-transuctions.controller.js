"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransuctionsController = void 0;
const common_1 = require("@nestjs/common");
const payment_transuctions_service_1 = require("./payment-transuctions.service");
const create_payment_transuction_dto_1 = require("./dto/create-payment-transuction.dto");
const update_payment_transuction_dto_1 = require("./dto/update-payment-transuction.dto");
let PaymentTransuctionsController = class PaymentTransuctionsController {
    constructor(paymentTransuctionsService) {
        this.paymentTransuctionsService = paymentTransuctionsService;
    }
    create(createPaymentTransuctionDto) {
        return this.paymentTransuctionsService.create(createPaymentTransuctionDto);
    }
    findAll() {
        return this.paymentTransuctionsService.findAll();
    }
    findOne(id) {
        return this.paymentTransuctionsService.findOne(+id);
    }
    update(id, updatePaymentTransuctionDto) {
        return this.paymentTransuctionsService.update(+id, updatePaymentTransuctionDto);
    }
    remove(id) {
        return this.paymentTransuctionsService.remove(+id);
    }
};
exports.PaymentTransuctionsController = PaymentTransuctionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_transuction_dto_1.CreatePaymentTransuctionDto]),
    __metadata("design:returntype", void 0)
], PaymentTransuctionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentTransuctionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentTransuctionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_transuction_dto_1.UpdatePaymentTransuctionDto]),
    __metadata("design:returntype", void 0)
], PaymentTransuctionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentTransuctionsController.prototype, "remove", null);
exports.PaymentTransuctionsController = PaymentTransuctionsController = __decorate([
    (0, common_1.Controller)('payment-transuctions'),
    __metadata("design:paramtypes", [payment_transuctions_service_1.PaymentTransuctionsService])
], PaymentTransuctionsController);
//# sourceMappingURL=payment-transuctions.controller.js.map