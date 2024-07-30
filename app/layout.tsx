import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nur Care",
  description: "Take Care of your Health anytime, anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/nur.ico" />
        <script
          defer
          data-domain="nur-care.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>

      <body className={inter.className}>
        <main>
          <Navbar />
          {/* <img src="/images/nur.ico" alt="" /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
