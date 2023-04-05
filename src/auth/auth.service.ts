import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/DTO/createUser.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import Users from "../users/users.model";
import jwt_decode from "jwt-decode";

interface IDecoded {
    userName: string;
}
@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto);
        const token = await this.generateToken(user);
        const decode: IDecoded = await jwt_decode(String(token.token));

        const response = {
            currentUserName: decode.userName,
            token: token.token,
        };

        return response;
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.findUserByName(userDto.userName);
        if (candidate) {
            throw new HttpException("Пользователь существует", HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.createUser(userDto);
        return await this.generateToken(user);
    }
    private async generateToken(user: Users) {
        const payload = {
            userName: user.userName,
            userRole: user.userRole,
            priceCategory: user.priceCategory,
        };
        return { token: this.jwtService.sign(payload) };
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.findUserByName(userDto.userName);
        if (!user) {
            throw new UnauthorizedException({ message: "Пользователь не существует" });
        }
        if (user.userPass !== userDto.userPass) {
            throw new UnauthorizedException({ message: "Неправильный пароль" });
        }
        return user;
    }
}
