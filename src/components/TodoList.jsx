import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, filter } = useSelector((state) => state.todo);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;