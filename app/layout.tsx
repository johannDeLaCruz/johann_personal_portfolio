import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

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
      <body className="font-heading text-black">
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
