import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Um painel administrativo completo para gestão de vendas e produtos.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Social Media App",
    description: "Rede social focada em desenvolvedores compartilharem seus setups.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Landing Page SaaS",
    description: "Página de alta conversão com animações e performance otimizada.",
    tags: ["React", "Framer Motion", "Shadcn/ui"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "Task Manager",
    description: "Aplicação de produtividade estilo Kanban com drag-and-drop.",
    tags: ["React", "Redux", "dnd-kit"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meus Projetos</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Uma seleção dos trabalhos que desenvolvi, demonstrando minhas habilidades na prática.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt className="h-4 w-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
