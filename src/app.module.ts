import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { PricesModule } from "./prices/prices.module";
import Prices from "./prices/prices.model";

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: "91.201.55.182",
            port: 5432,
            username: "test",
            password: "1234",
            database: "testdb",
            autoLoadModels: true,
            models: [Prices],
        }),
        PricesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
