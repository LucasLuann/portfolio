"use client";

import Hero from "@/components/Hero";
import Header from "../components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TimeLine from "@/components/TimeLine";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
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
