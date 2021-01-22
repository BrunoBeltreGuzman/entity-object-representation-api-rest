import Roles from "./roles.entity";

export default interface Users {
       id: number;
       name: string;
       email: string;
       password: string;
       role: Roles;
}
