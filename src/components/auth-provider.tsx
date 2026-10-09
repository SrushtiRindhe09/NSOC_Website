"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthStatus = "unauthenticated" | "pending" | "approved";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  login: (email: string) => void;
  register: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("unauthenticated");

  const login = (email: string) => {
    // Mocking an admin-approved user for demo purposes
    setUser({ name: "Demo User", email });
    setStatus("approved");
  };

  const register = (name: string, email: string) => {
    // Mocking a newly registered user who is pending approval
    setUser({ name, email });
    setStatus("pending");
  };

  const logout = () => {
    setUser(null);
    setStatus("unauthenticated");
  };

  return (
    <AuthContext.Provider value={{ user, status, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
