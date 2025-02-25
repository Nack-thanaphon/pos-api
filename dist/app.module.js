"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const mailer_1 = require("@nestjs-modules/mailer");
const users_module_1 = require("./users/users.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const products_module_1 = require("./products/products.module");
const user_entity_1 = require("./users/entities/user.entity");
const product_entity_1 = require("./products/entities/product.entity");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const banner_module_1 = require("./banner/banner.module");
const orders_module_1 = require("./orders/orders.module");
const cloudinary_service_1 = require("./cloudinary/cloudinary.service");
const cart_module_1 = require("./cart/cart.module");
const logs_module_1 = require("./logs/logs.module");
const payment_transuctions_module_1 = require("./payment-transuctions/payment-transuctions.module");
const role_module_1 = require("./role/role.module");
const chanel_module_1 = require("./chanel/chanel.module");
const cities_module_1 = require("./cities/cities.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const brands_module_1 = require("./brands/brands.module");
const categories_module_1 = require("./categories/categories.module");
const stores_module_1 = require("./stores/stores.module");
const sale_module_1 = require("./sale/sale.module");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Bangkok');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            jwt_1.JwtModule.registerAsync({
                global: true,
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '60s' },
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DB'),
                    entities: ['dist/**/*.entity.js'],
                    autoLoadEntities: true,
                    migrationsRun: true,
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, product_entity_1.Product]),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads/',
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'skt.connect.service@gmail.com',
                        pass: 'ikaxlfzoccipharu',
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                },
                defaults: {
                    from: 'System SKT Connect',
                },
            }),
            users_module_1.UsersModule,
            dashboard_module_1.DashboardModule,
            products_module_1.ProductsModule,
            banner_module_1.BannerModule,
            orders_module_1.OrdersModule,
            cart_module_1.CartModule,
            logs_module_1.LogsModule,
            payment_transuctions_module_1.PaymentTransuctionsModule,
            role_module_1.RoleModule,
            chanel_module_1.ChanelModule,
            cities_module_1.CitiesModule,
            suppliers_module_1.SuppliersModule,
            brands_module_1.BrandsModule,
            categories_module_1.CategoriesModule,
            stores_module_1.StoresModule,
            sale_module_1.SaleModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, cloudinary_service_1.CloudinaryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map