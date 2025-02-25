import { PartialType } from '@nestjs/swagger';
import { CreateChanelDto } from './create-chanel.dto';

export class UpdateChanelDto extends PartialType(CreateChanelDto) {}
