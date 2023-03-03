import { Body, Controller, Get, Post } from "@nestjs/common";
import { PricesService } from "./prices.service";
import { CreatePriceListDto } from "./DTO/createPriceList.dto";

@Controller("/api")
export class PricesController {
    constructor(private pricesService: PricesService) {}
    @Get("/getPrices")
    getTest() {
        return this.pricesService.getServiceTest();
    }
    @Get("/getPriceList")
    getPriceList() {
        return this.pricesService.getPriceList();
    }
    @Post("/createPriceList")
    createPriceList(@Body() createDto: CreatePriceListDto) {
        return this.pricesService.createPriceList(createDto);
    }
}
