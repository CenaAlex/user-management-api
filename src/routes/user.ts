import { Router } from "express"
import { createUser, deleteUser, getAllUsers, getUserById } from "../controllers/usercontrollers";

const userRouter = Router();

// CREATE USER
userRouter.post('/', createUser);

//DELETE ONE USER
userRouter.delete('/:id', deleteUser);

// GET ALL USERS
userRouter.get("/", getAllUsers);

// GET ONE USER BY ID
userRouter.get('/:id', getUserById as any);

export { userRouter };