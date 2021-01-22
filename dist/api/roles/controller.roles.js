"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelRoles = require("./model.roles");
var ControllerRoles = /** @class */ (function () {
    function ControllerRoles() {
    }
    ControllerRoles.prototype.findAll = function (request, response) {
        response.send(modelRoles.findAll());
    };
    ControllerRoles.prototype.findById = function (request, response) {
        var id = parseInt(request.params.id);
        response.send(modelRoles.findById(id));
    };
    return ControllerRoles;
}());
exports.default = ControllerRoles;
