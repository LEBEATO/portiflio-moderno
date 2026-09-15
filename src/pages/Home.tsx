import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaCode, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import AnimatedText from '@/components/AnimatedText';

const USER_IMAGE = '/image.jpg';
const stack = ['Next.js', 'React', 'TypeScript', 'Node.js', 'Supabase'];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return <div className="overflow-hidden">
    <section id="home" className="relative min-h-[calc(100vh-72px)] py-16 lg:py-20">
      <div className="pointer-events-none absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="page-container relative grid min-h-[calc(100vh-12rem)] items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : .11 } } }} className="text-center lg:text-left">
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .55 }}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-violet-200"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Disponível para novos projetos</span>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .6 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.24em] text-primary">Olá, eu sou Alexandre Beato</p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"><AnimatedText text="Desenvolvedor Full Stack que transforma ideias em produtos digitais." highlight={['Full', 'Stack']} delay={.1} /></h1>
          </motion.div>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .6 }} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">Desenvolvo aplicações web modernas, responsivas e seguras — da interface ao banco de dados — com foco em experiência do usuário e resultado para o negócio.</motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: .6 }} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <motion.div whileHover={{ y: -4, scale: 1.025 }} whileTap={{ scale: .97 }}><Button size="lg" onClick={() => goTo('projetos')} className="w-full gap-2 bg-primary px-7 text-white shadow-xl shadow-primary/20 hover:bg-primary/90">Ver projetos <motion.span animate={reduceMotion ? undefined : { x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><FaArrowRight /></motion.span></Button></motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.025 }} whileTap={{ scale: .97 }}><Button size="lg" variant="outline" asChild className="w-full gap-2 border-white/15 bg-white/[0.03]"><a href="https://wa.me/5535992640014?text=Olá%20Alexandre,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar." target="_blank" rel="noreferrer"><FaWhatsapp /> Falar no WhatsApp</a></Button></motion.div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {[{ label: 'GitHub', href: 'https://github.com/LEBEATO', icon: <FaGithub /> }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-beato-451926190/', icon: <FaLinkedin /> }].map((social, index) => <motion.a key={social.label} initial={{ opacity: 0, scale: .6, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .75 + index * .12, type: 'spring' }} whileHover={{ y: -5, rotate: index === 0 ? -6 : 6, scale: 1.08 }} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">{social.icon}</motion.a>)}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 65, scale: .9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, amount: .32 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md">
          <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [.6, 1, .6] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -inset-8 rounded-full bg-primary/20 blur-[90px]" />
          <motion.div whileHover={reduceMotion ? undefined : { y: -8, rotateX: 2, rotateY: -2 }} transition={{ type: 'spring', stiffness: 180, damping: 18 }} className="glass neon-shadow relative overflow-hidden rounded-[2rem] p-3 [transform-style:preserve-3d]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <motion.div aria-hidden="true" className="absolute -inset-y-16 z-10 w-24 rotate-12 bg-white/15 blur-xl" animate={reduceMotion ? undefined : { left: ['-35%', '135%'] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4.5, ease: 'easeInOut' }} />
            <img src={USER_IMAGE} alt="Alexandre Beato, desenvolvedor Full Stack" width="500" height="500" className="aspect-square w-full rounded-[1.45rem] object-cover object-center" />
            <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: .45, duration: .55 }} className="absolute bottom-7 left-7 right-7 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl"><motion.span animate={reduceMotion ? undefined : { rotate: [0, 8, -8, 0] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }} className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary"><FaCode /></motion.span><div><p className="text-sm font-semibold">Código limpo e escalável</p><p className="text-xs text-white/55">Front-end • Back-end • Banco de dados</p></div></motion.div>
          </motion.div>
          <motion.span animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [-2, 2, -2] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }} className="glass absolute -right-3 top-12 hidden rounded-xl px-4 py-2 text-xs font-semibold text-violet-200 sm:block">React + Next.js</motion.span>
          <motion.span animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [2, -2, 2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: .8 }} className="glass absolute -left-5 bottom-16 hidden rounded-xl px-4 py-2 text-xs font-semibold text-violet-200 sm:block">Node.js + Supabase</motion.span>
        </motion.div>
      </div>
      <div className="page-container mt-10 overflow-hidden"><motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: .7 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : .1 } } }} className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl px-6 py-5 text-sm font-semibold text-muted-foreground">{stack.map((item, index) => <motion.span key={item} custom={index} variants={{ hidden: (i: number) => ({ opacity: 0, x: reduceMotion ? 0 : i % 2 === 0 ? -36 : 36, scale: .9 }), visible: { opacity: 1, x: 0, scale: 1 } }} transition={{ duration: .45 }} whileHover={{ y: -4, scale: 1.08, color: 'hsl(var(--primary))' }}>{item}</motion.span>)}</motion.div></div>
    </section>
    <section id="sobre"><About /></section>
    <section id="projetos"><Projects /></section>
    <section id="contato"><Contact /></section>
  </div>;
}
