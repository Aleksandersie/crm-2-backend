import { Model } from 'sequelize-typescript';
interface CarsCreationAttributes {
    carNumber: string;
    date: string;
}
export declare class Cars extends Model<Cars, CarsCreationAttributes> {
    id: number;
    carNumber: string;
    startTime: string;
}
export {};
