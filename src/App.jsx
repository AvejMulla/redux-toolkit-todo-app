import AddTodo from "./components/AddTodo";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h1>Redux Toolkit Todo App</h1>

      <AddTodo />

      <TodoFilter />

      <TodoList />
    </div>
  );
}

export default App;