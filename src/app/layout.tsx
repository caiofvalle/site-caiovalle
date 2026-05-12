import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio Valle BJJ Photographer",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-t1">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
