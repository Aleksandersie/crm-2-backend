import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./DTO/createUser.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import Users from "./users.model";

@ApiTags("Создание пользователей")
@Controller("/api/users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({ summary: "Создание пользователя" })
    @ApiResponse({ status: 200, type: Users })
    @Post("/createUser")
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: "Получение всех пользователей" })
    @ApiResponse({ status: 200, type: Users })
    @Get("/getAll")
    getAll() {
        return this.usersService.getAllUsers();
    }
    @ApiOperation({ summary: "Поиск заказчика по имени" })
    @ApiResponse({ status: 200, type: Users })
    @Get("/searchCustomerByName")
    getAllCustomers(@Query("userName") userName: string) {
        return this.usersService.findCustomerByName(userName);
    }
}
