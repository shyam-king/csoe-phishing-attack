"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 80; // default port to listen
// define a route handler for the default home page
app.use("/", express_1.default.static("public"));
app.use(express_1.default.json());
app.post("/login", (req, res) => {
    console.log(req.body);
    res.send("hi");
});
// start the Express server
app.listen(port, "192.168.1.21", () => {
    console.log(`server started`);
});
//# sourceMappingURL=index.js.map