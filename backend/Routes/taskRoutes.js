import express from "express"
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.post('/add',createTask)
taskRouter.get('/getAllTask',protect,getTasks);
taskRouter.get('/:id',getTaskById);
taskRouter.put('/updateTask/:id' ,updateTask);
taskRouter.delete('/deleteTask/:id',  deleteTask);

export default taskRouter
