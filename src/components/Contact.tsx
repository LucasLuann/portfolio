"use client";

import React from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:lucasluann10@gmail.com",
    description: "lucasluann10@gmail.com",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lucas-brito18/",
    description: "Conecte-se comigo",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-600/10",
    hoverColor: "hover:bg-blue-600/20",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/LucasLuann",
    description: "Veja meus projetos",
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-700/10",
    hoverColor: "hover:bg-gray-700/20",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://api.whatsapp.com/send?phone=5565992819898&text=Ol%C3%A1%2C%20Lucas%21%20Gostaria%20de%20conversar%20sobre%20o%20seu%20trabalho.",
    description: "Vamos conversar!",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20",
  },
];

const Contact = () => {

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background com gradiente e efeitos */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => {
          const positions = [
            { x: [0, 150, 0], y: [0, 100, 0], left: "15%", top: "25%" },
            { x: [0, -120, 0], y: [0, 150, 0], left: "75%", top: "35%" },
            { x: [0, 130, 0], y: [0, -80, 0], left: "45%", top: "65%" },
            { x: [0, -150, 0], y: [0, 120, 0], left: "25%", top: "75%" },
          ]
          const pos = positions[i] || positions[0]
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5"
              animate={{
                x: pos.x,
                y: pos.y,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 180 + i * 40,
                height: 180 + i * 40,
                left: pos.left,
                top: pos.top,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              {"< "} Entre em Contato {" />"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Estou disponível para conversar sobre projetos, oportunidades ou
            apenas para trocar uma ideia! Escolha a melhor forma de entrar em
            contato.
          </motion.p>
        </motion.div>

        {/* Cards de contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group ${method.bgColor} ${method.hoverColor} border border-border/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden`}
              >
                {/* Gradiente de fundo no hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Efeito de brilho */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Ícone */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                    {method.name}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {method.description}
                  </p>

                  {/* Seta indicativa */}
                  <motion.div
                    className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Entrar em contato
                    <motion.svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Mensagem adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <MessageCircle className="h-5 w-5 text-blue-500" />
            <p className="text-sm text-muted-foreground">
              Respondo em até 24 horas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
