"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

const SignInSchema = z.object({
  username: z.string().min(1, "Username or email is required"),
  password: z.string().min(1, "Password is required"),
});

function SignInPage() {
  const { login, isAuthMode } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  if (isAuthMode) {
    router.replace("/");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = SignInSchema.safeParse({ username, password });
          if (!result.success) {
            setError(result.error.errors[0].message);
            return;
          }
          try {
            await login(username, password);
            setError("");
            router.replace("/");
          } catch (e) {
            setError("Invalid username/email or password");
          }
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <input
          className="border p-2 rounded"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          className="border p-2 rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="bg-blue-600 text-white p-2 rounded" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
