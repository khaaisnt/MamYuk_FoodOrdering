import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MamYuk",
  description: "Pesan makanan makin mudah dan cepat dengan MamYuk!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}