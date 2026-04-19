import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("_user")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  role!: string;
}
