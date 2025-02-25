import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Injectable()
export class DashboardService {
  async getDashboard() {
    const paymentTotal = 100000;
    const paymentToday = 1000; 
    const employeeTotal = 10; 
    const customerTotal = 1000;
    const caseTotal = 230;

    return {
      paymentTotal: paymentTotal.toLocaleString(),
      paymentToday: paymentToday.toLocaleString(),
      employeeTotal: employeeTotal.toLocaleString(),
      customerTotal: customerTotal.toLocaleString(),
      caseTotal: caseTotal.toLocaleString(),
    };
  }
}
