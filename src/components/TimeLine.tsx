"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, Sparkles } from "lucide-react";

const experiences = [
  {
    periodo: "Jul 2025 - Atual",
    cargo: "Desenvolvedor FullStack",
    empresa: "Agenda Assessoria",
    descricao:
      "Atuo como Desenvolvedor FullStack, desenvolvendo aplicações web completas utilizando React com Next.js no frontend e .NET com Entity Framework no backend. Trabalho com banco de dados PostgreSQL, criando soluções escaláveis e performáticas para atender as necessidades da empresa.",
    atual: true,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20",
  },
  {
    periodo: "Nov 2023 - Jul 2025",
    cargo: "Analista de Processos e Projetos TI",
    empresa: "Amaggi",
    descricao:
      "Atuei como Analista de Processos, utilizando a plataforma SoftExpert para mapear, otimizar e automatizar processos corporativos. Também desenvolvi interfaces personalizadas com React, Chakra UI e Vite, integrando soluções visuais à plataforma e melhorando a experiência do usuário.",
    atual: false,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    hoverColor: "hover:bg-purple-500/20",
  },
  {
    periodo: "Mai 2023 - Nov 2023",
    cargo: "Desenvolvedor Genexus Jr",
    empresa: "Coplan",
    descricao:
      "Atuei como Desenvolvedor Genexus Júnior, auxiliando na criação e manutenção de aplicações corporativas. Trabalhei com modelagem de dados, geração automática de código e integração com bancos de dados, focando na entrega de soluções ágeis e funcionais conforme as necessidades do negócio.",
    atual: false,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    hoverColor: "hover:bg-orange-500/20",
  },
  {
    periodo: "Mar 2022 - Nov 2022",
    cargo: "Analista de Processos",
    empresa: "J2A",
    descricao:
      "Mapeamento e automatização de processos de negócio BPMN utilizando o SoftExpert.",
    atual: false,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    hoverColor: "hover:bg-amber-500/20",
  },
  {
    periodo: "Jan 2022 - Fev 2022",
    cargo: "Estágio - Suporte N1",
    empresa: "Controladoria Geral do Estado de MT",
    descricao:
      "Configuração de impressoras e scanners, instalação de equipamentos e máquinas, suporte a usuários internos em questões relacionadas a TI.",
    atual: false,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20",
  },
  {
    periodo: "Out 2020 - Dez 2021",
    cargo: "Estágio - Suporte N1",
    empresa: "Secretaria do Meio Ambiente de MT",
    descricao:
      "Configuração de impressoras e scanners, instalação de equipamentos e máquinas, suporte a usuários internos em questões relacionadas a TI.",
    atual: false,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    hoverColor: "hover:bg-indigo-500/20",
  },
];

const TimeLine = () => {

  return (
    <section
      id="jobs"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background com gradiente e efeitos */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => {
          const positions = [
            { x: [0, 180, 0], y: [0, 120, 0], left: "12%", top: "30%" },
            { x: [0, -140, 0], y: [0, 180, 0], left: "82%", top: "40%" },
            { x: [0, 160, 0], y: [0, -90, 0], left: "48%", top: "75%" },
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
              {"< "} Experiência Profissional {" />"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Minha jornada profissional e as experiências que moldaram minha
            carreira em tecnologia.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 rounded-full opacity-20" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Ponto na timeline */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 z-20">
                  <motion.div
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg shadow-blue-500/50 border-4 border-background`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  {exp.atual && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-75"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`relative group ${exp.bgColor} ${exp.hoverColor} border border-border/50 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden`}
                  >
                    {/* Gradiente de fundo no hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Efeito de brilho */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      {/* Badge Atualmente */}
                      {exp.atual && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", delay: 0.3 }}
                          className="mb-4"
                        >
                          <Badge
                            className={`bg-gradient-to-r ${exp.color} text-white border-0 shadow-lg`}
                          >
                            <Sparkles className="w-3 h-3 mr-1" />
                            Atualmente
                          </Badge>
                        </motion.div>
                      )}

                      {/* Cargo */}
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} shadow-md`}
                        >
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                            {exp.cargo}
                          </h3>
                        </div>
                      </div>

                      {/* Empresa e Período */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span className="group-hover:text-foreground/80 transition-colors">
                            {exp.empresa}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="group-hover:text-foreground/80 transition-colors">
                            {exp.periodo}
                          </span>
                        </div>
                      </div>

                      {/* Descrição */}
                      <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {exp.descricao}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
