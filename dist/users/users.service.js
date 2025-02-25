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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const src_1 = require("../libs/common/src");
let UserService = class UserService extends src_1.CrudService {
    constructor(userRepository) {
        super(userRepository);
        this.userRepository = userRepository;
    }
    async getAllFiter(page = 1, limit = 10, filter = '') {
        const [data, total] = await this.userRepository.findAndCount({
            where: {
                username: (0, typeorm_2.Like)(`%${filter}%`),
            },
            take: limit,
            skip: (page - 1) * limit,
        });
        return { data: data, total };
    }
    async checkEmailExit(email) {
        const user = await this.userRepository.findOne({
            where: { email: email },
        });
        if (user) {
            return {
                status: true,
                data: user,
            };
        }
        else {
            return {
                status: false,
                data: null,
            };
        }
    }
    async getNewCode() {
        const user = await this.userRepository.findOne({
            where: {},
            order: {
                code: 'DESC',
            },
        });
        let newCodeId = 1;
        if (user && user.code.startsWith('USER')) {
            const numericPart = user.code.slice(2);
            if (/^\d+$/.test(numericPart)) {
                newCodeId = parseInt(numericPart) + 1;
            }
        }
        const formattedCodeId = `USER${newCodeId.toString()}`;
        return formattedCodeId;
    }
    async findPermissionByEmail(email) {
        const resp = await this.userRepository.findOne({
            relations: ['roles'],
            where: { email: email },
        });
        return resp ? resp.roles.name : "";
    }
    async createOrGetData(data) {
        const existOrNot = await this.checkEmailExit(data.email);
        if (!existOrNot.status) {
            data.status = true;
            data.role = 2;
            data.code = await this.getNewCode();
            const save = await this.create(data);
            if (save) {
                return {
                    status: 'CREATE',
                    role: await this.findPermissionByEmail(save.email),
                };
            }
        }
        return {
            status: 'LOGIN',
            role: await this.findPermissionByEmail(data.email),
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=users.service.js.map