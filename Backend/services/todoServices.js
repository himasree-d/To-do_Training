import Todo from "../models/todoModel.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
dotenv.config()
const SECRET = process.env.SECRET
const getTodo = async (todoId) => {
    return await Todo.find({ _id: todoId })
}

const deleteTodo = async (todoId) => {
    return await Todo.findByIdAndDelete(todoId)
}

const authTodo = async (todoData) => {
    const found = await Todo.find({ email: TodoData.email })
    if (found) {
        const chkPassword = await bcrypt.compare(TodoData.password, found.password)
        if (chkPassword) {
            const todo= {
                id: found._id,
                name: found.name,
                email: found.email,
                text: found.text
            }
            const token = await jwt.sign(Todo, SECRET, { expiresIn: "1hr" })
            return { ...todo, token }
        }

    }
};
const createTodo = async (TodoData) => {
    console.log(TodoData)
    const hashedPassword = await bcrypt.hash(TodoData.password, 10)
    TodoData.password = hashedPassword
    return await Todo.create(TodoData);
};
export { getTodo, createTodo, authTodo, deleteTodo };