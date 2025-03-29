import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";

const userRepository = AppDataSource.getRepository(User);
export const deleteUser = (req: Request, res: Response) => { 
    
    userRepository.delete(req.params.id)
    res.json({ message: "User deleted" });
}

// GET ALL USERS
export const getAllUsers = async (req: Request, res: Response) => {
    const users = await userRepository.find();
    res.json({ message: "User List", users });
};

// GET USER BY ID
export const getUserById = async (req: Request, res: Response) => {
    const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
    res.json({ message: "User Found", user });
};