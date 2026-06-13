import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-Gen Learning Dashboard",
  description: "Frontend intern challenge dashboard built with Next.js and Supabase"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
