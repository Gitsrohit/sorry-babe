import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm Sorry 💔",
  description: "An apology from the bottom of my heart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-pink-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
