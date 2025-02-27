import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CrudService } from 'src/libs/common/src';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService extends CrudService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async getAllFiter(
    page: number = 1,
    limit: number = 10,
    filter: string = '',
  ): Promise<{ data: User[]; total: number }> {
    const [data, total] = await this.userRepository.findAndCount({
      where: {
        username: Like(`%${filter}%`),
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    return { data: data, total };
  }

  async checkEmailExit(email: string): Promise<{
    status: boolean;
    data: User | null;
  }> {
    const user = await this.userRepository.findOne({
      where: { email: email },
    });

    if (user) {
      return {
        status: true,
        data: user,
      };
    } else {
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

  async findPermissionByEmail(email: string): Promise<string> {
    const resp = await this.userRepository.findOne({
      relations: ['roles'],
      where: { email: email },
    });
    return resp ? resp.roles.name : "";
  }


  async createOrGetData(data: CreateUserDto): Promise<{
    status: string;
    role: string;
  }> {
    const existOrNot = await this.checkEmailExit(data.email);

    if (!existOrNot.status) {
      data.status = true;
      data.role = 1;
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
}
