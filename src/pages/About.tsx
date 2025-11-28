import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FaCode,  FaLayerGroup, FaCodeBranch } from 'react-icons/fa';

const skills = [
  "JavaScript", "React", "Next.js", "TypeScript", 
  "Tailwind CSS", "HTML5", "CSS3", "GitHub", 
  "Node.js", "Framer Motion"
];

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Desenvolvedor apaixonado por tecnologia e design, sempre buscando a próxima solução criativa.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2">
          <Card className="h-full border-none shadow-lg bg-secondary/20">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <FaCode className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold">Minha Jornada</h3>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Comecei minha jornada na programação fascinado por como linhas de código podem se transformar em interfaces vivas e interativas.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hoje, domino o ecossistema <strong>React</strong> e <strong>Next.js</strong>, utilizando <strong>TypeScript</strong> para criar aplicações robustas e <strong>Tailwind CSS</strong> para designs pixel-perfect. Meu foco é sempre na experiência do usuário e na qualidade do código.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
                  <FaLayerGroup className="w-5 h-5 text-blue-500" /> Tecnologias Principais
                </h3>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-2"
                >
                  {skills.map((skill) => (
                    <motion.div key={skill} variants={item}>
                      <Badge variant="secondary" className="text-sm py-1.5 px-4 hover:bg-green-500/10 hover:text-green-600 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
                  <FaCodeBranch className="w-5 h-5 text-purple-500" /> Ferramentas & Workflow
                </h3>
                <p className="text-muted-foreground">
                  Experiência sólida com versionamento de código usando <strong>GitHub</strong>, metodologias ágeis e colaboração em equipe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
