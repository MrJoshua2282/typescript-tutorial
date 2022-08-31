import { RequestHandler } from 'express'
import { Todo } from '../models/todos';

const TODOS: Todo[] = [];


export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  // const text = req.body.text;

  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createTodo: newTodo })
}

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS })
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params
  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    throw new Error('Todo could not be found')
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.json({ message: 'Updated todo!', updatedTodo: TODOS[todoIndex] });
}

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;

  const todoIndex = TODOS.findIndex(todo => todo.id === id);

  if (todoIndex < 0) {
    throw new Error('Todo could not be found')
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: 'Deleted todo!' })
}