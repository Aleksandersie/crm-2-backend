import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";

@ApiTags("Создание заказов")
@Controller("api/orders")
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Get("/getAllOrders")
    getAll() {
        return this.ordersService.getAllOrders();
    }
    @Post("/createOrder")
    create() {
        return "create";
    }
}
