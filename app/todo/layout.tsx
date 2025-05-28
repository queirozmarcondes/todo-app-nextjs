import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // opcional, se quiser pesos específicos
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo app",
  description: "App de tarefas com Next.js",
};

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
