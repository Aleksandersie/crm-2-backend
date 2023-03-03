import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const appPort = 5000;
    const app = await NestFactory.create(AppModule);
    const swaggerConfig = new DocumentBuilder()
        .setTitle("A4-YUG CRM BACKEND")
        .setDescription("Описание ендпоинтов приложения")
        .addTag("Endpoints")
        .build()
    const swaggerDocument = SwaggerModule.createDocument(app,swaggerConfig)
    SwaggerModule.setup("/api/docs", app,swaggerDocument)

    await app.listen(appPort);
    console.log(`app is running on ${appPort} port`);
}
bootstrap();
