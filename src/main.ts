import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const appPort = 5000;
    const app = await NestFactory.create(AppModule);
    await app.listen(appPort);
    console.log(`app is running on ${appPort} port`);
}
bootstrap();
