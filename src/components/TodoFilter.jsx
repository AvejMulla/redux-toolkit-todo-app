import { useDispatch } from "react-redux";
import { setFilter } from "../features/todo/todoSlice";

function TodoFilter() {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => dispatch(setFilter("all"))}>
        All
      </button>

      <button onClick={() => dispatch(setFilter("completed"))}>
        Completed
      </button>

      <button onClick={() => dispatch(setFilter("pending"))}>
        Pending
      </button>
    </div>
  );
}

export default TodoFilter;