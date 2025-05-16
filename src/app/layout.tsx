import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sosyal Medya Yönetimi | Markanızı Büyütün",
  description: "Profesyonel sosyal medya yönetimi hizmetleri ile markanızı büyütün. İçerik üretimi, strateji ve reklam yönetimi hizmetleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
