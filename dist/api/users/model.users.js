"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../data/database");
var ModelUsers = /** @class */ (function () {
    function ModelUsers() {
    }
    ModelUsers.prototype.findAll = function () {
        return database_1.users;
    };
    ModelUsers.prototype.findById = function (id) {
        try {
            for (var i = 0; i < database_1.users.length; i++) {
                var user = database_1.users[i];
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
    return ModelUsers;
}());
module.exports = new ModelUsers();
