import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          VCDS CORE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
        >
          Especialistas em codificação e ativação VCDS para Audi e Volkswagen
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
          onClick={() => {
            const servicesSection = document.getElementById("services");
            servicesSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Conheça Nossos Serviços
        </motion.button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};