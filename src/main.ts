import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Updated origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  app.use(bodyParser.json({ limit: '40mb' }));
  app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));

  // Set up basic authentication for Swagger
  app.use(
    ['/document'],
    basicAuth({
      users: { 'admin': '123456' }, // Set your username and password here
      challenge: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('POS API')
    .setDescription('The POS API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document);

  await app.listen(process.env.BACKEND_PORT || 3001);
}
bootstrap();