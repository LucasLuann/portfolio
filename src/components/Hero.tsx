"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, Code2Icon, BrainCircuitIcon, MonitorSmartphoneIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"
];

const roles = [
  { title: "Front-end", icon: MonitorSmartphoneIcon },
  { title: "UI/UX", icon: BrainCircuitIcon },
  { title: "Clean Code", icon: Code2Icon },
];

export default function Hero() {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!windowSize) return null;

  return (
    <section className="min-h-[90vh] flex items-center justify-center py-8 sm:py-12 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        {Array.from({ length: 12 }).map((_, i) => {
          // Cria um padrão de movimento circular/orgânico
          const radius = Math.random() * 200 + 100;
          const angle = Math.random() * Math.PI * 2;
          const centerX = windowSize.width / 2;
          const centerY = windowSize.height / 2;
          const speed = Math.random() * 20 + 30; // Velocidade mais lenta
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-primary/5 to-primary/2"
              animate={{
                x: [
                  centerX + radius * Math.cos(angle),
                  centerX + radius * Math.cos(angle + Math.PI / 2),
                  centerX + radius * Math.cos(angle + Math.PI),
                  centerX + radius * Math.cos(angle + (3 * Math.PI) / 2),
                  centerX + radius * Math.cos(angle + 2 * Math.PI),
                ],
                y: [
                  centerY + radius * Math.sin(angle),
                  centerY + radius * Math.sin(angle + Math.PI / 2),
                  centerY + radius * Math.sin(angle + Math.PI),
                  centerY + radius * Math.sin(angle + (3 * Math.PI) / 2),
                  centerY + radius * Math.sin(angle + 2 * Math.PI),
                ],
                scale: [
                  1,
                  1 + Math.random() * 0.2,
                  1,
                  1 + Math.random() * 0.2,
                  1,
                ],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                opacity: Math.random() * 0.15 + 0.05,
                filter: 'blur(2px)',
                background: `radial-gradient(circle at center, ${
                  Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.08)' : 'rgba(6, 182, 212, 0.08)'
                }, transparent)`,
              }}
            />
          );
        })}
      </div>

      <div className="z-20 container px-4 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Conteúdo à esquerda */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/5 mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <Badge variant="outline" className="px-4 py-1 text-sm border-primary/20 bg-primary/10 text-primary">
                Disponível para projetos
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl font-medium text-primary"
            >
              👋 Olá, eu sou
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-4"
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-blue-500 dark:to-cyan-400 text-transparent bg-clip-text animate-gradient">
                Lucas Luann
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-12 overflow-hidden mb-6"
            >
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.title}
                    className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-foreground/80 absolute"
                    initial={{ y: 50 }}
                    animate={{
                      y: index === activeRoleIndex ? 0 : 50,
                      opacity: index === activeRoleIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <span>{role.title}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
            >
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button
                size="lg"
                asChild
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-8 py-6 rounded-xl"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Code2Icon className="w-5 h-5" />
                  Ver Projetos
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700 font-medium px-8 py-6 rounded-xl"
              >
                <a
                  href="https://wa.me/5565999909348?text=Ol%C3%A1%2C%20tudo%20bem%3F%0A%0AVim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio."
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                  Entre em Contato
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center md:justify-start mt-8 md:mt-12 gap-4"
            >
              <motion.a
                href="https://github.com/LucasLuann"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/lucasluann"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:lucasluann10@gmail.com"
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                <MailIcon className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Imagem à direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-48 sm:w-56 md:w-64 lg:w-72"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-cyan-500/30 rounded-2xl blur-3xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-2xl" />
              <Image
                src="/avatar-profile.png"
                alt="Lucas Luann"
                width={500}
                height={500}
                className="rounded-2xl relative z-10"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
