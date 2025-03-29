import { Router } from "express"
import  {deleteUser}  from "../controllers/usercontrollers.js"
import { getAllUsers, getUserById } from "../controllers/usercontrollers.js";

export const userRouter = Router()


// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
userRouter.get("/:id", getUserById);