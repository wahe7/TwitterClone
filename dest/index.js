"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const alluser_1 = __importDefault(require("./routes/alluser"));
const deluser_1 = __importDefault(require("./routes/deluser"));
const getuser_1 = __importDefault(require("./routes/getuser"));
const getuserId_1 = __importDefault(require("./routes/getuserId"));
const app = (0, express_1.default)();
const PORT = 2000;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("<h1>Twitter clone</h1>");
});
app.use("/user", user_1.default);
app.use("/user", alluser_1.default);
app.use("/del", deluser_1.default);
app.use("/user", getuser_1.default);
app.use("/user", getuserId_1.default);
app.listen(PORT, () => {
    console.log("connected");
});
