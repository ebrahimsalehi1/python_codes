import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {

    const user = new User();

    user.firstName = "Ebrahim";
    user.role = "developer";

    await AppDataSource.manager.save(user);

    const users = 
    await AppDataSource.manager.find(User);

    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
