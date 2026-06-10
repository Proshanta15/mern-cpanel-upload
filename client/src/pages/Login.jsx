import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuth } from "../store/auth.jsx";
import "../style/login.css";

const URL = "http://localhost:5000/api/auth/login";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("Response from server:", res_data);
      if (response.ok) {

        storeTokenInLS(res_data.token);
        toast.success("Login successful");
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-copy">
          <p className="login-eyebrow">Welcome back</p>
          <h1>Login</h1>
          <p>Enter your email and password to access your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button type="submit" className="login-button">
            Login Now
          </button>
        </form>
      </section>
    </main>
  );
}
