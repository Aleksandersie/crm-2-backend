import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Order from "./order.model";
import { CreateOrderDto } from "./DTO/createOrder.dto";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private ordersRepository: typeof Order) {}
    async getAllOrders() {
        return 123;
    }
    async createOrder(dto: CreateOrderDto) {
        console.log(dto);
    }
}
