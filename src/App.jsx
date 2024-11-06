import "./App.css";
import ToDoList from "./ToDoList";
import ToDoControls from "./ToDoControls";

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <header className="todo-header">
          <h1>Todo List</h1>
        </header>
        <ToDoControls />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
