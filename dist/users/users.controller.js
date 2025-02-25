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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const logs_service_1 = require("../logs/logs.service");
let UsersController = class UsersController {
    constructor(usersService, logsService) {
        this.usersService = usersService;
        this.logsService = logsService;
    }
    async login(createUserDto) {
        const checkData = await this.usersService.createOrGetData(createUserDto);
        if (checkData.status === "CREATE") {
            this.logsService.create({
                event_type: 'create-user',
                event_detail: 'Create user ' + createUserDto.email,
            });
            return {
                status: 200,
                data: checkData.role,
                message: 'Create user success'
            };
        }
        else {
            return {
                status: 200,
                data: checkData.role,
                message: 'User exist in system'
            };
        }
    }
    findAll(page, limit, filter) {
        return this.usersService.getAllFiter(page, limit, filter);
    }
    getPermission(email) {
        return this.usersService.findPermissionByEmail(email);
    }
    async findOne(code) {
    }
    updateStatus(code, status) {
        return this.usersService.status(+code, status);
    }
    remove(code) {
        return this.usersService.remove(+code);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('get-all'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('filter')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('get-permission'),
    (0, swagger_1.ApiBody)({ schema: { type: 'object', properties: { email: { type: 'string' } } } }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getPermission", null);
__decorate([
    (0, common_1.Get)('get-one/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('update-status'),
    __param(0, (0, common_1.Body)('code')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)('delete/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UserService,
        logs_service_1.LogsService])
], UsersController);
//# sourceMappingURL=users.controller.js.map