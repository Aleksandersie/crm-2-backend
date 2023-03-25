import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import Users from "./users.model";
import {CreateUserDto} from "./DTO/createUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private usersRepository: typeof Users) {
    }
    async createUser(dto:CreateUserDto):Promise<Users>{
      const createdUser = await this.usersRepository.create(dto)
      return createdUser
    }
    async getAllUsers():Promise<Users[]>{
      const users = await this.usersRepository.findAll()
      return users
    }
}
