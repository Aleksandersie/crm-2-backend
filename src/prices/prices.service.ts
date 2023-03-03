 import { Injectable } from "@nestjs/common";
import Prices from "./prices.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePriceListDto } from "./DTO/createPriceList.dto";

@Injectable()
export class PricesService {
    constructor(@InjectModel(Prices) private priceRepository: typeof Prices) {}
    getServiceTest() {
        return "service test";
    }
    async getPriceList() {
        const priceList = await this.priceRepository.findAll();
        return priceList;
    }
    async createPriceList(dto: CreatePriceListDto) {
        const priceList = await this.priceRepository.create(dto);
        return priceList;
    }
}
