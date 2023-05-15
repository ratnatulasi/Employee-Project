require('dotenv').config();
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from 'config';

const postgresConfig = {
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "Dhan1234!",
  database: "tulasidb",
}

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: 'postgres',
  synchronize: true,
  logging: false,
  entities: [`src/entity/**/*.ts`]
});

// entities: ['src/entities/**/*.entity{.ts,.js}']