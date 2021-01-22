const { Router } = require("express");
const router = Router();

const routersUsers = require("../api/users/routers.users");
const routersRoles = require("../api/roles/routers.roles");

router.use("/users", routersUsers);

router.use("/roles", routersRoles);

module.exports = router;
