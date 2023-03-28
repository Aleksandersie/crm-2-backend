import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../users/DTO/createUser.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}
    async login(userDto: CreateUserDto) {
        return 321;
    }

    async registration(userDto: CreateUserDto) {
        const candidate = this.userService.findUserByName(userDto.userName);
        return candidate;
    }
}
