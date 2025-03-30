import { Router } from "express"
import {createUser} from "../controllers/usercontrollers";
import  {deleteUser}  from "../controllers/usercontrollers.js"
import { getAllUsers, getUserById } from "../controllers/usercontrollers.js";

export const userRouter = Router()

// CREATE USER
userRouter.post('/', createUser);
//DELETE ONE USER
userRouter.delete('/:id', deleteUser)
// GET ALL USERS
userRouter.get("/", getAllUsers);
// GET ONE USER BY ID
userRouter.get("/:id", getUserById);