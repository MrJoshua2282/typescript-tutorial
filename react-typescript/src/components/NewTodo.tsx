import React, {useRef} from 'react'

interface NewTodoProps {
  todoAddHandler: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({todoAddHandler}) => {
const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (e: React.FormEvent) => {
  e.preventDefault();

  todoAddHandler(textInputRef.current!.value)
}
return (
  <form onSubmit={(e) => todoSubmitHandler(e)}>
    <div>
    <label htmlFor="todo-text">Todo Text</label>
    <input type="text" id='todo-text' ref={textInputRef}/>
    </div>
    <button type='submit'>Add Todo</button>
  </form>
)
}

export default NewTodo;