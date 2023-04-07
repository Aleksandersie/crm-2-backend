import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/DTO/createUser.dto";
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";

class Auth {
    @ApiProperty({ example: "1", description: "ID" })
    userName = "string";
    @ApiProperty({ example: "1", description: "ID" })
    token = "string";
}

@ApiTags("Авторизация и аунтификация пользователей")
@Controller("api/auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiOperation({ summary: "Вход в приложение" })
    @ApiResponse({ status: 200, type: Auth })
    @Post("/login")
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({ summary: "Регистрация пользователя" })
    @ApiResponse({ status: 200, type: Auth })
    @Post("/registration")
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
}
