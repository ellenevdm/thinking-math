"use client";

import { useAuth } from "@/context/AuthContext";
import { FC } from "react";
import { useRouter } from "next/navigation";

const AuthButton: FC = () => {
  const { isAuthMode, toggleAuthMode } = useAuth();
  const router = useRouter();
  return (
    <button
      className="py-2 px-4 mr-2 bg-black rounded-md shadow-sm text-white hover:bg-gray-900"
      onClick={() => {
        toggleAuthMode();
        if (isAuthMode) {
          router.push("/");
        }
      }}
    >
      {isAuthMode ? "User" : "Admin"}
    </button>
  );
};

export default AuthButton;
