import type { Metadata } from "next";
import { Boogaloo, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const boogaloo = Boogaloo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oma Bakery | Delicious Pastries Made with Love",
  description:
    "At Oma Bakery, we bake from the heart. Discover our signature cakes, artisan cupcakes, and freshly baked bread — crafted to bring a smile to every celebration.",
  keywords: ["bakery", "cakes", "cupcakes", "pastries", "bread", "desserts"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${boogaloo.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
