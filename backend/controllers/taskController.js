import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';

// descritpion : Create a new task
// route :  POST /api/tasks/create
// access : Private
const createTask = asyncHandler(async (req, res) => {
const { title,description,status,duedate,userID } = req.body;

 const task = await Task.create({
    title,
    description,
    status,
    duedate,
    userID,
  });

  if (task) {
    res.status(201).json({
      _id: task._id,
      title: task.title,
      description: task.description,
      status:task.status,
      duedate:task.duedate,
      userID:task.userID,
    });
  } else {
    res.status(400);
    throw new Error('Invalid task data');
  }
});


// description : Get task
// route  : GET /api/tasks
// access : Private
const getTask = asyncHandler(async (req, res) => {
  const { userID } = req.body;
  
  const task = await Task.find({userID});
  if (task) {
    res.status(201).send(task);
  } else {
    res.status(404);
    throw new Error('Tasks are not found');
  }
});

// description :    Update task 
// route  :  PUT /api/tasks/update
// access : Private
const updateTask = asyncHandler(async (req, res) => {
  const { _id } = req.body;    
  const task = await Task.findById(_id);

  if (task) {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.duedate = req.body.duedate || task.duedate;

    const updatedTask = await task.save();

    res.json({
      _id: updatedTask._id,
      title: updatedTask.title,
      description: updatedTask.description,
      status: updatedTask.status,
      duedate: updatedTask.duedate,
      userID: updatedTask.userID,
    });
  } else {
    res.status(404);
    throw new Error('Task is not found');
  }
});
// description : Delete task 
// route  :  PUT /api/tasks/delete
// access : Private
const deleteTask = asyncHandler(async (req, res) => {
    const { _id } = req.body; 
    const task = await Task.findById(_id);
  
    if (task) {
      const deletedTask = await task.deleteOne({ _id });;
      res.json({ message:"Task is successfully deleted!"});
    } else {
      res.status(404);
      throw new Error('Task is not found');
    }
  });
export {
    createTask,
    updateTask,
    getTask,
    deleteTask,
};
