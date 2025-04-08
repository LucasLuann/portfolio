import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  RiNextjsLine,
  RiTailwindCssLine,
  RiJavascriptLine,
} from "react-icons/ri";
import { TbBrandTypescript, TbBrandCss3 } from "react-icons/tb";
import { GrHtml5 } from "react-icons/gr";

const skillsList = [
  {
    name: "React",
    icon: <FaReact size={32} />,
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas.",
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine size={32} />,
    description:
      "Framework React para aplicações web modernas com renderização híbrida (SSR, SSG).",
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssLine size={32} />,
    description:
      "Framework CSS utilitário que permite criar interfaces rápidas e responsivas com classes pré-definidas.",
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={32} />,
    description:
      "Superset do JavaScript que adiciona tipagem estática para maior segurança e produtividade.",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={32} />,
    description:
      "Linguagem de programação essencial para aplicações web interativas no lado do cliente.",
  },
  {
    name: "HTML5",
    icon: <GrHtml5 size={32} />,
    description:
      "Linguagem de marcação padrão para criar a estrutura e o conteúdo de páginas web.",
  },
  {
    name: "CSS3",
    icon: <TbBrandCss3 size={32} />,
    description:
      "Linguagem de estilos utilizada para definir aparência, layout e animações de páginas web.",
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30 mt-32 md:mt-0">
      <div className="container mx-auto px-4 my-auto">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
               {"< "}Minhas Habilidades {" />"}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg text-center">
              Tecnologias e ferramentas que utilizo para criar experiências
              digitais modernas e eficientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/50 transition-all duration-300 hover:bg-black/5 hover:border-blue-400/60"
              >
                <div className="text-primary w-10 h-10">{skill.icon}</div>
                <div className="flex-1 space-y-1">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    {skill.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-20 w-full overflow-hidden"
          >
            <div className="relative h-16 w-full">
              <motion.div
                className="absolute flex gap-4 whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  ease: "linear",
                  duration: 50,
                  repeat: Infinity,
                }}
              >
                {[
                  ...skillsList,
                  ...skillsList,
                  ...skillsList,
                  ...skillsList,
                ].map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
