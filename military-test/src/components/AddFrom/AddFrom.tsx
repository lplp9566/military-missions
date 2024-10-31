import React, { useState } from "react";
import TodoInterface from "../../types";
import "./AddFrom.css"

interface AddFromProps {
  addTodoList: (todo: TodoInterface) => Promise<void>;
}

const AddFrom: React.FC<AddFromProps> = ({ addTodoList }) => {
  const [newTodo, setNewTodo] = useState<TodoInterface>();
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    let newObj: TodoInterface = {
      name: e.target.elements.name.value,
      status: e.target.elements.Status.value,
      priority: e.target.elements.priority.value,
      description: e.target.elements.name.value,
    };
    setNewTodo(newObj);
    addTodoList(newTodo!);
  };
  return (
    <form className="from" onSubmit={handleSubmit}>
        <p>enter your mission</p>
      <input name="name" type="text" placeholder="enter your name" />

      <select name="Status" id="Status">
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <select name="priority" id="priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="text"
        name="description"
        id=""
        placeholder="enter the description"
      />

      <input type="submit" />
    </form>
  );
};

export default AddFrom;
