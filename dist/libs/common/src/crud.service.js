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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const dayjs = require("dayjs");
let CrudService = class CrudService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(options) {
        return await this.repository.find(options);
    }
    async findOne(options) {
        return await this.repository.findOne(options);
    }
    async create(entity) {
        const dateNow = dayjs().utcOffset(7).format('YYYY-MM-DD HH:mm:ss');
        entity.created_at = dateNow;
        entity.updated_at = dateNow;
        const createdEntity = this.repository.create(entity);
        return await this.repository.save(createdEntity);
    }
    async update(id, entity) {
        try {
            const data = await this.repository.findOneById(id);
            const dateNow = dayjs()
                .utcOffset(7)
                .format('YYYY-MM-DD HH:mm:ss');
            entity.updated_at = dateNow;
            if (!data) {
                throw new common_1.HttpException({
                    error_code: 4040,
                    message_code: 'memberNotFound',
                }, 404);
            }
            const updatedMember = await this.repository.save({
                ...data,
                ...entity,
            });
            return updatedMember;
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException({
                error_code: 5000,
                message_code: 'interServerError',
            }, 500);
        }
    }
    async remove(id) {
        const response = await this.repository.delete(id);
        if (response) {
            return {
                success: true,
                message: 'Delete success',
            };
        }
    }
    async softDelete(id) {
        const data = await this.repository.findOneById(id);
        data.is_deleted = true;
        const updatedMember = await this.repository.save(data);
        return updatedMember;
    }
    async status(id, status) {
        const data = await this.repository.findOneById(id);
        if (!data) {
            throw new Error(`Entity with id ${id} not found`);
        }
        data.status = status;
        const updatedEntity = await this.repository.save(data);
        return {
            status: 'success',
            data: updatedEntity,
        };
    }
};
exports.CrudService = CrudService;
exports.CrudService = CrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CrudService);
//# sourceMappingURL=crud.service.js.map