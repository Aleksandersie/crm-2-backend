"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const appPort = 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(appPort);
    console.log(`app is running on ${appPort} port`);
}
bootstrap();
//# sourceMappingURL=main.js.map