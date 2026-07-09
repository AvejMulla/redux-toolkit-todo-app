import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") return;

    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;