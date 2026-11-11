import type { Metadata } from "next";
import { Geist, Archivo, Hanken_Grotesk, DM_Mono, Shadows_Into_Light_Two } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const handwritten = Shadows_Into_Light_Two({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: "400",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio Valle BJJ Photographer",
  icons: {
    icon: "/justv.png",
    shortcut: "/justv.png",
    apple: "/justv.png",
  },
  description:
    "Fotografia profissional de Brazilian Jiu-Jitsu. Cobertura de campeonatos, ensaios de atletas e seminários. Disponível em Portugal e Europa.",
  keywords:
    "fotografia jiu jitsu, fotografia bjj, IBJJF, fotografia esportiva, fotógrafo jiu jitsu portugal, campeonatos bjj",
  openGraph: {
    title: "Caio Valle BJJ Photographer",
    description:
      "Fotografia profissional de Brazilian Jiu-Jitsu — campeonatos, atletas e seminários",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${archivo.variable} ${hanken.variable} ${dmMono.variable} ${handwritten.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-t1">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
