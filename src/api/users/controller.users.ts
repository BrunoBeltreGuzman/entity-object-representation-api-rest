import { Request, Response } from "express";
import IDAO from "../IDAO";
import Users from "../../entity/users.entity";

const modelUsers: IDAO<Users, number> = require("./model.users");

export default class ControllerUsers {
       findAll(request: Request, response: Response): void {
              response.send(modelUsers.findAll());
       }

       findById(request: Request, response: Response): void {
              const id: number = parseInt(request.params.id);
              response.send(modelUsers.findById(id));
       }
}
