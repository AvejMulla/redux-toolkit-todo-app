import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "../features/todo/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newTitle = prompt("Edit Todo", todo.title);

    if (newTitle && newTitle.trim() !== "") {
      dispatch(
        updateTodo({
          id: todo.id,
          title: newTitle,
        })
      );
    }
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "Pending" : "Complete"}
      </button>

      <button onClick={handleEdit}>Edit</button>

      <button onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;