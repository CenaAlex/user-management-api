"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const usercontrollers_1 = require("../controllers/usercontrollers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
// CREATE USER
userRouter.post('/', usercontrollers_1.createUser);
//DELETE ONE USER
userRouter.delete('/:id', usercontrollers_1.deleteUser);
// GET ALL USERS
userRouter.get("/", usercontrollers_1.getAllUsers);
// GET ONE USER BY ID
userRouter.get('/:id', usercontrollers_1.getUserById);
