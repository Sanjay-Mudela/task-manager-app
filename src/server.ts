import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db';
import taskRoutes from './routes/task.router';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', taskRoutes);


app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`⏰ API is live. DB time: ${result.rows[0].now}`);
  } catch (err: any) {
    console.error('❌ DB Connection Error:', err.message);
    res.status(500).send('❌ DB not connected');
  }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
