import IDAO from "../IDAO";
import { users } from "../../data/database";
import Users from "../../entity/users.entity";

class ModelUsers implements IDAO<Users, number> {
       constructor() {}

       findAll(): Users[] {
              return users;
       }

       findById(id: number): Users[] {
              try {
                     for (let i: number = 0; i < users.length; i++) {
                            const user = users[i];
                            if (user.id === id) {
                                   return [user];
                            }
                     }
                     return [];
              } catch (error) {
                     throw new Error(error);
              }
       }
}

module.exports = new ModelUsers();
