"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

export default function Hero() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    // Só roda no client-side
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  if (!windowSize) return null; // Evita renderizar até ter o tamanho da tela

  return (
    <section className="relative h-screen flex flex-col gap-5 items-center justify-center  pt-40 md:pt-0">
      {/* Background animation */}
      <div className="absolute left-20 right-0 top-10 bottom-00 overflow-x-clip">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-500/30"
            initial={{
              x: Math.random() * window.innerWidth, // Coordenadas aleatórias na tela
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "backInOut",
            }}
            style={{
              width: Math.random() * 600 + 50,
              height: Math.random() * 300 + 150,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left px-4 md:px-0">
          {/* Imagem Responsiva */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/avatar-profile.png"
                alt="Logo"
                width={500}
                height={500}
                className="w-52 sm:w-48 md:w-56 lg:w-72 rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Texto */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
                👋 Olá, eu sou
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                  Lucas Luann
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8">
                Desenvolvedor Front-end
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto"
              >
                <a href="#projects">Ver Projetos</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="#contact">Entre em Contato</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center md:justify-start mt-12 space-x-4"
            >
              {/* Ícones */}
              <motion.a
                href="https://github.com/LucasLuann"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-gray-500 text-gray-100 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/lucasluann"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-gray-500 text-gray-100 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:lucasluann10@gmail.com"
                whileHover={{ y: -5 }}
                className="bg-gray-500 text-gray-100 p-3 rounded-full hover:bg-primary/20 transition-colors"
              >
                <MailIcon className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="bottom-0 left-1/2 mt-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <a href="#about" aria-label="Rolar para baixo">
            <ArrowDownIcon className="h-14 w-14 text-blue-400 transition-colors hover:text-primary " />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
