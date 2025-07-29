const BASE_URL = "https://economily-production.up.railway.app";

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/api/v1/auth/login-by-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include", // ⬅️ AGAR cookie orqali sessiya boshqarilsa, bu muhim
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return await response.json();
};


export const registerUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/api/v1/auth/register-by-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return await response.json();
};


export const verifyUser = async (email, code) => {
  const response = await fetch(`${BASE_URL}/api/v1/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Verification failed");
  }

  return await response.json();
};