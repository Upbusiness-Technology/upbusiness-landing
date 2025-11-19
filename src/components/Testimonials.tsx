import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Costa",
      role: "CEO, Fashion Store",
      avatar: "MC",
      rating: 5,
      text: "A UpBusiness revolucionou nossa operação. Em 6 meses, aumentamos as vendas online em 150% e reduzimos custos operacionais significativamente."
    },
    {
      name: "Roberto Silva",
      role: "Diretor, TechMart",
      avatar: "RS",
      rating: 5,
      text: "Implementaram nosso ERP em tempo recorde. O suporte é excepcional e a plataforma é intuitiva. Finalmente temos controle total do negócio."
    },
    {
      name: "Ana Paula Mendes",
      role: "Fundadora, BeautyShop",
      avatar: "AM",
      rating: 5,
      text: "O aplicativo mobile que desenvolveram para nós superou todas as expectativas. Nossos clientes adoraram e o engajamento triplicou!"
    }
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
