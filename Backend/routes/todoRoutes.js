import * as todoController from "../controller/todoController.js";

router.get("/getUser/:id", todoController.getUser);
router.post("/login", todoController.authTodo);
router.post("/register", todoController.createTodo);
router.get("/todos/:id", todoController.getTodos);
router.post("/todos/:id", todoController.addTodo);
router.delete("/todo/:id", todoController.deleteTodo);

export default router;
