import React from "react";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-muted text-foreground"
    >
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            {"< "} Entre em Contato {" />"}
          </span>
        </h2>

        <p className="text-muted-foreground">
          Estou disponível para conversar! Me envie um e-mail ou conecte-se
          comigo nas redes.
        </p>

        <div className="space-y-2">
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:lucasluann10@gmail.com" target="_blank">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/lucas-brito18/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a
                href="https://github.com/LucasLuann"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://api.whatsapp.com/send?phone=5565999909348&text=Ol%C3%A1%2C%20Lucas%21%20Gostaria%20de%20conversar%20sobre%20o%20seu%20trabalho."
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="mr-2 h-4 w-4" />
                Whatsapp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
