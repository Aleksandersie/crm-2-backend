import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface IPriceCreation {
    vinyl: number;
    vinylPC: number;
}

@Table({ tableName: "prices" })
export default class Prices extends Model<Prices, IPriceCreation> {
    @ApiProperty({example:"1", description: "ID" })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example:"1000", description: "Стоимость печати на самоклеющейся пленке" })
    @Column({ type: DataType.INTEGER, allowNull: true })
    vinyl: number;

    @ApiProperty({example:"1000", description: "Стоимость печати и резки на самоклеющейся пленке" })
    @Column({ type: DataType.INTEGER, allowNull: true })
    vinylPC: number;

    @ApiProperty({example:"1000", description: "Стоимость УФ печати на самоклеющейся пленке" })
    @Column({ type: DataType.INTEGER, allowNull: true })
    vinylUV: number;
}
