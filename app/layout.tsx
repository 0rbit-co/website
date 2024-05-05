import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "./_components";
import { brandLightBg } from "./_utils/colors";
import Script from "next/script";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0rbit | Oracle on Arweave",
  description:
    "The Decentralized Oracle Network on AO for accessing the off-chain data.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/sqLight.svg",
        href: "/logos/sqLight.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/sqDark.svg",
        href: "/logos/sqDark.svg",
      },
    ],
  },
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
      <body
        className={`${raleway.className} min-h-[100vh] ${brandLightBg} flex flex-col items-center`}
      >
        {" "}
        <Nav />
        {children}
      </body>
    </html>
  );
}
