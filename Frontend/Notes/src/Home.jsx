import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";

const API = "https://to-do-training.onrender.com/api/todo";

export default function Home() {
  const { user, setUser } = useContext(AppContext);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.id) {
      navigate("/");
      return;
    }
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get(`${API}/todos/${user.id}`);
    setTodos(res.data.todos);
  };

  const addTodo = async () => {
    if (text.trim() === "") return;
    await axios.post(`${API}/todos/${user.id}`, { text });
    setText("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/todo/${id}`);
    fetchTodos();
  };

  const handleLogout = () => {
    setUser({});
    navigate("/");
  };

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Hello, {user.name}</h2>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="input-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add your task"
          className="todo-input"
        />
        <button className="btn" onClick={addTodo}>Add</button>
      </div>
      <ol>
        {todos && todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button className="btn delete-btn" onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
