import type { Metadata } from "next";
import { Bebas_Neue, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SCW Strong Classic Wrestling | Morelia",
  description:
    "La empresa de lucha libre más emocionante de Morelia, Michoacán. Eventos en vivo, el SCW Dojo y los mejores luchadores de la región.",
  keywords: ["lucha libre", "wrestling", "Morelia", "SCW", "Strong Classic Wrestling", "Dojo"],
  openGraph: {
    title: "SCW Strong Classic Wrestling | Morelia",
    description: "Lucha libre profesional en Morelia, Michoacán",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${inter.variable} ${oswald.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
