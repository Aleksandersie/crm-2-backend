import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Cars} from "./test.models";



@Module({
  imports: [SequelizeModule.forRoot({
    dialect: "postgres",
    host: "91.201.55.182",
    port: 5432,
    username: "test",
    password: "1234",
    database: "testdb",
    autoLoadModels: true,
    models:[Cars]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
