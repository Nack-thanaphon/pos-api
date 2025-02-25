import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsModule } from './products/products.module';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc'; // import UTC plugin
import * as timezone from 'dayjs/plugin/timezone';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BannerModule } from './banner/banner.module';
import { OrdersModule } from './orders/orders.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { CartModule } from './cart/cart.module';
import { LogsModule } from './logs/logs.module';
import { PaymentTransuctionsModule } from './payment-transuctions/payment-transuctions.module';
import { RoleModule } from './role/role.module';
import { ChanelModule } from './chanel/chanel.module';
import { CitiesModule } from './cities/cities.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { StoresModule } from './stores/stores.module';
import { SaleModule } from './sale/sale.module';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Bangkok');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: ['dist/**/*.entity.js'],
        autoLoadEntities: true,
        migrationsRun: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User, Product]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads/',
    }),
    MailerModule.forRoot({
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
    UsersModule,
    DashboardModule,
    ProductsModule,
    BannerModule,
    OrdersModule,
    CartModule,
    LogsModule,
    PaymentTransuctionsModule,
    RoleModule,
    ChanelModule,
    CitiesModule,
    SuppliersModule,
    BrandsModule,
    CategoriesModule,
    StoresModule,
    SaleModule,
  ],
  controllers: [AppController],
  providers: [AppService, CloudinaryService],
})
export class AppModule {}