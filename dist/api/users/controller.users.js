"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelUsers = require("./model.users");
var ControllerUsers = /** @class */ (function () {
    function ControllerUsers() {
    }
    ControllerUsers.prototype.findAll = function (request, response) {
        response.send(modelUsers.findAll());
    };
    ControllerUsers.prototype.findById = function (request, response) {
        var id = parseInt(request.params.id);
        response.send(modelUsers.findById(id));
    };
    return ControllerUsers;
}());
exports.default = ControllerUsers;
