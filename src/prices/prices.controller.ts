import { Controller, Get } from "@nestjs/common";
import { PricesService } from "./prices.service";

@Controller("/api")
export class PricesController {
    constructor(private pricesService: PricesService) {}
    @Get("/getPrices")
    getTest() {
        return this.pricesService.getServiceTest();
    }
}
