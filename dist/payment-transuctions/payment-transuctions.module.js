"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransuctionsModule = void 0;
const common_1 = require("@nestjs/common");
const payment_transuctions_service_1 = require("./payment-transuctions.service");
const payment_transuctions_controller_1 = require("./payment-transuctions.controller");
let PaymentTransuctionsModule = class PaymentTransuctionsModule {
};
exports.PaymentTransuctionsModule = PaymentTransuctionsModule;
exports.PaymentTransuctionsModule = PaymentTransuctionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [payment_transuctions_controller_1.PaymentTransuctionsController],
        providers: [payment_transuctions_service_1.PaymentTransuctionsService],
    })
], PaymentTransuctionsModule);
//# sourceMappingURL=payment-transuctions.module.js.map