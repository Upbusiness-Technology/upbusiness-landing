import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mateus Nobre",
      role: "Proprietário, Nobres Grill",
      avatar: "MN",
      rating: 5,
      text: "Aqui melhorou demais com o aplicativo, da pra fazer tudo do celular mesmo"
    },
    {
      name: "Ailton Chaves",
      role: "Proprietário, Cantinho do Churrasco",
      avatar: "AC",
      rating: 5,
      text: "Gostei demais do trabalho, o aplicativo ta servindo muito bem aqui na churrascaria"
    },
    {
      name: "Cezar Lima",
      role: "Proprietário, Cezar Bikes",
      avatar: "CL",
      rating: 5,
      text: "Sistema top! A gente anotava em um caderno as vendas e pra fazer os cupons era no improviso mesmo viu"
    },
    {
      name: "Alilton Nobre",
      role: "Proprietário, Estação Pizza",
      avatar: "AM",
      rating: 5,
      text: "Superou todas as expectativas. Tinha que sair desse papel e caneta mas fizeram mais que isso! Adoramos"
    },
    {
      name: "Francisco Cleison",
      role: "Proprietário, Churrascaria SW",
      avatar: "RS",
      rating: 5,
      text: "Equipe muito atenciosa. O sistema ate mudou a forma que a gente trabalha, ficou tudo mais fácil. Nota 10"
    },
    // {
    //   name: "Alilton Nobre",
    //   role: "Proprietário, Estação Pizza",
    //   avatar: "AM",
    //   rating: 5,
    //   text: "Superou todas as expectativas pessoal. Queria sair do papel e caneta mas fizeram mais que isso! Adoramos"
    // }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados reais de empresas que transformaram seus negócios com a UpBusiness
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
