"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const appPort = 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("A4-YUG CRM BACKEND")
        .setDescription("Описание ендпоинтов приложения")
        .addTag("Endpoints")
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup("/api/docs", app, swaggerDocument);
    await app.listen(appPort);
    console.log(`app is running on ${appPort} port`);
}
bootstrap();
//# sourceMappingURL=main.js.map