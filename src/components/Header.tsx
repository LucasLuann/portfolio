"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#jobs" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            {"<"} Dev LL {" />"}
          </span>
        </motion.div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  className="relative inline-block text-foreground/80 transition-colors group"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0ea5e9]">
                    {item.name}
                  </span>
                  <motion.span
                    className="absolute left-0 bottom-0 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/60"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ originX: 0 }}
                  />
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-sm -z-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </motion.header>
  );
}
