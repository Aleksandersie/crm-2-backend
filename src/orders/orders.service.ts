import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Order from "./order.model";
import { CreateOrderDto } from "./DTO/createOrder.dto";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order) private ordersRepository: typeof Order) {}
    async getAllOrders() {
        return this.ordersRepository.findAll();
    }
    async createOrder(dto: CreateOrderDto) {
        const order = await this.ordersRepository.create(dto);
        return order;
    }
}
