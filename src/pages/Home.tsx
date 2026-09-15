import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const USER_IMAGE = '/image.jpg';
const stack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase'];

export default function Home() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <div className="overflow-hidden">
    <section id="home" className="relative min-h-[calc(100vh-72px)] py-16 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="page-container relative grid min-h-[calc(100vh-12rem)] items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="text-center lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-violet-200"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Disponível para novos projetos</span>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.24em] text-primary">Olá, eu sou Alexandre Beato</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Desenvolvedor <span className="text-gradient">Full Stack</span> que transforma ideias em produtos digitais.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">Desenvolvo aplicações web modernas, responsivas e seguras — da interface ao banco de dados — com foco em experiência do usuário e resultado para o negócio.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button size="lg" onClick={() => goTo('projetos')} className="gap-2 bg-primary px-7 text-white shadow-xl shadow-primary/20 hover:bg-primary/90">Ver projetos <FaArrowRight /></Button>
            <Button size="lg" variant="outline" asChild className="gap-2 border-white/15 bg-white/[0.03]"><a href="https://wa.me/5535992640014?text=Olá%20Alexandre,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar." target="_blank" rel="noreferrer"><FaWhatsapp /> Falar no WhatsApp</a></Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a href="https://github.com/LEBEATO" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition hover:-translate-y-1 hover:text-primary"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/alexandre-beato-451926190/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition hover:-translate-y-1 hover:text-primary"><FaLinkedin /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-primary/20 blur-[90px]" />
          <div className="glass neon-shadow relative overflow-hidden rounded-[2rem] p-3">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <img src={USER_IMAGE} alt="Alexandre Beato, desenvolvedor Full Stack" width="500" height="500" className="aspect-square w-full rounded-[1.45rem] object-cover object-center" />
            <div className="absolute bottom-7 left-7 right-7 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl"><span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary"><FaCode /></span><div><p className="text-sm font-semibold">Código limpo e escalável</p><p className="text-xs text-white/55">Front-end • Back-end • Banco de dados</p></div></div>
          </div>
        </motion.div>
      </div>
      <div className="page-container mt-10"><div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl px-6 py-5 text-sm font-semibold text-muted-foreground">{stack.map(item => <span key={item}>{item}</span>)}</div></div>
    </section>
    <section id="sobre"><About /></section>
    <section id="projetos"><Projects /></section>
    <section id="contato"><Contact /></section>
  </div>;
}
