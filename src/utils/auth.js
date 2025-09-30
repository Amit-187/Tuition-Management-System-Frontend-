import { jwtDecode } from "jwt-decode"; // ✅ Fix

export const getUserRole = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return "Amit";

  try {
    const decoded = jwtDecode(token);
    return decoded.role || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
  } catch (err) {
    console.error("Invalid token", err);
    return null;
  }
};
