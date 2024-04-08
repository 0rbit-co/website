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
  title: "0rbit | Oracle on Arweave",
  description:
    "Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
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
        <link rel="icon" type="image/svg+xml" href="../favicon.svg"></link>
        <link rel="icon" type="image/png" href="../favicon.png"></link>
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
