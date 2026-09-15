import { useEffect, useState } from 'react';
import { FaBars, FaCode, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const links = [{ name: 'Início', id: 'home' }, { name: 'Sobre', id: 'sobre' }, { name: 'Projetos', id: 'projetos' }, { name: 'Contato', id: 'contato' }];

export default function Navbar() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' });
    links.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/75 backdrop-blur-2xl">
    <nav className="page-container flex h-[72px] items-center justify-between" aria-label="Navegação principal">
      <button onClick={() => goTo('home')} className="flex items-center gap-3" aria-label="Ir para o início">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25"><FaCode /></span>
        <span className="font-bold tracking-tight">Alex<span className="text-primary">.dev</span></span>
      </button>
      <div className="hidden items-center gap-1 md:flex">
        {links.map(link => <button key={link.id} onClick={() => goTo(link.id)} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${active === link.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-white'}`}>{link.name}</button>)}
        <Button asChild size="sm" className="ml-3 gap-2 bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90"><a href="https://github.com/LEBEATO" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a></Button>
      </div>
      <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu"><FaBars /></Button></SheetTrigger><SheetContent className="border-white/10 bg-background/95"><div className="mt-12 flex flex-col gap-2">{links.map(link => <SheetClose asChild key={link.id}><button onClick={() => goTo(link.id)} className="rounded-xl px-4 py-4 text-left text-lg font-medium hover:bg-primary/10 hover:text-primary">{link.name}</button></SheetClose>)}</div></SheetContent></Sheet>
    </nav>
  </header>;
}
