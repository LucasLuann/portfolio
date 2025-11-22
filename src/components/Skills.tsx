"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  RiNextjsLine,
  RiTailwindCssLine,
  RiJavascriptLine,
} from "react-icons/ri";
import { TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { GrHtml5 } from "react-icons/gr";
import { SiDotnet, SiPostgresql } from "react-icons/si";

const skillsList = [
  {
    name: "React",
    icon: FaReact,
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
  },
  {
    name: "Next.js",
    icon: RiNextjsLine,
    description:
      "Framework React para aplicações web modernas com renderização híbrida (SSR, SSG).",
    color: "from-gray-800 to-gray-900",
    bgColor: "bg-gray-800/10",
    hoverColor: "hover:bg-gray-800/20",
  },
  {
    name: "TypeScript",
    icon: TbBrandTypescript,
    description:
      "Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade.",
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-600/10",
    hoverColor: "hover:bg-blue-600/20",
  },
  {
    name: ".NET",
    icon: SiDotnet,
    description:
      "Framework da Microsoft para desenvolvimento de aplicações web e APIs robustas e escaláveis.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    hoverColor: "hover:bg-purple-500/20",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description:
      "Sistema de gerenciamento de banco de dados relacional open-source e altamente confiável.",
    color: "from-blue-700 to-blue-800",
    bgColor: "bg-blue-700/10",
    hoverColor: "hover:bg-blue-700/20",
  },
  {
    name: "TailwindCSS",
    icon: RiTailwindCssLine,
    description:
      "Framework CSS utilitário que permite criar interfaces rápidas e responsivas com classes pré-definidas.",
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    hoverColor: "hover:bg-cyan-500/20",
  },
  {
    name: "JavaScript",
    icon: RiJavascriptLine,
    description:
      "Linguagem de programação essencial para aplicações web interativas no lado do cliente.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    hoverColor: "hover:bg-yellow-500/20",
  },
  {
    name: "HTML5",
    icon: GrHtml5,
    description:
      "Linguagem de marcação padrão para criar a estrutura e o conteúdo de páginas web.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    hoverColor: "hover:bg-orange-500/20",
  },
  {
    name: "CSS3",
    icon: TbBrandCss3,
    description:
      "Linguagem de estilos utilizada para definir aparência, layout e animações de páginas web.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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

      <div className="relative z-10 max-w-7xl mx-auto">
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
              {"< "} Minhas Habilidades {" />"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Tecnologias e ferramentas que utilizo para criar experiências
            digitais modernas e eficientes.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative group ${skill.bgColor} ${skill.hoverColor} border border-border/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden`}
              >
                {/* Gradiente de fundo no hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Efeito de brilho */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Ícone */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                    {skill.name}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
