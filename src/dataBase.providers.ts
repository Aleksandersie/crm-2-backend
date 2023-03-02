import {Sequelize} from "sequelize-typescript";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
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