import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arkkisnack.vercel.app"),
  title: "What Should I Eat While Rendering?",
  description: "A fun and relatable snack suggestion site for architects and interior designers pulling all-nighters and waiting for their render to finish.",
  openGraph: {
    title: "What Should I Eat While Rendering?",
    description: "Snack ideas for architects and interior designers stuck in the render loop.",
    type: "website",
    url: "https://arkkisnack.vercel.app",
    siteName: "What Should I Eat While Rendering?",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png", // We'll need to add this image to the public folder
        width: 1200,
        height: 630,
        alt: "What Should I Eat While Rendering - A snack generator for architects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Should I Eat While Rendering?",
    description: "Snack ideas for architects and interior designers stuck in the render loop.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
