import useStore from "./useStore";

export default function ToDoList() {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="todo-checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="delete-btn"
            aria-label="Delete todo"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
