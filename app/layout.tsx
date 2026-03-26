import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalina Food and Drink",
  description: "Restaurante de mariscos frescos, ambiente elegante y experiencias memorables en Tlaquepaque.",
  verification: {
    google: "C_Ln4PPYN-u2j92XDxNoMiij8eavK-30mhCRmUegVxc",
  },
  openGraph: {
    title: "Catalina Food and Drink",
    description: "Mariscos frescos, ambiente elegante y una experiencia que despierta todos tus sentidos.",
    url: "https://catalina-teal.vercel.app/",
    siteName: "La Catalina",
    images: [
      {
        url: "https://catalina-teal.vercel.app/og_image.png",
        width: 1200,
        height: 630,
        alt: "La Catalina Food and Drink",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalina Food and Drink",
    description: "Mariscos frescos, ambiente elegante y una experiencia que despierta todos tus sentidos.",
    images: ["https://catalina-teal.vercel.app/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
