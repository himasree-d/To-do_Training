import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";

const API = "https://to-do-training.onrender.com/api/todo";

export default function Home() {
  const { user, setUser } = useContext(AppContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.id) {
      navigate("/");
    }
  }, []);

  const addTodo = async () => {
    if (text.trim() === "") return;
    try {
      const res = await axios.post(`${API}/register`, {
        name: user.name,
        email: user.email + "_todo_" + Date.now(),
        password: "placeholder",
        text: text,
      });
      if (res.data.success) {
        setMessage("Task added!");
        setText("");
      }
    } catch (error) {
      setMessage("Failed to add task.");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.post(`${API}/todo/${id}`);
      setMessage("Task deleted!");
    } catch (error) {
      setMessage("Failed to delete.");
    }
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
      {message && <p>{message}</p>}
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
    </div>
  );
}
