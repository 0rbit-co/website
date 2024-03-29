import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingNavDemo from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0rbit",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        ></Script>
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS}');`}
        </Script>
      </head>
      <body className={inter.className}>
        <FloatingNavDemo />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
