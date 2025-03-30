import { Router } from "express"
import {createUser} from "../controllers/usercontrollers";
import  {deleteUser}  from "../controllers/user.controllers"

export const userRouter = Router()

// CREATE USER
userRouter.post('/', createUser);

//DELETE ONE USER
userRouter.delete('/:id', deleteUser)