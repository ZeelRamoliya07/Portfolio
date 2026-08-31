import type { Metadata } from "next";
import "./globals.css";
import CRTWrapper from "../components/CRTWrapper";

export const metadata: Metadata = {
  title: "Ramoliya Zeel | AI Engineer Portfolio",
  description: "Portfolio of Ramoliya Zeel Hirenbhai, B.Tech in Artificial Intelligence student at SVNIT Surat. Aspiring AI Engineer specialized in Machine Learning, Deep Learning, and Software Engineering.",
  keywords: ["Ramoliya Zeel", "SVNIT", "Artificial Intelligence", "AI Engineer", "Software Developer Portfolio", "Pixel Art Website"],
  authors: [{ name: "Ramoliya Zeel Hirenbhai" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <CRTWrapper>{children}</CRTWrapper>
      </body>
    </html>
  );
}
