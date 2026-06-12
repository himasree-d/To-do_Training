import * as todoService from "../services/todoServices.js"

const getTodo = async (req, res) => {
    try {
        const { todoId } =  req.params
        const user = await todoService.getTodo(todoId)
        res.status(200).json({
            success: true,
            user: user
        })
    }
    catch (err) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const authTodo = async (req, res) => {
    try {
        const text = await todoService.authTodo(req.body);
        res.status(200).json({
            success: true,
            text: text,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { todoId } = await req.params
        const text = await todoService.deleteTodo(todoId)
        res.status(200).json({
            success: true,
            text: text
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const createTodo = async (req, res) => {
    try {
        console.log(req.body)
        const text = await todoService.createTodo(req.body);
        res.status(201).json({
            success: true,
            text: text,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export { authTodo, createTodo, deleteTodo, getTodo }
