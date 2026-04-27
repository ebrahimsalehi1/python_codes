import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./topics/to_003_relations/entity/User";
import { Project } from "./topics/to_003_relations/entity/Project";

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
  entities: [User, Project],
  migrations: [],
  subscribers: [],
});
