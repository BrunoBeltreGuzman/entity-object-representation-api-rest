import IDAO from "../IDAO";
import { roles } from "../../data/database";
import Roles from "../../entity/roles.entity";

class ModelRoles implements IDAO<Roles, number> {
       constructor() {}

       findAll(): Roles[] {
              return roles;
       }

       findById(id: number): Roles[] {
              try {
                     for (let i = 0; i < roles.length; i++) {
                            const user = roles[i];
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

module.exports = new ModelRoles();
