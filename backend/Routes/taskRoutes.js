import express from "express"
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post('/add',createTask)
taskRouter.get('/', getTasks);
taskRouter.get('/:id',getTaskById);
taskRouter.put('/:id', updateTask);
taskRouter.delete('/:id',  deleteTask);

export default taskRouter
