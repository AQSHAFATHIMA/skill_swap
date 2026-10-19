import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("loggedIn", "true");

    alert("Login successful!");

    navigate("/dashboard");
  };

  return (

    <div className="auth-container">

      <form className="auth-box" onSubmit={handleLogin}>

        <h2>Welcome Back</h2>

        <p>Login to continue your Skill Swap journey.</p>

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-btn full">
          Login
        </button>

        <p className="auth-link">
          Don't have an account?
          <a href="/register"> Register</a>
        </p>

      </form>

    </div>
  );
}

export default Login;