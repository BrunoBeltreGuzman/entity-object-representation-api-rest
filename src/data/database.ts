import Users from "../entity/users.entity";
import Roles from "../entity/roles.entity";

const users: [Users] = require("../../data/users");

//console.log(users);

const roles: [Roles] = require("../../data/role");

//console.log(roles);

export { users, roles };
