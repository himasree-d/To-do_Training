import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/todo", todoRoutes);

export default app