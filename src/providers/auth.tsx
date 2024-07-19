"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const AuthProvider = ({ children }: SessionProviderProps) => (
  <SessionProvider>{children}</SessionProvider>
);
