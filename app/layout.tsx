import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Title",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`font-Inter`}>{children}</body>
    </html>
  );
}
