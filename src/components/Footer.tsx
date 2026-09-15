import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socials = [
  { label: 'GitHub', href: 'https://github.com/LEBEATO', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-beato-451926190/', icon: <FaLinkedin /> },
  { label: 'WhatsApp', href: 'https://wa.me/5535992640014', icon: <FaWhatsapp /> },
];

export default function Footer() {
  return <footer className="border-t border-white/[0.08]"><div className="page-container flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
    <p className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Alexandre Beato. Desenvolvido com React e TypeScript.</p>
    <div className="flex gap-2">{socials.map(item => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-primary/10 hover:text-primary">{item.icon}</a>)}</div>
  </div></footer>;
}
