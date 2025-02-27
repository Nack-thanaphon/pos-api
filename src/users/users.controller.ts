import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { ApiBody } from '@nestjs/swagger';
import { LogsService } from 'src/logs/logs.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UserService,
    private readonly logsService: LogsService,
  ) { }

  @Post('login')
  async login(
    @Body() createUserDto: CreateUserDto,
  ) {
    const checkData = await this.usersService.createOrGetData(createUserDto)

    if (checkData.status === "CREATE") {
      this.logsService.create({
        event_type: 'create-user',
        event_detail: 'Create user ' + createUserDto.email,
      })
      return {
        status: 200,
        data: checkData.role,
        message: 'Create user success'
      }
    } else {
      return {
        status: 200,
        data: checkData.role,
        message: 'User exist in system'
      }
    }
  }

  @Get('get-all')
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('filter') filter: string,
  ) {
    return this.usersService.getAllFiter(page, limit, filter);
  }

  @Post('get-permission')
  @ApiBody({ schema: { type: 'object', properties: { email: { type: 'string' } } } })
  getPermission(
    @Body('email') email: string
  ) {
    return this.usersService.findPermissionByEmail(email);
  }

  @Get('get-one/:code')
  async findOne(@Param('code') code: string) {
    // const response = await this.usersService.findOne({
    //   where: { id: id },
    // });

    // const baseUrl = process.env.BACKEND_URL || 'http://localhost:3500/';
    // if (response.image_url) {
    //   if (!response.image_url.startsWith('https://profile.line-scdn.net/')) {
    //     response.image_url = baseUrl + response.image_url;
    //   }
    // }

    // return response;
  }

  @Patch('update-status')
  updateStatus(@Body('code') code: string, @Body('status') status: boolean) {
    return this.usersService.status(+code, status);
  }

  @Delete('delete/:code')
  remove(@Param('code') code: string) {
    return this.usersService.remove(+code);
  }
}