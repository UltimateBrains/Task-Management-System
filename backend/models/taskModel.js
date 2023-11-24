import mongoose from 'mongoose';
import User from '../models/userModel.js';

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ['To-do', 'In progress', 'Completed'],
      default: 'To-do'
    },
    duedate: {
        type: Date
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
