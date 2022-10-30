import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const newTask = {
    id: Math.floor(Math.random() * 1000),
    value: input,
    completed: false,
  };

  const handeClick = (event) => {
    setTask([...task, newTask]);
    event.preventDefault();
    setInput("");
  };

  const handleDelete = (id) => {
    setTask(task.filter((elt) => elt.id !== id));
    console.log(id);
  };

  const handleComplete = (id) => {
    setTask(task.map((elt) => {
      if (elt.id === id) {
        return {...elt , completed: !elt.completed }
     }}))
    }

 

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        value={input}
        onChange={handleChange}
        placeholder="Add task here..."
      />
      <button className="add-btn" onClick={handeClick}>
        Add
      </button>
      <br />
      <ul>
        {console.log(task)}
        {task.map((elt) => (
          <li key={elt.id}>
            {elt.value}
            <button className="completed" onClick={() => handleComplete(elt.id)}>
              Completed
            </button>
            <button className="delete" onClick={() => handleDelete(elt.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
