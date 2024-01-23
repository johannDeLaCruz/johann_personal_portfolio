import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

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
      <body className="w-full h-screen overflow-hidden font-body text-black">
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
