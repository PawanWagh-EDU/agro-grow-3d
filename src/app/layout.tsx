import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "YK Agro Nursery — Premium Strawberry & Fruit Plant Wholesalers, Pune",
  description: "YK Agro Nursery in Uruli Kanchan, Pune supplies healthy strawberry plants and fruit nursery saplings. Wholesale dispatch starts 2nd week of August.",
  openGraph: {
    title: "YK Agro Nursery — Rooted in quality, grown for growers",
    description: "Wholesale strawberry & fruit plant nursery in Theur, Pune. Dispatch starts August 2nd week.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
