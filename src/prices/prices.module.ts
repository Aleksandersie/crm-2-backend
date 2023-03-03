import { Module } from "@nestjs/common";
import { PricesController } from "./prices.controller";
import { PricesService } from "./prices.service";
import { SequelizeModule } from "@nestjs/sequelize";
import Prices from "./prices.model";

@Module({
    controllers: [PricesController],
    providers: [PricesService],
    imports: [SequelizeModule.forFeature([Prices])],
})
export class PricesModule {}
