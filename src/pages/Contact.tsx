import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MotionReveal from '@/components/MotionReveal';
import AnimatedText from '@/components/AnimatedText';

const contactLinks = [
  { label: 'WhatsApp', detail: '(35) 99264-0014', href: 'https://wa.me/5535992640014', icon: <FaWhatsapp />, color: 'bg-emerald-500/15 text-emerald-400' },
  { label: 'E-mail', detail: 'beatoalex936@gmail.com', href: 'mailto:beatoalex936@gmail.com', icon: <FaEnvelope />, color: 'bg-primary/15 text-primary' },
  { label: 'LinkedIn', detail: 'Alexandre Beato', href: 'https://www.linkedin.com/in/alexandre-beato-451926190/', icon: <FaLinkedin />, color: 'bg-blue-500/15 text-blue-400' },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendWhatsApp = (event: React.FormEvent) => {
    event.preventDefault();
    const text = encodeURIComponent(`Olá Alexandre! Meu nome é ${name}. ${message}`);
    window.open(`https://wa.me/5535992640014?text=${text}`, '_blank', 'noopener,noreferrer');
    setName('');
    setMessage('');
  };

  return <div className="section-space page-container"><MotionReveal><div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/[0.13] via-card to-card p-6 sm:p-10 lg:p-14">
    <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [.65, 1, .65] }} transition={{ duration: 5, repeat: Infinity }} className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
    <div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-primary">Vamos conversar</p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl"><AnimatedText text="Tem um projeto em mente?" highlight={['projeto']} /></h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">Conte o que você precisa. Vamos transformar sua ideia em uma solução digital moderna, segura e preparada para crescer.</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: .5 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .1 } } }} className="mt-8 space-y-3">
          {contactLinks.map((item, index) => <motion.a key={item.label} variants={{ hidden: { opacity: 0, x: -35 }, visible: { opacity: 1, x: 0 } }} whileHover={{ x: 7, scale: 1.015 }} href={item.href} target={index === 1 ? undefined : '_blank'} rel={index === 1 ? undefined : 'noreferrer'} className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"><motion.span whileHover={{ rotate: 8 }} className={`grid h-11 w-11 place-items-center rounded-xl ${item.color}`}>{item.icon}</motion.span><span><strong className="block text-sm">{item.label}</strong><small className="text-muted-foreground">{item.detail}</small></span></motion.a>)}
        </motion.div>
      </div>
      <motion.form initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: .35 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }} onSubmit={sendWhatsApp} className="glass rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl font-bold">Iniciar uma conversa</h3>
        <p className="mt-2 text-sm text-muted-foreground">A mensagem será aberta no seu WhatsApp para você revisar e enviar.</p>
        <div className="mt-6 space-y-5">
          <div><label htmlFor="name" className="mb-2 block text-sm font-medium">Seu nome</label><Input id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Como posso chamar você?" className="h-12 bg-black/20 transition focus:-translate-y-0.5" /></div>
          <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Sobre o projeto</label><Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required placeholder="Conte brevemente o que você deseja desenvolver..." className="min-h-36 resize-none bg-black/20 transition focus:-translate-y-0.5" /></div>
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: .98 }}><Button type="submit" size="lg" className="w-full gap-2 bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90">Enviar pelo WhatsApp <FaPaperPlane /></Button></motion.div>
        </div>
      </motion.form>
    </div>
  </div></MotionReveal></div>;
}
