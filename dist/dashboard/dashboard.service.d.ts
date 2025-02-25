export declare class DashboardService {
    getDashboard(): Promise<{
        paymentTotal: string;
        paymentToday: string;
        employeeTotal: string;
        customerTotal: string;
        caseTotal: string;
    }>;
}
