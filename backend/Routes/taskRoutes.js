import express from "express"
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";
const taskRouter = express.Router();

router.post('/add', protect,createTask)
router.get('/',protect, getTasks);
router.get('/:id', protect, getTaskById);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

export default taskRouter
