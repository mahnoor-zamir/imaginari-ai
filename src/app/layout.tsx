"use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TabProvider } from "@/context/TabContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// ! MetaData not working
// export const metadata: Metadata = {
//   title: "Imaginari AI",
//   description: "An AI-powered application for creative minds.",
//   keywords: ["AI", "creativity", "imaginari"],
// };

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
        <TabProvider>{children}</TabProvider>
      </body>
    </html>
  );
}
