import { Length } from 'class-validator';

export class User {
  @Length(5, 10)
  username!: string;
}
