import useStore from "./useStore";
import { useState } from "react";

function ToDoControls() {
  const addTodo = useStore((state) => state.addTodo);
  const [newTodo, setNewTodo] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
        />
        <button 
          className="add-button" 
          onClick={handleSubmit}
        >
           Add Task
        </button>
      </form>
    </>
  );
}

export default ToDoControls;
