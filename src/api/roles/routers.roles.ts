const { Router } = require("express");
const router = Router();

import ControllerRoles from "./controller.roles";
const controllerRoles = new ControllerRoles();

router.get("/", controllerRoles.findAll);

router.get("/:id", controllerRoles.findById);

module.exports = router;
