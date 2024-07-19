import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { AuthProvider } from "@/providers/auth";
import GlobalStyle from "@/styles/GlobalStyle";
import Header from "@/components/Header";

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
          <AuthProvider>
            <GlobalStyle />
            <Header/>
            {children}
          </AuthProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
