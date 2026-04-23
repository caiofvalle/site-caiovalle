import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caio Valle BJJ Studio | Fotografia & Vídeo para o Jiu-Jitsu",
  description:
    "Fotografia profissional, produção de vídeo e consultoria de posicionamento de marca para atletas e academias de Jiu-Jitsu. Credenciado IBJJF.",
  keywords:
    "fotografia jiu jitsu, vídeo bjj, IBJJF, fotografia esportiva, posicionamento de marca atletas",
  openGraph: {
    title: "Caio Valle BJJ Studio",
    description:
      "Fotografia, vídeo e consultoria de marca para o universo do Jiu-Jitsu",
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
