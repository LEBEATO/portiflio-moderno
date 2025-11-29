import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Em breve retornarei.");
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Trabalhar Juntos?</h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Tem uma ideia de projeto ou quer bater um papo sobre tecnologia? Entre em contato!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-background to-secondary/20 border-muted">
              <CardHeader>
                <CardTitle>Fale Comigo</CardTitle>
                <CardDescription>Escolha o canal que preferir</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="justify-start w-full h-16 gap-4 text-lg transition-all hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30 group" 
                  asChild
                >
                  <a href="https://wa.me/5535992640014" target="_blank" rel="noreferrer">
                    <div className="p-2 transition-transform bg-green-100 rounded-full dark:bg-green-900 group-hover:scale-110">
                      <FaWhatsapp className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">WhatsApp</span>
                      <span className="text-xs font-normal text-muted-foreground">Resposta rápida</span>
                    </div>
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-start w-full h-16 gap-4 text-lg transition-all hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 group" 
                  asChild
                >
                  <a href="mailto:beatoalex936@gmail.com">
                    <div className="p-2 transition-transform bg-blue-100 rounded-full dark:bg-blue-900 group-hover:scale-110">
                      <FaEnvelope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Email</span>
                      <span className="text-xs font-normal text-muted-foreground">Para orçamentos detalhados</span>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nome</label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Telefone</label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                  <Textarea id="message" placeholder="Conte-me sobre seu projeto..." className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full gap-2 bg-primary hover:bg-primary/90">
                  Enviar Mensagem <FaPaperPlane className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
