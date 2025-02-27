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
exports.LogsController = void 0;
const common_1 = require("@nestjs/common");
const logs_service_1 = require("./logs.service");
const create_log_dto_1 = require("./dto/create-log.dto");
const update_log_dto_1 = require("./dto/update-log.dto");
let LogsController = class LogsController {
    constructor(logsService) {
        this.logsService = logsService;
    }
    create(createLogDto) {
        return this.logsService.create(createLogDto);
    }
    findAll(page, limit, filter) {
        return this.logsService.getAllFiter(page, limit, filter);
    }
    async findOne(id) {
        const response = await this.logsService.findOne({
            where: { id: id },
        });
        if (!response) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return response;
    }
    async update(id, updateLogsDto) {
        return this.logsService.update(+id, updateLogsDto);
    }
    updateStatus(id, status) {
        return this.logsService.status(+id, status);
    }
    async remove(id) {
        return this.logsService.remove(+id);
    }
};
exports.LogsController = LogsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_log_dto_1.CreateLogDto]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LogsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_log_dto_1.UpdateLogDto]),
    __metadata("design:returntype", Promise)
], LogsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('updateStatus'),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], LogsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LogsController.prototype, "remove", null);
exports.LogsController = LogsController = __decorate([
    (0, common_1.Controller)('logs'),
    __metadata("design:paramtypes", [logs_service_1.LogsService])
], LogsController);
//# sourceMappingURL=logs.controller.js.map