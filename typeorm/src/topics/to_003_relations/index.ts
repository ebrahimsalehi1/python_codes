import { AppDataSource } from "../../data-source";
import { User } from "./entity/User";
import { Project } from "./entity/Project";

export function runTS003(): Promise<void> {
  return AppDataSource.initialize()
    .then(async () => {
      const user = new User();
      user.username = "ebrahim";
      user.email = "eeeee.bbbbb.iiiii@gmail.com";
      const userResult = await AppDataSource.getRepository(User).save(user);

      const project = new Project();
      project.title = "project 1";
      project.description = "a project to learn typeorm";
      project.status = "doing";
      project.user = user;

      const projectResult = await AppDataSource.getRepository(Project).save(
        project
      );
    })
    .catch((error) => console.log(error));
}
