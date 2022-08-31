import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';

const todoRoutes = require('./routes/todos')

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
})

app.listen(3000)