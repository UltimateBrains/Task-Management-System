import express from 'express';
import {
   createTask,
   updateTask,
   getTask,
   deleteTask,
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/',protect, getTask);
router.post('/create',protect,createTask);
router.put('/update',protect,updateTask);
router.delete('/delete',protect, deleteTask);

export default router;
