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
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    });

    await userRepository.save(newUser);
    res.json ({message: "User Created", user : JSON.stringify(req.body)});
}
