import type { Metadata, Viewport } from "next";
import { Quantico, Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const quantico = Quantico({
  weight: ["400", "700"],
  variable: "--font-quantico",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RUNNEST",
  description: "Hitta din löpargrupp",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RUNNEST",
  },
};

export const viewport: Viewport = {
  themeColor: "#08223b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${quantico.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Header />
          {children}
        </body>
    </html>
  );
}
