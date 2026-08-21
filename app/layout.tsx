import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sugoDisplay = localFont({
  src: "./fonts/Sugo-Pro-Display.ttf",
  variable: "--font-sugo",
});

export const metadata: Metadata = {
  title: "SkenduyList",
  description: "Indonesian Indie Music Archive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`${sugoDisplay.variable}`}>{children}</body>
    </html>
  );
}
