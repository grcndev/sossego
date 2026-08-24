import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import logo from "./assets/logo.png";
import { Nav } from "./components/sossego/Nav";
import { ScrollFX } from "./components/sossego/ScrollFX";
import { EmergencyBar } from "./components/sossego/EmergencyBar";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sossego",
  description: "Consultoria e Acompanhamento",
  icons: {
    icon: [{ url: logo.src }],
    apple: [{ url: logo.src }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <ScrollFX />
        <Nav />
        {children}
        <EmergencyBar />
      </body>
    </html>
  );
}
