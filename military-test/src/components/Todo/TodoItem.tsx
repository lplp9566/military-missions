import React from 'react'
import TodoInterface from '../../types'

interface TodoParms{
    todo:TodoInterface;
}

const TodoItem:React.FC<TodoParms> = ({todo}) => {
  {console.log(todo.id)}
  return (
    <div>
      <div>
        <h3>Name:{todo.name}</h3>
        <h4>Status:{todo.status}</h4>
        <h4>Priority:{`{${todo.priority}}`}</h4>
        <h4>Description{todo.description}</h4>
        
      </div>
      <div>
        <button className='deleteBtn'>Delete</button>
        <button className='ProgressBtn'>Progress</button>
      </div>
    </div>
  )
}

export default TodoItem