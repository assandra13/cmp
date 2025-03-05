import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://brickproperty.id"),
  title: {
    default: "Brick Property - Solusi Properti Terbaik di Indonesia",
    template: "%s | Brick Property",
  },
  description: "Brick Property menyediakan layanan properti terbaik dengan harga terjangkau dan kualitas terpercaya di seluruh Indonesia.",
  keywords: ["properti", "rumah", "apartemen", "tanah", "jual beli properti", "sewa properti", "investasi properti"],
  authors: [{ name: "Brick Property" }],
  creator: "Brick Property",
  publisher: "Brick Property",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
