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
import { LuBrain } from "react-icons/lu";

const skillsList = [
  {
    name: "React",
    icon: <FaReact size={32} />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine size={32} />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssLine size={32} />,
  },

  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={32} />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={32} />,
  },
  { name: "HTML5", icon: <GrHtml5 size={32} /> },
  { name: "CSS3", icon: <TbBrandCss3 size={32} /> },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 mt-32 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Minhas Habilidades
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-lg">
              Tecnologias e ferramentas que utilizo para criar experiências
              digitais modernas e eficientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-10 mt-5 "
          >
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className=" flex items-center rounded-md border border-primary p-4 w-full md:w-1/4 mx-auto"
              >
                {skill.icon}
                <div className="flex-1 space-y-1">
                  <p className="text-md font-medium leading-none">
                    {skill.name}
                  </p>
                </div>
                
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="bg-primary/10 p-4 rounded-full">
              <LuBrain size={40} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Sempre Aprendendo
              </h3>
              <p className="text-muted-foreground text-sm">
                Estou constantemente aprimorando minhas habilidades e explorando
                novas tecnologias para criar soluções web modernas e eficientes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
