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
    "The Decentralized Oracle Network on AO for accessing any off-chain data.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.ico",
        href: "/favicon.ico",
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
        <meta property="og:title" content="0rbit | Oracle on Arweave" />
        <meta
          property="og:description"
          content="Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL."
        />
        <meta
          property="og:image"
          content="https://www.0rbit.co/logos/ogBanner.jpeg"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.0rbit.co/logos/ogBanner.jpeg"
        />
        <meta property="og:url" content="https://www.0rbit.co" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="0rbit | Oracle on Arweave" />
        <meta
          name="twitter:description"
          content="Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL."
        />
        <meta
          name="twitter:image"
          content="https://www.0rbit.co/logos/ogLogo.jpg"
        />
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
        <link rel="icon" href="./favicon.ico" sizes="any" />
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
