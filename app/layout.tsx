import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "./assets/logo.png";

const WHATSAPP_NUMBER = "5582981462725";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sossego",
  description: "Gerenciamento de Crise",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0A09]"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.477 2 2 6.149 2 11.267c0 1.95.666 3.759 1.8 5.22L3 22l5.78-1.716A10.56 10.56 0 0 0 12 20.533c5.523 0 10-4.15 10-9.266C22 6.149 17.523 2 12 2Z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M12 3.333c-4.785 0-8.667 3.56-8.667 7.934 0 1.71.58 3.29 1.568 4.56l-1.04 3.2 3.347-.993a9.26 9.26 0 0 0 4.792 1.266c4.785 0 8.667-3.56 8.667-7.933 0-4.375-3.882-7.934-8.667-7.934Zm4.777 11.011c-.197.51-1.155.973-1.588 1.046-.407.067-.923.095-1.488-.087-.342-.11-.78-.25-1.35-.489-2.373-.987-3.92-3.223-4.04-3.383-.117-.156-.962-1.212-.962-2.314 0-1.102.62-1.646.84-1.873.22-.226.48-.283.64-.283h.46c.147 0 .343-.04.536.39.196.45.667 1.56.726 1.673.06.114.098.247.02.403-.078.156-.118.253-.235.39-.118.137-.248.306-.354.41-.118.114-.24.237-.103.464.137.226.607.976 1.305 1.58.897.776 1.653 1.016 1.886 1.13.235.114.373.095.51-.057.137-.156.59-.66.748-.886.157-.226.314-.19.53-.114.217.076 1.372.597 1.608.706.235.11.392.164.45.253.058.09.058.52-.137 1.03Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
