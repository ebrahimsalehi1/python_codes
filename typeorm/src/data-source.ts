import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./topics/to_004_primary_key_generate_id/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: "postgresql://postgres:mysecretpassword@localhost:5432/GepardWeb",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "mysecretpassword",
  database: "GepardWeb",
  synchronize: true,
  logging: true,
  ssl: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
