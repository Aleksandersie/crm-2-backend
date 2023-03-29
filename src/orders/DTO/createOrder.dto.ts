import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({ example: "13811", description: "Случайное число для индентификации заказа" })
    readonly randomNumber: number;

    @ApiProperty({
        example: "ООО Рога и копыта",
        description: "Названия владельца заказа(тот для кого сделан заказ)",
    })
    readonly orderOwner: string;

    @ApiProperty({
        example: "Менеджер Иван",
        description: "Автор заказа(тот кто создал заказ)",
    })
    readonly orderAuthor: string;

    @ApiProperty({
        example: "1000",
        description: "Стоимость заказа",
    })
    readonly orderTotalCost: number;

    @ApiProperty({
        example: "Обратите внимание на мелкие детали",
        description: "Сопроводительная записка к заказу",
    })
    readonly orderMessage: string;

    @ApiProperty({
        example: "Наклейки на витрину",
        description: "Описание заказа",
    })
    readonly orderTitle: string;

    @ApiProperty({
        example: "{ width:1,2 , height: 0.5, pieces: 3 }",
        description: "Массив с элементами заказа",
    })
    readonly orderItems: [];
}
