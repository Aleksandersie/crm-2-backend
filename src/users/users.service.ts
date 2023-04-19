import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Users from "./users.model";
import { CreateUserDto } from "./DTO/createUser.dto";
import { Op } from "sequelize";

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private usersRepository: typeof Users) {}
    async createUser(dto: CreateUserDto): Promise<Users> {
        const createdUser = await this.usersRepository.create(dto);
        return createdUser;
    }
    async getAllUsers(): Promise<Users[]> {
        const users = await this.usersRepository.findAll();
        return users;
    }
    async findUserByName(userName: string) {
        const user = await this.usersRepository.findOne({ where: { userName } });
        return user;
    }
    async findCustomerByName(userName: string) {
        const user = await this.usersRepository.findAll({
            where: {
                userName: { [Op.iLike]: "%" + userName + "%" },
                userRole: "customer",
            },
        });
        return user;
    }
}
