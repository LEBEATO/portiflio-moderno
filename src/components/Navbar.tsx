import { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaCode } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useTheme } from '@/components/ui/theme-provider';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Início', path: '#home' },
    { name: 'Sobre Mim', path: '#sobre' },
    { name: 'Projetos', path: '#projetos' },
    { name: 'Contato', path: '#contato' },
  ];

  // Scroll Spy para detectar a seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.path.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset para melhor detecção

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, 'home')}
          className="flex items-center space-x-2"
        >
          <FaCode className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl hidden sm:inline-block">DevPortfolio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => {
            const sectionId = link.path.substring(1);
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleScrollTo(e, sectionId)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === sectionId
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {activeSection === sectionId && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-primary mt-1"
                  />
                )}
                {link.name}
              </a>
            );
          })}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <FaBars className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <a
                      href={link.path}
                      onClick={(e) => handleScrollTo(e, link.path.substring(1))}
                      className={`text-lg font-medium ${
                        activeSection === link.path.substring(1)
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
