import { createContext, useState } from "react";
import { loginUser, registerUser } from "./useApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const register = async (email, password) => {
    return await registerUser(email, password);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthContext;