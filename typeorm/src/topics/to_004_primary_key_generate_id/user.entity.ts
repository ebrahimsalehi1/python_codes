import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity("_user")
export class User {
  @PrimaryColumn() // primary key
  id: number;

  @Column()
  username: string;
}
