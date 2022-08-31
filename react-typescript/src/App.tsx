import React, { useState } from 'react';

import TodoList from './components/TodoList';
import {Todo} from './todo.model'
import NewTodo from './components/NewTodo';

const App: React.FC = () =>{
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const updatedTodoList = [...todos].map(todo => {
      return {...todo};
    });

    updatedTodoList.push({id: Math.random().toString(), text});
    setTodos(updatedTodoList);
  }

  const deleteTodoHandler = (id: string):void =>{
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <div className="App">
      <NewTodo  todoAddHandler={todoAddHandler}/>
     <TodoList items={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  );
}

export default App;
