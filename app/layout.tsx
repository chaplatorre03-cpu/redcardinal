import type { Metadata } from "next";
import "./globals.css";
import CustomScrollbar from "@/components/CustomScrollbar";

export const metadata: Metadata = {
  title: "Red Cardinal - Agencia de Marketing Digital para Empresas Creativas",
  description: "Agencia especializada en redes sociales, publicidad digital, SEO y marketing de contenidos. Posiciona tu marca y genera clientes con estrategias personalizadas.",
  keywords: "marketing digital, redes sociales, publicidad digital, SEO, Google Ads, Facebook Ads, Instagram, agencia marketing Bogotá",
  icons: {
    icon: "/logos/red-cardinal-logo.png",
    apple: "/logos/red-cardinal-logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <CustomScrollbar />
      </body>
    </html>
  );
}
