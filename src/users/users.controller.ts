import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./DTO/createUser.dto";

@Controller("/api/users")
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Post("/createUser")
    create(@Body() userDto:CreateUserDto){
        return this.usersService.createUser(userDto)
    }
    @Get("/getAll")
    getAll(){
        return this.usersService.getAllUsers()
    }
}
