import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Desenvolvido com ❤️ usando React, Tailwind e Shadcn/ui.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:contato@exemplo.com" className="text-muted-foreground hover:text-foreground">
            <FaEnvelope className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
