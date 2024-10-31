import React from 'react'
import TodoInterface from '../../types'

interface TodoParms{
    todo:TodoInterface;
    AllTodoList:TodoInterface[]
    deleteTodo:(todoId:string )=>Promise<void>
    updateMission:(todoId:string)=>Promise<void>

}

const TodoItem:React.FC<TodoParms> = ({todo,deleteTodo,updateMission,AllTodoList}) => {
  const handelUpdete = (todoFind:string): void => {
     let findTodo = AllTodoList.find((todo)=>todoFind === todo._id)
    if(findTodo?.status == "Completed"){
     
    }
    updateMission(todo._id!)

  }

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
        <button className='ProgressBtn'id="ProgressBtn" onClick={()=>handelUpdete(todo._id!)}>Progress</button>
      </div>
    </div>
  )
}

export default TodoItem