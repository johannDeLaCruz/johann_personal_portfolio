import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Johann De La Cruz",
  description: "Full-stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-hidden font-body">
        <main>
          <Header />
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
