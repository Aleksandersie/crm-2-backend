import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "ООО Рога и копыта", description: "Имя пользователя" })
    readonly userName: string;
    @ApiProperty({ example: "myPassword", description: "Пароль пользователя" })
    readonly userPass: string;
    @ApiProperty({ example: "customer", description: "Роль пользователя" })
    readonly userRole: string;
    @ApiProperty({ example: "retail", description: "Категория прайс листа" })
    readonly priceCategory: string;
}
