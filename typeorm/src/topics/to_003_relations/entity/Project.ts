import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("_project")
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ nullable: true })
  description!: string;

  @Column()
  status!: "done" | "pending" | "doing";

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
