"use client";

import { useAuth } from "@/context/AuthContext";
import { FC } from "react";
import { useRouter } from "next/navigation";

const AuthButton: FC = () => {
  const { isAuthMode, login, logout } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (isAuthMode) {
      logout();
      localStorage.setItem("authMode", "false");
      window.location.reload();
    } else {
      router.push("/signin");
    }
  };

  return (
    <button
      className="py-2 px-4 mr-2 bg-black rounded-md shadow-sm text-white hover:bg-gray-900"
      onClick={handleClick}
    >
      {isAuthMode ? "Log Out" : "Log In"}
    </button>
  );
};

export default AuthButton;
