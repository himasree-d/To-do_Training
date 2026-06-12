import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://to-do-training.onrender.com/api/todo";

export default function Register() {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API}/register`, form);
      if (res.data.success) {
        navigate("/");
      }
    } catch (error) {
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </p>
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
      <button className="btn" onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/")}>Login</span>
      </p>
    </div>
  );
}
