import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  //values to store
  const [user, setUser] = useState();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (jwtToken, refreshToken, userProfile, expiresIn) => {
    setToken(jwtToken);
    setUser(userProfile);

    // Store in localStorage
    localStorage.setItem("jwt", jwtToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(userProfile));

    toast.success("Login successful!");

    navigate("/about");

    // Auto logout when token expires
    setTimeout(() => {
      logout();
      toast.error("Session expired. Please log in again.");
    }, expiresIn);
  };

  const logout = () => {
    setToken(null);
    setUser(null);

    // Remove from localStorage
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};