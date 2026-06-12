import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5010/todo");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (text.trim() === "") return;
    await axios.post("http://localhost:5010/todo", { text });
    setText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5010/todo/${id}`);
    fetchTodos();
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <div className="input-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add your task"
          className="todo-input"
        />
        <button onClick={addTodo} className="btn">Add</button>
      </div>
      <ol>
        {todos && todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)} className="btn delete-btn">Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}