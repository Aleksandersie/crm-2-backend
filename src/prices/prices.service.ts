 import { Injectable } from "@nestjs/common";
import Prices from "./prices.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePriceListDto } from "./DTO/createPriceList.dto";
 import {where} from "sequelize";

@Injectable()
export class PricesService {
    constructor(@InjectModel(Prices) private priceRepository: typeof Prices) {}
    async getPriceList() {
        const priceList = await this.priceRepository.findOne({where:{priceCategory:"retail"}});
        return priceList;
    }
    async createPriceList(dto: CreatePriceListDto) {
        const priceList = await this.priceRepository.create(dto);
        return priceList;
    }
}
