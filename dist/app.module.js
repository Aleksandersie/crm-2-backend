"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const prices_module_1 = require("./prices/prices.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const orders_module_1 = require("./orders/orders.module");
const prices_model_1 = require("./prices/prices.model");
const users_model_1 = require("./users/users.model");
const order_model_1 = require("./orders/order.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: "91.201.55.182",
                port: 5432,
                username: "test",
                password: "1234",
                database: "testdb",
                autoLoadModels: true,
                models: [prices_model_1.default, users_model_1.default, order_model_1.default],
            }),
            prices_module_1.PricesModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map