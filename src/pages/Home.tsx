import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PiHandsClapping } from 'react-icons/pi';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


const USER_IMAGE = "/image.jpg"; 

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Seção Hero (Início) */}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container flex flex-col-reverse items-center justify-center gap-12 lg:flex-row">
          
          {/* Texto e Apresentação */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                <PiHandsClapping size={20} /> Bem-vindo ao meu portfólio
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Desenvolvedor <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">
                  Front-End
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
                Criando experiências digitais modernas com foco em performance e design. Especialista em transformar ideias em código limpo e funcional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button 
                size="lg" 
                className="w-full gap-2 text-white bg-green-600 border-0 sm:w-auto hover:bg-green-700"
                onClick={() => scrollToSection('projetos')}
              >
                Ver Projetos <FaArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full gap-2 sm:w-auto"
                onClick={() => scrollToSection('contato')}
              >
                Entrar em Contato
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-6 lg:justify-start text-muted-foreground"
            >
              <a href="https://github.com/LEBEATO" target="_blank" rel="noreferrer" className="transition-colors hover:text-green-600">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/alexandre-beato-451926190/" target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-600">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:beatoalex936@gmail.com" className="transition-colors hover:text-red-500">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Área da Imagem / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative flex items-center justify-center flex-1"
          >
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/30 to-emerald-500/30 rounded-full blur-[100px] animate-pulse" />
              
              {/* Container da Imagem com Borda Estilizada */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm">
                <img
                  src={USER_IMAGE}
                  alt="Avatar 3D do Desenvolvedor"
                  className="object-cover object-center w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute flex items-center gap-3 p-4 border shadow-xl bottom-10 -left-10 bg-background/80 backdrop-blur-md rounded-2xl border-border"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Disponível para projetos</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-12 md:py-20 bg-background">
        <About />
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="py-12 md:py-20 bg-secondary/20">
        <Projects />
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-12 md:py-20 bg-background">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
