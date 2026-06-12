import * as todoService from "../services/todoServices.js";

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await todoService.getUser(id);
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const authTodo = async (req, res) => {
    try {
        const data = await todoService.authTodo(req.body);
        res.status(200).json({ success: true, text: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createTodo = async (req, res) => {
    try {
        const data = await todoService.createUser(req.body);
        res.status(201).json({ success: true, text: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const todos = await todoService.getTodos(id);
        res.status(200).json({ success: true, todos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const addTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const todo = await todoService.addTodo(id, text);
        res.status(201).json({ success: true, todo });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todoService.deleteTodo(id);
        res.status(200).json({ success: true, message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export { getUser, authTodo, createTodo, getTodos, addTodo, deleteTodo };
