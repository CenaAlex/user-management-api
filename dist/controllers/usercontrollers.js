"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUsers = exports.createUser = exports.deleteUser = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../entities/User");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const deleteUser = (req, res) => {
    userRepository.delete(req.params.id);
    res.json({ message: "User deleted" });
};
exports.deleteUser = deleteUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield userRepository.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    yield userRepository.save(newUser);
    res.json({ message: "User Created", user: JSON.stringify(req.body) });
});
exports.createUser = createUser;
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userRepository.find();
    res.json(users);
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});
exports.getUserById = getUserById;
