import { AppDataSource } from "../../data-source";
import { User } from "./user.entity";

export function runTS004(): Promise<void> {
  return AppDataSource.initialize()
    .then(async () => {
      const user = new User();
      user.id = 100;
      user.username = "esmail";

      const userResult = await AppDataSource.getRepository(User).save(user);
      console.log(userResult);
    })
    .catch((error) => console.log(error));
}
