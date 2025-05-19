"use client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isAuthMode: boolean;
  toggleAuthMode: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthMode, setIsAuthMode] = useState(false);

  const toggleAuthMode = () => {
    setIsAuthMode((prevMode) => {
      const newMode = !prevMode;
      console.log(`Auth mode is now: ${newMode ? "enabled" : "disabled"}`);
      return newMode;
    });
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("authMode");
    if (storedMode) {
      setIsAuthMode(storedMode === "true");
    } else {
      localStorage.setItem("authMode", "false");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthMode, toggleAuthMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};
