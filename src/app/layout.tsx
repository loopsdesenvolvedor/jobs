import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { AuthProvider } from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobs | Busque o emprego ideal de forma simples e rápida",
  description: "Candidate-se para o emprego ideal de um jeito simples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
