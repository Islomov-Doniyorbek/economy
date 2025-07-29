import { useState } from "react";
import  useAuth  from "../context/useAuth";
import { Link, useNavigate } from "react-router-dom";
import '../auth.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err)
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
        <Link to={"/register"}>Don't have a account?</Link>
      </form>
    </div>
  );
};

export default Login;
