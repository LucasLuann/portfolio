"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Previsão do Tempo",
    description: "Aplicação de previsão do tempo",
    techs: ["Next.js", "Tailwind", "Framer Motion", "TypeScript", "Axios"],
    link: "https://clima-app-ll.vercel.app/",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Filmes",
    description: "Consulta de filmes em alta, mais avaliados, e mais recentes.",
    techs: ["React", "ShadCN", "Recharts", "TypeScript", "Axios"],
    link: "https://lucasmovies.vercel.app/",
    color: "from-red-500 to-orange-400",
  },
  {
    id: 3,
    title: "Brafé",
    description: "Projeto fictício de um site de café.",
    techs: ["HTML5", "CSS3"],
    link: "https://lucasluann.github.io/Brafe-Css-Puro/",
    color: "from-amber-600 to-yellow-400",
  },
  {
    id: 4,
    title: "Biscuit da Grazy",
    description: "Landing Page de uma prestadora de serviços relacionados a artesanato.",
    techs: ["HTML5", "CSS3"],
    link: "https://biscuitdagrazi.vercel.app/",
    color: "from-pink-500 to-rose-400",
  },
  {
    id: 5,
    title: "Portfólio Médico",
    description: "Portólio simples de uma médica.",
    techs: ["HTML5", "CSS3"],
    link: "https://josianevenite.vercel.app/",
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 6,
    title: "Blog Fictício",
    description: "Site fictício de serviços.",
    techs: ["HTML5", "CSS3"],
    link: "https://lucasluann.github.io/FlexBlog/",
    color: "from-violet-500 to-purple-400",
  },
]

const projectImages = ["/climaapp.png", "/lucasmovies.png", "/brafe.png", "/biscuit.png", "/flexblog.png"]

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-12 sm:py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 -z-10" />
      <div className="absolute inset-0 opacity-30 dark:opacity-20 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_500px_at_80%_80%,rgba(120,119,198,0.3),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/50">
              Meus Projetos
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 px-4">
            Confira alguns dos meus trabalhos recentes em desenvolvimento web e design
          </p>
        </motion.div>

        {/* Featured project carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 sm:mb-20 relative z-20"
        >
          <Carousel 
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {projectImages.map((src, index) => (
                <CarouselItem key={index} className="sm:basis-4/5 lg:basis-3/4 mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-2 overflow-hidden">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Projeto ${index + 1}`}
                        width={1200}
                        height={600}
                        className="rounded-xl w-full h-[250px] sm:h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                        <Button
                          variant="default"
                          size="lg"
                          className="w-full bg-white/10 hover:bg-white/20 dark:bg-slate-950/50 dark:hover:bg-slate-950/70 backdrop-blur-md text-white border-[1px] border-white/20 shadow-lg transform hover:scale-[1.02] transition-all duration-300 relative z-30 group/btn"
                          asChild
                        >
                          <a 
                            href={projects[index % projects.length].link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-6 sm:py-7"
                          >
                            Ver projeto
                            <ExternalLink className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block relative z-30">
              <CarouselPrevious className="left-2 md:left-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border-none shadow-lg" />
              <CarouselNext className="right-2 md:right-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 border-none shadow-lg" />
            </div>
          </Carousel>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6 relative z-30">
            {projectImages.map((_, index) => (
              <motion.div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === index ? "w-6 sm:w-8 bg-primary" : "bg-slate-300 dark:bg-slate-700",
                )}
                animate={{
                  width: activeIndex === index ? 24 : 8,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative z-20">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br -z-10",
                    project.color,
                    "opacity-0 blur-xl transition-opacity duration-700",
                    hoveredProject === project.id ? "opacity-20" : "",
                  )}
                />

                <Card
                  className={cn(
                    "h-full flex flex-col relative overflow-hidden",
                    "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md",
                    "border border-slate-200/80 dark:border-slate-700/80",
                    "shadow-lg hover:shadow-xl transition-all duration-500",
                    "rounded-2xl hover:-translate-y-1",
                  )}
                >
                  <div
                    className={cn(
                      "absolute h-1 top-0 left-0 right-0 bg-gradient-to-r",
                      project.color,
                      "transform origin-left transition-transform duration-500",
                      hoveredProject === project.id ? "scale-x-100" : "scale-x-0",
                    )}
                  />

                  <CardContent className="p-4 sm:p-6 space-y-4 flex-1">
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 line-clamp-2">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3">
                      {project.techs.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className={cn(
                            "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
                            "hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors",
                            "text-xs font-medium",
                          )}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button
                      className={cn(
                        "w-full relative group/btn overflow-hidden",
                        "bg-transparent hover:bg-transparent",
                        "border border-slate-200 dark:border-slate-700",
                        "text-slate-900 dark:text-slate-100",
                        "transition-all duration-300",
                      )}
                      variant="outline"
                      asChild
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-6"
                      >
                        <span className="relative z-10">Ver Projeto</span>
                        <ExternalLink className="h-4 w-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                        <div className={cn(
                          "absolute inset-0 -z-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300",
                          "bg-gradient-to-r",
                          project.color
                        )} />
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
