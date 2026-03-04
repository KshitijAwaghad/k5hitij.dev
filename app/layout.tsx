import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "k5hitij.dev",
  description: "Systems thinker. Problem solver. Builder of scalable solutions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <HashScrollHandler />
        <ScrollAnimator />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
