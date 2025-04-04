import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Mantém o modo estrito para detectar erros
  swcMinify: true, // Minifica o SWC para reduzir o tamanho do código
};

export default nextConfig;
