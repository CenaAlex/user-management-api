import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Request, Response } from "express";

const userRepository = AppDataSource.getRepository(User);

export const deleteUser = (req: Request, res: Response) => { 
    userRepository.delete(req.params.id)
    res.json({ message: "User deleted" });
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = await userRepository.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    await userRepository.save(newUser);
    res.json({message: "User Created", user: JSON.stringify(req.body)});
}

export const getAllUsers = async (_req: Request, res: Response) => {
    const users = await userRepository.find();
    res.json(users);
}

export const getUserById = async (req: Request, res: Response) => {
    const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
    
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    res.json(user);
}