import User from "../models/userModel.js";
import Todo from "../models/todoModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const SECRET = process.env.SECRET;

const getUser = async (userId) => {
    return await User.findById(userId);
};

const authTodo = async (todoData) => {
    const found = await User.findOne({ email: todoData.email });
    if (!found) throw new Error("User not found");
    
    const chkPassword = await bcrypt.compare(todoData.password, found.password);
    if (!chkPassword) throw new Error("Invalid password");
    
    const user = {
        id: found._id,
        name: found.name,
        email: found.email,
    };
    const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
    return { ...user, token };
};

const createUser = async (todoData) => {
    const hashedPassword = await bcrypt.hash(todoData.password, 10);
    todoData.password = hashedPassword;
    return await User.create(todoData);
};

const getTodos = async (userId) => {
    return await Todo.find({ userId });
};

const addTodo = async (userId, text) => {
    return await Todo.create({ userId, text });
};

const deleteTodo = async (todoId) => {
    return await Todo.findByIdAndDelete(todoId);
};

export { getUser, authTodo, createUser, getTodos, addTodo, deleteTodo };
