import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Teko } from "next/font/google";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const teko = Teko({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Igor Bueno",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-w-full bg-gray-700">
      <body className={twMerge(poppins.className, teko.className)}>
        {children}
      </body>
    </html>
  );
}
