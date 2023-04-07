import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./DTO/createOrder.dto";
import Orders from "./order.model";

@ApiTags("Создание заказов")
@Controller("api/orders")
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @ApiOperation({ summary: "Получение всех заказов" })
    @ApiResponse({ status: 200, type: Orders })
    @Get("/getAllOrders")
    getAll(): Promise<CreateOrderDto[]> {
        return this.ordersService.getAllOrders();
    }

    @ApiOperation({ summary: "Создание заказа" })
    @ApiResponse({ status: 200, type: Orders })
    @Post("/createOrder")
    create(@Body() createDto: CreateOrderDto) {
        // return this.ordersService.createOrder(createDto);
        console.log(createDto);
    }
}
