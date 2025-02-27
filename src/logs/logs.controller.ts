import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { LogsService } from './logs.service';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) { }


  @Post('create')
  create(@Body() createLogDto: CreateLogDto) {
    return this.logsService.create(createLogDto);
  }

  @Get('getAll')
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('filter') filter: string,
  ) {
    return this.logsService.getAllFiter(page, limit, filter);
  }




  @Get('getOne/:id')
  async findOne(@Param('id') id: number) {
    const response = await this.logsService.findOne({
      where: { id: id },
    });
    if (!response) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return response;
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateLogsDto: UpdateLogDto,
  ) {
    return this.logsService.update(+id, updateLogsDto);
  }

  @Patch('updateStatus')
  updateStatus(@Body('id') id: string, @Body('status') status: boolean) {
    // console.log('id', id);
    // console.log('status', status);
    return this.logsService.status(+id, status);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return this.logsService.remove(+id);
  }
}



