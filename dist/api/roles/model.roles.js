"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../data/database");
var ModelRoles = /** @class */ (function () {
    function ModelRoles() {
    }
    ModelRoles.prototype.findAll = function () {
        return database_1.roles;
    };
    ModelRoles.prototype.findById = function (id) {
        try {
            for (var i = 0; i < database_1.roles.length; i++) {
                var user = database_1.roles[i];
                if (user.id === id) {
                    return [user];
                }
            }
            return [];
        }
        catch (error) {
            throw new Error(error);
        }
    };
    return ModelRoles;
}());
module.exports = new ModelRoles();
