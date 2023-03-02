import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CarsCreationAttributes {
    carNumber: string;
    date: string;
}

@Table({ tableName: 'cars' })
export class Cars extends Model<Cars, CarsCreationAttributes> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;
    @Column({ type: DataType.STRING })
    carNumber: string;
    @Column({ type: DataType.STRING })
    startTime: string;
}