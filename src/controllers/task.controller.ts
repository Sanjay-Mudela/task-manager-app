import { Request, Response } from 'express';
import { createTask, getAllTasks, updateTask, deleteTask, getTaskById  } from '../models/task.model';



export const handleCreateTask = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const task = await createTask(title, description || '');
    res.status(201).json({ message: 'Task created', task });
  } catch (err: any) {
    console.error('❌ Error creating task:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const handleGetAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json({ tasks });
  } catch (err: any) {
    console.error('❌ Error fetching tasks:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const handleUpdateTask = async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.id);
    const { title, description, is_completed } = req.body;

    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const updated = await updateTask(taskId, title, description, is_completed);

    if (!updated) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: '✅ Task updated', task: updated });
  } catch (err: any) {
    console.error('❌ Error updating task:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};




export const handleDeleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.id);

    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const deleted = await deleteTask(taskId);

    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: '🗑️ Task deleted successfully', task: deleted });
  } catch (err: any) {
    console.error('❌ Error deleting task:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const handleGetTaskById = async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.id);

    if (isNaN(taskId)) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }

    const task = await getTaskById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ task });
  } catch (err: any) {
    console.error('❌ Error fetching task:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
