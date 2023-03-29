import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./DTO/createOrder.dto";
@ApiTags("Создание заказов")
@Controller("api/orders")
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Get("/getAllOrders")
    getAll() {
        return this.ordersService.getAllOrders();
    }
    @Post("/createOrder")
    create(@Body() createDto: CreateOrderDto) {
        return this.ordersService.createOrder();
    }
}
