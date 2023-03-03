import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IPriceCreation {
    vinyl: number;
    vinylPC: number;
}

@Table({ tableName: "prices" })
export default class Prices extends Model<Prices, IPriceCreation> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;
    @Column({ type: DataType.INTEGER, allowNull: true })
    vinyl: number;
    @Column({ type: DataType.INTEGER, allowNull: true })
    vinylPC: number;
    @Column({ type: DataType.INTEGER, allowNull: true })
    vinylUV: number;
}
