import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
export declare abstract class CrudService<T> {
    private readonly repository;
    constructor(repository: Repository<T>);
    findAll(options?: FindManyOptions<T>): Promise<T[]>;
    findOne(options: FindOneOptions<T>): Promise<T>;
    create(entity: DeepPartial<T>): Promise<T>;
    update(id: number, entity: DeepPartial<T>): Promise<T>;
    remove(id: number): Promise<{
        success: boolean;
        message: string;
    }>;
    softDelete(id: number): Promise<Awaited<T> & T>;
    status(id: number, status: boolean): Promise<{
        status: string;
        data: Awaited<Awaited<T> & T>;
    }>;
}
