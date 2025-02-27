"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
const swagger_1 = require("@nestjs/swagger");
const basicAuth = require("express-basic-auth");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept, Authorization',
    });
    app.use(bodyParser.json({ limit: '40mb' }));
    app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));
    app.use(['/document'], basicAuth({
        users: { 'admin': '123456' },
        challenge: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('POS API')
        .setDescription('The POS API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('document', app, document);
    await app.listen(process.env.BACKEND_PORT || 3001);
}
bootstrap();
//# sourceMappingURL=main.js.map