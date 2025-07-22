import { Router } from 'express';
import { handleCreateTask, handleGetAllTasks, handleUpdateTask, handleDeleteTask, handleGetTaskById } from '../controllers/task.controller';

const router = Router();

router.post('/tasks', handleCreateTask);

router.get('/tasks', handleGetAllTasks);

router.put('/tasks/:id', handleUpdateTask);

router.delete('/tasks/:id', handleDeleteTask);

router.get('/tasks/:id', handleGetTaskById);

export default router;
