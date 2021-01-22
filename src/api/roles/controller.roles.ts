import { Request, Response } from "express";
import IDAO from "../IDAO";
import Roles from "../../entity/roles.entity";

const modelRoles: IDAO<Roles, number> = require("./model.roles");

export default class ControllerRoles {
       findAll(request: Request, response: Response): void {
              response.send(modelRoles.findAll());
       }

       findById(request: Request, response: Response): void {
              const id: number = parseInt(request.params.id);
              response.send(modelRoles.findById(id));
       }
}
