import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" /> */}
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border shadow-elegant backdrop-blur-sm">
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Vagas Limitadas para Novos Clientes
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Pronto para Transformar
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Seu Negócio?
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Agende uma demonstração gratuita e descubra como podemos levar sua empresa ao próximo nível com nossas soluções tecnológicas
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Demonstração Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Junte-se a dezenas de empresas que já confiam na UpBusiness
                </p>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {[
                    "✓ Sem compromisso",
                    "✓ Consultoria gratuita",
                    "✓ Resposta em 24h"
                  ].map((item, index) => (
                    <span key={index} className="text-sm font-medium text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
