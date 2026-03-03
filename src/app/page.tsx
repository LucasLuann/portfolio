"use client";

import Hero from "@/components/Hero";
import Header from "../components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TimeLine from "@/components/TimeLine";
import Contact from "@/components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lucas Luann",
    "jobTitle": "Desenvolvedor Front-end",
    "description": "Desenvolvedor front-end de Cuiabá, MT, especializado em React, Next.js e criação de sites de alta performance.",
    "url": "https://lucasluann.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cuiabá",
      "addressRegion": "MT",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://github.com/LucasLuann",
      "https://www.linkedin.com/in/lucas-brito18/"
    ],
    "knowsAbout": ["React", "Next.js", "Criação de sites Cuiabá", "Desenvolvimento Web"]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="jobs">
        <TimeLine />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
