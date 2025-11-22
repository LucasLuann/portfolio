import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const DynamicComponentWithNoSSR = dynamic({ ssr: false });

export const metadata: Metadata = {
  title: "Lucas Luann - Desenvolvedor Front-end",
  description:
    "Portfólio desenvolvedor front-end especializado em React, Next.js, e UI/UX moderno",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <DynamicComponentWithNoSSR />
        </ThemeProvider>
      </body>
    </html>
  );
}
