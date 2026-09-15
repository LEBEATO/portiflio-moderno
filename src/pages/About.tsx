import { motion, useReducedMotion } from 'framer-motion';
import { FaDatabase, FaLaptopCode, FaServer } from 'react-icons/fa';
import MotionReveal from '@/components/MotionReveal';
import AnimatedText from '@/components/AnimatedText';

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Prisma', 'Git & GitHub', 'Vercel'];
const services = [
  { icon: <FaLaptopCode />, title: 'Front-end', text: 'Interfaces rápidas, acessíveis e responsivas com foco na experiência real do usuário.' },
  { icon: <FaServer />, title: 'Back-end', text: 'APIs, autenticação, regras de negócio e integrações preparadas para crescer.' },
  { icon: <FaDatabase />, title: 'Dados & segurança', text: 'Modelagem de banco, permissões e proteção de dados desde a arquitetura.' },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const skillsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
  };
  const skillItem = {
    hidden: (index: number) => ({ opacity: 0, x: reduceMotion ? 0 : index % 2 === 0 ? -55 : 55, scale: reduceMotion ? 1 : 0.94 }),
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return <div className="section-space page-container">
    <MotionReveal className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-primary">Sobre mim</p><h2 className="text-3xl font-bold tracking-tight sm:text-5xl"><AnimatedText text="Tecnologia com propósito, do planejamento à entrega." highlight={['propósito,']} /></h2><motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .32, duration: .6 }} className="mt-5 text-lg leading-relaxed text-muted-foreground">Sou Alexandre Beato, Desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas. Crio soluções que unem visual profissional, código organizado e segurança para resolver problemas reais.</motion.p></MotionReveal>
    <div className="grid gap-5 md:grid-cols-3">{services.map((service, index) => <motion.article key={service.title} initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .22 }} transition={{ duration: .65, delay: index * .1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, scale: 1.015 }} className="glass rounded-2xl p-7 transition-colors hover:border-primary/30"><motion.span initial={{ scale: .7, rotate: -8 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: .22 + index * .1, type: 'spring' }} className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-xl text-primary">{service.icon}</motion.span><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{service.text}</p></motion.article>)}</div>
    <MotionReveal delay={.12} className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-secondary/35 p-7"><p className="mb-5 text-sm font-semibold uppercase tracking-[.2em] text-muted-foreground">Tecnologias e ferramentas</p><motion.div className="flex flex-wrap gap-2" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .45 }} variants={skillsContainer}>{skills.map((skill, index) => <motion.span custom={index} variants={skillItem} transition={{ duration: reduceMotion ? .15 : .48, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -4, scale: 1.04 }} key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition-colors hover:border-primary/35 hover:bg-primary/10 hover:text-primary">{skill}</motion.span>)}</motion.div></MotionReveal>
  </div>;
}
