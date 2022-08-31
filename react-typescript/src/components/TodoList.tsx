import React from 'react';
import {Todo} from '../todo.model'

export interface TodoListProps {
  items: Todo[];
  deleteTodoHandler: (id: string) => void;
}

 const TodoList: React.FC<TodoListProps> = ({items,deleteTodoHandler}) => {
  return (
    <ul>
      {items ? items.map(({id, text}) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={() =>deleteTodoHandler(id)}>Delete</button>
        </li>
      )) : null}
    </ul>
  )
}

export default TodoList