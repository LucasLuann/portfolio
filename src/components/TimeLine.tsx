import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    periodo: "Nov 2023 - Atual",
    cargo: "Analista de Processos e Projetos TI",
    empresa: "Amaggi",
    descricao:
      "Atualmente atuo como Analista de Processos, utilizando a plataforma SoftExpert para mapear, otimizar e automatizar processos corporativos. Também desenvolvo interfaces personalizadas com React, Chakra UI e Vite, integrando soluções visuais à plataforma e melhorando a experiência do usuário.",
    atual: true,
  },
  {
    periodo: "Mai 2023 - Nov 2023",
    cargo: "Desenvolvedor Genexus Jr",
    empresa: "Coplan",
    descricao:
      "Atuei como Desenvolvedor Genexus Júnior, auxiliando na criação e manutenção de aplicações corporativas. Trabalhei com modelagem de dados, geração automática de código e integração com bancos de dados, focando na entrega de soluções ágeis e funcionais conforme as necessidades do negócio.",
    atual: false,
  },
  {
    periodo: "Mar 2022 - Nov 2022",
    cargo: "Analista de Processos",
    empresa: "J2A",
    descricao:
      "Mapeamento e automatização de processos de negócio BPMN utilizando o SoftExpert.",
    atual: false,
  },
  {
    periodo: "Jan 2022 - Fev 2022",
    cargo: "Estágio - Suporte N1",
    empresa: "Controladoria Geral do Estado de MT",
    descricao:
      "Configuração de impressoras e scanners, instalação de equipamentos e máquinas, suporte a usuários internos em questões relacionadas a TI.",
    atual: false,
  },
  {
    periodo: "Out 2020 - Dez 2021",
    cargo: "Estágio - Suporte N1",
    empresa: "Secretaria do Meio Ambiente de MT",
    descricao:
      "Configuração de impressoras e scanners, instalação de equipamentos e máquinas, suporte a usuários internos em questões relacionadas a TI.",
    atual: false,
  },
];

const TimeLine = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 px-4 md:px-10"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          {"< "}Experiência Profissional {" />"}
        </span>
      </h2>

      {/* Linha central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted rounded"></div>

      <div className="flex flex-col gap-10 relative z-10">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative w-full flex ${
                isLeft ? "justify-start pr-10" : "justify-end pl-10"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-background z-20"></div>

              <div className="bg-card border border-border rounded-xl shadow-md w-full max-w-md p-6 relative z-10">
                {exp.atual && (
                  <Badge className="bg-blue-500 text-white mb-5">
                    Atualmente
                  </Badge>
                )}
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.cargo}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.empresa} • {exp.periodo}
                </p>
                <p className="text-foreground">{exp.descricao}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default TimeLine;
