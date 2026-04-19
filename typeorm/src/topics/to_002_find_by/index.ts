// Title: Stop looping to filter — TypeORM has findBy
import { AppDataSource } from "../../data-source";
import { User } from "./entity/User";

export async function runTS002(): Promise<void> {
  return AppDataSource.initialize()
    .then(async () => {
      // To find an entity by role you can use
      // manager.findBy
      const users1 = await AppDataSource.manager.findBy(User, {
        role: "developer",
      });

      // or you can use repository.findBy
      const users2 = await AppDataSource.getRepository(User).findBy({
        role: "develoepr",
      });

      // In fact, behind the scenes,
      // the SQL Query below will be run

      // SELECT "User"."id" AS "User_id",
      //        "User"."firstName" AS "User_firstName",
      //        "User"."role" AS "User_role"
      // FROM "_user" "User"
      // WHERE (("User"."role" = $1))

      console.log("users 1 is", users1);
      console.log("users 2 is", users2);
    })
    .then((error) => console.log(error));
}
