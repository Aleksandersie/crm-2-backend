import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/DTO/createUser.dto";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("Авторизация и аунтификация пользователей")
@Controller("api/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("/login")
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post("/registration")
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}
