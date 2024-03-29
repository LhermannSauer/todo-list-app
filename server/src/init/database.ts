import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  entities: [__dirname + '/../models/*.{ts,js}'],
  migrations: ['../migrations/*.ts'],
  timezone: '-03:00',
  //migrationsRun: true,
  synchronize: true,
});

export const initDB = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log(`Connected to ${AppDataSource.options.type}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
