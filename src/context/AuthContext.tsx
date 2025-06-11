"use client";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { set } from "zod";

type AuthContextType = {
  isAuthMode: boolean;
  toggleAuthMode: () => void;
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthMode, setIsAuthMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuthMode = () => {
    setIsAuthMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("authMode", newMode.toString());
      console.log(`Auth mode is now: ${newMode ? "enabled" : "disabled"}`);
      return newMode;
    });
  };

  const login = (username: string, password: string) => {
    if (
      (username === "admin" || username === "admin@example.com") &&
      password === "password123"
    ) {
      setIsAuthMode(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("authMode");
    if (storedMode) {
      setIsAuthMode(storedMode === "true");
    } else {
      localStorage.setItem("authMode", "false");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthMode, toggleAuthMode, isLoggedIn, login, logout }}
    >
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
