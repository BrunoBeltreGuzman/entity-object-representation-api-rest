"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("express").Router;
var router = Router();
var controller_users_1 = __importDefault(require("./controller.users"));
var controllerUsers = new controller_users_1.default();
router.get("/", controllerUsers.findAll);
router.get("/:id", controllerUsers.findById);
module.exports = router;
