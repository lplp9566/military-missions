import React from 'react'
import TodoInterface from '../../types'

interface TodoParms{
    todo:TodoInterface;
    deleteTodo:(todoId:string )=>Promise<void>
    updateMission:(todoId:string)=>Promise<void>
}

const TodoItem:React.FC<TodoParms> = ({todo,deleteTodo,updateMission}) => {

  return (
    <div>
      <div>
        <h3>Name:{todo.name}</h3>
        <h4>Status:{todo.status}</h4>
        <h4>Priority:{`{${todo.priority}}`}</h4>
        <h4>Description{todo.description}</h4>

        
      </div>
      <div>
        <button className='deleteBtn' onClick={()=>deleteTodo(todo._id!)}>Delete</button>
        <button className='ProgressBtn' onClick={()=>updateMission(todo._id!)}>Progress</button>
      </div>
    </div>
  )
}

export default TodoItem