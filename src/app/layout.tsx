import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
const DynamicComponentWithNoSSR = dynamic({ ssr: false });

export const metadata: Metadata = {
  title: "Lucas Luann | Desenvolvedor de Cuiabá MT",
  description:
    "Portfólio de Lucas Luann, desenvolvedor front-end de Cuiabá, MT. Especializado em React, Next.js, interfaces de alta performance e UI/UX moderno.",
  keywords: [
    "Desenvolvedor de Cuiabá MT",
    "Programador Cuiabá MT",
    "Desenvolvedor Front-end Cuiabá",
    "Criação de sites Cuiabá",
    "Desenvolvedor Web Mato Grosso",
    "Lucas Luann",
    "Programador Front-end MT",
    "React",
    "Next.js"
  ],
  authors: [{ name: "Lucas Luann", url: "https://lucasluann.vercel.app" }],
  creator: "Lucas Luann",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucasluann.vercel.app",
    title: "Lucas Luann | Desenvolvedor de Cuiabá MT",
    description: "Desenvolvedor Front-end de Cuiabá - MT focado em experiências incríveis na web.",
    siteName: "Lucas Luann - Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
