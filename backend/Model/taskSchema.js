
import mongoose from 'mongoose';
import User from './userModle.js';


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
    status: {
      type: String,
      enum: ['pending' ,'completed'],
      default: 'pending',
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      
      required: false,
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
