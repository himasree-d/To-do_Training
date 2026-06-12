import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";

const API = "https://to-do-training.onrender.com/api/todo";

export default function Login() {
  const { setUser } = useContext(AppContext);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/login`, form);
      if (res.data.success) {
        setUser(res.data.text);
        navigate("/home");
      }
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </p>
      <button className="btn" onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
}
