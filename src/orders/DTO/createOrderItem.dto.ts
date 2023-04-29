import { ApiProperty } from "@nestjs/swagger";

export default class CreateOrderItemDto {
    @ApiProperty({ example: "1", description: "Ширина" })
    readonly width: number;

    @ApiProperty({ example: "1", description: "Высота" })
    readonly height: number;

    @ApiProperty({ example: "1", description: "Количество" })
    readonly quantity: number;

    @ApiProperty({ example: "Инетерьерная печать", description: "Категория изделия" })
    readonly orderItemCategory: string;

    @ApiProperty({ example: "Самоклеющаяся пленка", description: "Материал изделия" })
    readonly orderItemMaterial: string;

    @ApiProperty({ example: "1000", description: "Стоимость за одну штуку" })
    readonly priceForOnePcs: number;

    @ApiProperty({ example: "3000", description: "Общая стоимость" })
    readonly totalPrice: number;

    @ApiProperty({ example: "", description: "Пусть к файлу" })
    readonly filePath: string;
}
