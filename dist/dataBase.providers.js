"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: "postgres",
                host: "91.201.55.182",
                port: 5432,
                username: "test",
                password: "1234",
                database: "testDb",
            });
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=dataBase.providers.js.map