import express from "express"
import * as todoController from "../controller/todoController.js"
const router = express.Router();

router.get("/getUser/:todoId",todoController.getTodo)
router.post("/login", todoController.authTodo);
router.post("/register", todoController.createTodo);
router.post("/todo/:id", todoController.deleteTodo);

export default router