import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MotionReveal from '@/components/MotionReveal';
import AnimatedText from '@/components/AnimatedText';

export default function Contact() {
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
    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
    <div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
      <div><p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-primary">Vamos conversar</p><h2 className="text-3xl font-bold tracking-tight sm:text-5xl"><AnimatedText text="Tem um projeto em mente?" highlight={['projeto']} /></h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">Conte o que você precisa. Vamos transformar sua ideia em uma solução digital moderna, segura e preparada para crescer.</p>
        <div className="mt-8 space-y-3"><a href="https://wa.me/5535992640014" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400"><FaWhatsapp /></span><span><strong className="block text-sm">WhatsApp</strong><small className="text-muted-foreground">(35) 99264-0014</small></span></a><a href="mailto:beatoalex936@gmail.com" className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary"><FaEnvelope /></span><span><strong className="block text-sm">E-mail</strong><small className="text-muted-foreground">beatoalex936@gmail.com</small></span></a><a href="https://www.linkedin.com/in/alexandre-beato-451926190/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.04]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 text-blue-400"><FaLinkedin /></span><span><strong className="block text-sm">LinkedIn</strong><small className="text-muted-foreground">Alexandre Beato</small></span></a></div>
      </div>
      <form onSubmit={sendWhatsApp} className="glass rounded-2xl p-6 sm:p-8"><h3 className="text-xl font-bold">Iniciar uma conversa</h3><p className="mt-2 text-sm text-muted-foreground">A mensagem será aberta no seu WhatsApp para você revisar e enviar.</p><div className="mt-6 space-y-5"><div><label htmlFor="name" className="mb-2 block text-sm font-medium">Seu nome</label><Input id="name" value={name} onChange={e => setName(e.target.value)} required placeholder="Como posso chamar você?" className="h-12 bg-black/20" /></div><div><label htmlFor="message" className="mb-2 block text-sm font-medium">Sobre o projeto</label><Textarea id="message" value={message} onChange={e => setMessage(e.target.value)} required placeholder="Conte brevemente o que você deseja desenvolver..." className="min-h-36 resize-none bg-black/20" /></div><Button type="submit" size="lg" className="w-full gap-2 bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90">Enviar pelo WhatsApp <FaPaperPlane /></Button></div></form>
    </div>
  </div></MotionReveal></div>;
}
