import { Router } from "express"
import {createUser} from "../controllers/usercontrollers";

export const userRouter = Router()

// CREATE USER
userRouter.post('/', createUser);