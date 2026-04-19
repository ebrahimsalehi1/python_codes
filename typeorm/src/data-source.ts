import "reflect-metadata";
import { DataSource } from "typeorm";
import { User as User001 } from "./topics/to_001_new_to_typeorm/entity/User";
import { User as User002 } from "./topics/to_002_find_by/entity/User";

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
  entities: [User001, User002],
  migrations: [],
  subscribers: [],
});
