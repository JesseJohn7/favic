import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
});
const body = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Favicraft: free favicon generator, nothing uploaded",
  description:
    "Turn one image into every favicon your site needs: .ico, PNGs, Apple and Android icons, manifest and HTML snippet. Runs in your browser. Free.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}