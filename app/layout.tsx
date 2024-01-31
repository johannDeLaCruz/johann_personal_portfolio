import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Johann De La Cruz",
  description: "Full-stack Web Developer",
};

type Props = {
  children: JSX.Element;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-hidden font-heading text-black">
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
