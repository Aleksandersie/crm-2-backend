import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PricesModule } from "./prices/prices.module";
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import Prices from "./prices/prices.model";
import Users from "./users/users.model";

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
            models: [Prices,Users],
        }),
        PricesModule,
        AuthModule,
        UsersModule,
        OrdersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
