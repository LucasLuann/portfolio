"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { FiExternalLink } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Previsão do Tempo",
    description: "Aplicação de previsão do tempo",
    techs: ["Next.js", "Tailwind", "Framer Motion", "TypeScript", "Axios"],
    link: "https://clima-app-ll.vercel.app/",
  },
  {
    id: 2,
    title: "Filmes",
    description: "Consulta de filmes em alta, mais avaliados, e mais recentes.",
    techs: ["React", "ShadCN", "Recharts", "TypeScript", "Axios"],
    link: "https://lucasmovies.vercel.app/",
  },
  {
    id: 3,
    title: "Brafé",
    description: "Projeto fictício de um site de café.",
    techs: ["HTML5", "CSS3"],
    link: "https://lucasluann.github.io/Brafe-Css-Puro/",
  },
  {
    id: 4,
    title: "Biscuit da Grazy",
    description:
      "Landing Page de uma prestadora de serviços relacionados a artesanato.",
    techs: ["HTML5", "CSS3"],
    link: "https://biscuitdagrazi.vercel.app/",
  },
  {
    id: 5,
    title: "Portfólio Médico",
    description: "Portólio simples de uma médica.",
    techs: ["HTML5", "CSS3"],
    link: "https://josianevenite.vercel.app/",
  },
  {
    id: 6,
    title: "Blog Fictício",
    description: "Site fictício de serviços.",
    techs: ["HTML5", "CSS3"],
    link: "https://lucasluann.github.io/FlexBlog/",
  },
];

const Projects = () => {
  return (
    <motion.div className="p-6 min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#0f172a] dark:to-[#1e293b]">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          {"< "} Meus Projetos {" />"}
        </span>
      </h2>

      <div className="container mx-auto mt-20">
        <Carousel className="w-full">
          <CarouselContent>
            {[
              "/climaapp.png",
              "/lucasmovies.png",
              "/brafe.png",
              "/biscuit.png",
              "/flexblog.png",
            ].map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-full shrink-0 flex justify-center items-center"
              >
                <div className="w-full max-w-5xl px-4">
                  <Image
                    src={src}
                    alt={`Projeto ${index + 1}`}
                    width={1200}
                    height={600}
                    className="rounded-xl w-full h-[400px] object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl rounded-2xl h-full flex flex-col">
              <CardContent className="p-6 space-y-4 flex flex-col flex-1 justify-between ">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-slate-900 text-slate-300 hover:bg-slate-500 hover:text-slate-900 font-bold transition-colors"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-full"
                  >
                    Ver Projeto <FiExternalLink />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
