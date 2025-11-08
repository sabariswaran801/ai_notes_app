import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavbarClient"; // client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Notes",
  description: "Your AI-powered notebook",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Client-side Navbar */}
        <Navbar />

        <main>   {children}</main>

        {/* Footer */}
        <footer className="bg-indigo-600 text-white py-6 mt-12 text-center">
          <p>© {new Date().getFullYear()} AI Notes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
