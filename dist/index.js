"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
const port = 3000;
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/users", user_1.userRouter);
data_source_1.AppDataSource.initialize().then(() => {
    console.log("Database connected");
});
app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});
