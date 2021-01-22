"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routers = require("../routers/router");
var App = /** @class */ (function () {
    function App(port) {
        this.app = express_1.default();
        this.port = port;
        this.settings();
        this.router();
    }
    App.prototype.settings = function () {
        this.app.set("port", process.env.PORT || this.port);
    };
    App.prototype.router = function () {
        this.app.use(routers);
    };
    App.prototype.start = function () {
        try {
            this.app.listen(this.app.get("port"));
            console.log("Server Starting Successfully, in port " +
                this.app.get("port"));
            console.log("http://localhost:" + this.app.get("port"));
        }
        catch (error) {
            throw error;
        }
    };
    return App;
}());
exports.default = App;
