import { Controller, Get } from "@nestjs/common";

@Controller("/prices")
export class PricesController {
    @Get("/")
    getTest() {
        return "test";
    }
}
