import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full z-40 transition-all duration-300 bg-transparent py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            Dev LL
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
                <a
                  href={item.href}
                  className="relative text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
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
