
import mongoose from 'mongoose';
import User from './userModle.js';

// Define the Task Schema
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from the beginning and end
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: false, // Optional
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending', // Default task status
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', // Reference to the User who created the task
      
      required: true,
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

export default Task;
