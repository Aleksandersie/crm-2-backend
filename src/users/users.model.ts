import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IUserCreationAttr {
    userName: string;
    userPass: string;
    userRole: string;
    priceCategory: string;
}
@Table({ tableName: "users" })
export default class Users extends Model<Users, IUserCreationAttr> {
    @ApiProperty({ example: 1, description: "ID" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: "ООО Ололо", description: "Имя пользователя" })
    @Column({ type: DataType.STRING, unique: true })
    userName: string;

    @ApiProperty({ example: "myPassword", description: "Пароль пользователя" })
    @Column({ type: DataType.STRING })
    userPass: string;

    @ApiProperty({ example: "manager", description: "Роль пользователя" })
    @Column({ type: DataType.STRING })
    userRole: string;

    @ApiProperty({ example: "retail", description: "Категория прайс листа" })
    @Column({ type: DataType.STRING })
    priceCategory: string;
}
