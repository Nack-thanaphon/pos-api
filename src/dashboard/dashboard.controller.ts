import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}


  @Get()
  @UseGuards(JwtAuthGuard)
  getDashboard() {
    try {
      const response = this.dashboardService.getDashboard();
      if (response) {
        return response;
      }
    } catch (error) {
      return error;
    }
  }
}
