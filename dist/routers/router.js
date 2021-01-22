"use strict";
var Router = require("express").Router;
var router = Router();
var routersUsers = require("../api/users/routers.users");
var routersRoles = require("../api/roles/routers.roles");
router.use("/users", routersUsers);
router.use("/roles", routersRoles);
module.exports = router;
