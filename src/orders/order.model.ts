import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IOrderCreation {
    randomNumber: number;
    orderOwner: string;
    orderAuthor: string;
    orderTotalCost: number;
    orderMessage: string;
    orderTitle: string;
}

@Table({ tableName: "orders" })
export default class Order extends Model<Order, IOrderCreation> {
    @ApiProperty({ example: "1", description: "ID" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: "13811", description: "Случайное число для индентификации заказа" })
    @Column({ type: DataType.INTEGER, unique: true })
    randomNumber: number;

    @ApiProperty({
        example: "ООО Рога и копыта",
        description: "Названия владельца заказа(тот для кого сделан заказ)",
    })
    @Column({ type: DataType.STRING })
    orderOwner: string;

    @ApiProperty({
        example: "Менеджер Иван",
        description: "Автор заказа(тот кто создал заказ)",
    })
    @Column({ type: DataType.STRING })
    orderAuthor: string;

    @ApiProperty({
        example: "1000",
        description: "Стоимость заказа",
    })
    @Column({ type: DataType.INTEGER })
    orderTotalCost: number;

    @ApiProperty({
        example: "Обратите внимание на мелкие детали",
        description: "Сопроводительная записка к заказу",
    })
    @Column({ type: DataType.STRING })
    orderMessage: string;

    @ApiProperty({
        example: "Наклейки на витрину",
        description: "Описание заказа",
    })
    @Column({ type: DataType.STRING })
    orderTitle: string;
}
