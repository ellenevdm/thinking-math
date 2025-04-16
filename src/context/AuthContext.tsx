"use client";
import { createContext, FC, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  isAuthMode: boolean;
  toggleAuthMode: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthMode, setIsAuthMode] = useState(false);

  const toggleAuthMode = () => {
    setIsAuthMode((prev) => !prev);
    console.log(`Auth mode is now: ${!isAuthMode ? "enabled" : "disabled"}`);
  };

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
