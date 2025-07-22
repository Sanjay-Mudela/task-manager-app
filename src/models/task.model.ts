import pool from '../config/db';

export const createTask = async (
  title: string,
  description: string
) => {
  const query = `
    INSERT INTO tasks (title, description)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const values = [title, description];
  const result = await pool.query(query, values);
  return result.rows[0]; // Return the inserted task
};


export const getAllTasks = async () => {
  const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
  const result = await pool.query(query);
  return result.rows;
};



export const updateTask = async (
  id: number,
  title: string,
  description: string,
  completed: boolean
) => {
  const query = `
    UPDATE tasks
    SET title = $1,
        description = $2,
        is_completed = $3
    WHERE id = $4
    RETURNING *;
  `;
  const values = [title, description, completed, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};


export const deleteTask = async (id: number) => {
  const query = `
    DELETE FROM tasks
    WHERE id = $1
    RETURNING *;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0]; 
};



export const getTaskById = async (id: number) => {
  const query = `
    SELECT * FROM tasks
    WHERE id = $1;
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0]; 
};
