import React, { useEffect, useState } from 'react'

import axios, { Axios } from 'axios'
import TodoInterface from '../../types'
import TodoItem from '../Todo/TodoItem'
import AddFrom from '../AddFrom/AddFrom'


const BASE_URL:string = "https://reactexambackend.onrender.com/missions/:8587375"
const AllList:React.FC = () => {
 
    const [AllTodoList,setAllTodoList  ] = useState<TodoInterface[]>([])

    const getTodoList = async ()=>{
        const response = await axios.get<TodoInterface[]>(BASE_URL)
        setAllTodoList(response.data)
        console.log(AllTodoList)}
        useEffect(()=>{ getTodoList()},[])


    const addTodoList = async (todo:TodoInterface):Promise<void>=>{
    
        const response = await axios.post<TodoInterface>(BASE_URL,
            todo
        )
        getTodoList()

    }   
    const deleteTodo = async (_id: string): Promise<void> => {
        try {
            console.log(_id)
         const response= await axios.delete(`${BASE_URL}/${_id}`);
          getTodoList();
        } catch (error) {
          console.error("cant delete todo", error);
        }
      };  
       const updateMission = async (_id:string): Promise<void> =>{
        const response = await axios.post(`${BASE_URL}/progress/${_id}`)
        getTodoList()
       }
  return (
    <div> 
        <div > <AddFrom  addTodoList={addTodoList}/></div>
        {AllTodoList.map((todo)=>{
        return <TodoItem deleteTodo= {deleteTodo} updateMission= {updateMission} AllTodoList={AllTodoList} todo={todo}/>
      })}

    </div>
  )
}


export default AllList;