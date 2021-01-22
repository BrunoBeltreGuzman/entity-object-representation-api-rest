import express, { Application } from "express";
const routers = require("../routers/router");

export default class App {
       private port: number;
       private readonly app: Application;

       constructor(port: number) {
              this.app = express();
              this.port = port;
              this.settings();
              this.router();
       }

       private settings() {
              this.app.set("port", process.env.PORT || this.port);
       }

       private router() {
              this.app.use(routers);
       }

       start() {
              try {
                     this.app.listen(this.app.get("port"));
                     console.log(
                            "Server Starting Successfully, in port " +
                                   this.app.get("port")
                     );
                     console.log("http://localhost:" + this.app.get("port"));
              } catch (error) {
                     throw error;
              }
       }
}
