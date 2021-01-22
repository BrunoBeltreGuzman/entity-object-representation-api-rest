"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("express").Router;
var router = Router();
var controller_roles_1 = __importDefault(require("./controller.roles"));
var controllerRoles = new controller_roles_1.default();
router.get("/", controllerRoles.findAll);
router.get("/:id", controllerRoles.findById);
module.exports = router;
