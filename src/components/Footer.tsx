import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', href: 'https://github.com/LEBEATO', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-beato-451926190/', icon: <FaLinkedin /> },
  { label: 'WhatsApp', href: 'https://wa.me/5535992640014', icon: <FaWhatsapp /> },
];

export default function Footer() {
  return <motion.footer initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .7 }} transition={{ duration: .55 }} className="border-t border-white/[0.08]"><div className="page-container flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
    <motion.p initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Alexandre Beato. Desenvolvido com React e TypeScript.</motion.p>
    <div className="flex gap-2">{socials.map((item, index) => <motion.a initial={{ opacity: 0, y: 15, scale: .7 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false }} transition={{ delay: index * .1, type: 'spring' }} whileHover={{ y: -5, rotate: index % 2 === 0 ? -7 : 7, scale: 1.1 }} key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary">{item.icon}</motion.a>)}</div>
  </div></motion.footer>;
}
