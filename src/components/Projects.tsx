"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Code2 } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Olliver DI PRATA",
    description: "E-commerce de joias em prata 925 com catálogo de produtos, filtros por categoria e integração com WhatsApp.",
    techs: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://olliverdiprata.vercel.app/",
    color: "from-blue-500 to-cyan-500",
    image: "/olliverdiprata.png",
  },
  {
    id: 2,
    title: "Previsão do Tempo",
    description: "Aplicação de previsão do tempo",
    techs: ["Next.js", "Tailwind", "Framer Motion", "TypeScript", "Axios"],
    link: "https://clima-app-ll.vercel.app/",
    color: "from-blue-500 to-cyan-400",
    image: "/climaapp.png",
  },
  {
    id: 3,
    title: "Filmes",
    description: "Consulta de filmes em alta, mais avaliados, e mais recentes.",
    techs: ["React", "ShadCN", "Recharts", "TypeScript", "Axios"],
    link: "https://lucasmovies.vercel.app/",
    color: "from-red-500 to-orange-400",
    image: "/lucasmovies.png",
  },
  {
    id: 4,
    title: "Brafé",
    description: "Projeto fictício de um site de café.",
    techs: ["HTML5", "CSS3"],
    link: "https://lucasluann.github.io/Brafe-Css-Puro/",
    color: "from-amber-600 to-yellow-400",
    image: "/brafe.png",
  },
  {
    id: 5,
    title: "Biscuit da Grazy",
    description: "Landing Page de uma prestadora de serviços relacionados a artesanato.",
    techs: ["HTML5", "CSS3"],
    link: "https://biscuitdagrazi.vercel.app/",
    color: "from-pink-500 to-rose-400",
    image: "/biscuit.png",
  },
  {
    id: 6,
    title: "Portfólio Médico",
    description: "Portólio simples de uma médica.",
    techs: ["HTML5", "CSS3"],
    link: "https://josianevenite.vercel.app/",
    color: "from-emerald-500 to-teal-400",
    image: "/flexblog.png",
  },
  {
    id: 7,
    title: "Blog Fictício",
    description: "Site fictício de serviços.",
    techs: ["HTML5", "CSS3"],
    link: "https://lucasluann.github.io/FlexBlog/",
    color: "from-violet-500 to-purple-400",
    image: "/flexblog.png",
  },
]

const projectImages = ["/olliverdiprata.png", "/climaapp.png", "/lucasmovies.png", "/brafe.png", "/biscuit.png", "/flexblog.png"]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Background com gradiente e efeitos */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => {
          const positions = [
            { x: [0, 200, 0], y: [0, 150, 0], left: "10%", top: "20%" },
            { x: [0, -150, 0], y: [0, 200, 0], left: "80%", top: "30%" },
            { x: [0, 180, 0], y: [0, -100, 0], left: "50%", top: "70%" },
            { x: [0, -200, 0], y: [0, 150, 0], left: "20%", top: "80%" },
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
                width: 200 + i * 50,
                height: 200 + i * 50,
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
              {"< "} Meus Projetos {" />"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Confira alguns dos meus trabalhos recentes em desenvolvimento web e design
          </motion.p>
        </motion.div>

        {/* Featured Project - Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 relative z-20"
        >
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${projects[0].color} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500`} />
            <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Imagem */}
                <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                  <Image
                    src={projectImages[0] || "/placeholder.svg"}
                    alt={`Projeto ${projects[0].title}`}
                    fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Conteúdo */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-card to-card/50 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${projects[0].color} shadow-lg`}>
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                      Projeto em Destaque
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
                    {projects[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {projects[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].techs.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    size="lg"
                    className={`w-full md:w-auto bg-gradient-to-r ${projects[0].color} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold`}
                    asChild
                  >
                    <a 
                      href={projects[0].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Ver Projeto
                      <ExternalLink className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          <AnimatePresence>
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative"
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br -z-10",
                    project.color,
                    "opacity-0 blur-xl transition-opacity duration-500",
                    hoveredProject === project.id ? "opacity-30" : "",
                  )}
                />

                <Card
                  className={cn(
                    "h-full flex flex-col relative overflow-hidden",
                    "bg-card/80 backdrop-blur-sm",
                    "border border-border/50",
                    "shadow-lg hover:shadow-2xl transition-all duration-300",
                    "rounded-2xl",
                  )}
                >
                  {/* Gradiente de fundo no hover */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                      project.color,
                    )}
                  />

                  {/* Efeito de brilho */}
                  <div
                    className={cn(
                      "absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300",
                      project.color,
                    )}
                  />

                  {/* Linha superior com gradiente */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r rounded-t-2xl",
                      project.color,
                    )}
                  />

                  {/* Imagem do projeto */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`Projeto ${project.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  <CardContent className="p-6 space-y-4 flex-1 relative z-10">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-lg bg-gradient-to-br shadow-md",
                            project.color,
                          )}
                        >
                          <Code2 className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techs.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 transition-colors text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 relative z-10">
                    <Button
                      className={cn(
                        "w-full relative group/btn overflow-hidden",
                        "bg-gradient-to-r",
                        project.color,
                        "text-white border-0",
                        "hover:opacity-90",
                        "shadow-lg hover:shadow-xl",
                        "transition-all duration-300",
                        "font-semibold",
                      )}
                      variant="default"
                      asChild
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-6"
                      >
                        <span className="relative z-10">Ver Projeto</span>
                        <ExternalLink className="h-5 w-5 relative z-10 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects
