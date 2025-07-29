import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../context/useApi';

const Verify = () => {
//   const location = useLocation();
  const navigate = useNavigate();
//   const defaultEmail = location.state?.email || ''; // register'dan o‘tgan email
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  
  const storedEmail = localStorage.getItem("pendingEmail") || '';
const [email, setEmail] = useState(storedEmail);
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await verifyUser(email, code);
      setMessage('Tasdiq muvaffaqiyatli!');
      navigate('/login'); // ✅ tasdiqdan so'ng login sahifaga
    } catch (err) {
        console.log(err);
        
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tasdiqlash kodi"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button type="submit">Tasdiqlash</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Verify;
