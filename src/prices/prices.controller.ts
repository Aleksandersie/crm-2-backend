import { Body, Controller, Get, Post } from "@nestjs/common";
import { PricesService } from "./prices.service";
import { CreatePriceListDto } from "./DTO/createPriceList.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import Prices from "./prices.model";

@ApiTags("Прайс лист")
@Controller("/api")
export class PricesController {
    constructor(private pricesService: PricesService) {}

    @ApiOperation({summary:"Получение прайс листа"})
    @ApiResponse({status:200, type:Prices})
    @Get("/getPriceList")
    getPriceList() {
        return this.pricesService.getPriceList();
    }
    @ApiOperation({summary:"Создание прайс листа"})
    @ApiResponse({status:200, type:Prices})
    @Post("/createPriceList")
    createPriceList(@Body() createDto: CreatePriceListDto) {
        return this.pricesService.createPriceList(createDto);
    }
}
