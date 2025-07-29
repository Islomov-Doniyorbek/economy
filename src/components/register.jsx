import { useState } from "react";
import  useAuth  from "../context/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      alert("Successfully registered! Now login.");
      navigate('/verify', { state: { email } });
      localStorage.setItem("pendingEmail", email);
    } catch (err) {
      alert(err.message);

    }
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
        <Link to={"/login"}>Already have a account?</Link>
      </form>
    </div>
  );
};

export default Register;
