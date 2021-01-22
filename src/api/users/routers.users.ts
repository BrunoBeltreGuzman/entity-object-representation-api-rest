const { Router } = require("express");
const router = Router();

import ControllerUsers from "./controller.users";
const controllerUsers = new ControllerUsers();

router.get("/", controllerUsers.findAll);

router.get("/:id", controllerUsers.findById);

module.exports = router;
