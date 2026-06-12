import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

async function startServer(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        app.listen(5010, ()=> console.log("Server started"))
    }
)}

startServer();

const todoSchema = new mongoose.Schema({
  text:String  
})

const todoModel = mongoose.model("Todo",todoSchema);

app.get("/todo", async (req,res)=>{
    const task = await todoModel.find();
    res.json(task);
})

app.post("/todo",async (req,res)=>{
    await todoModel.create(req.body);
    res.json({message: "Task added"});
})

app.delete("/todo/:id", async(req,res)=>{
    const { id } = req.params;
    await todoModel.findByIdAndDelete(id);
    res.json({message: "Task cleared"});
})