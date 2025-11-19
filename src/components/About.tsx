import { Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Nossa Missão",
      description: "Democratizar o acesso a ferramentas inteligentes de gestão, tornando a transformação digital acessível a qualquer empresa."
    },
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Estamos sempre à frente, desenvolvendo soluções que antecipam as necessidades do mercado e superam expectativas."
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Cada solução é pensada para resolver problemas reais, com suporte dedicado e acompanhamento próximo."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem Somos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A UpBusiness nasceu da visão de tornar a transformação digital acessível e eficiente para o comércio brasileiro
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Nossa equipe reúne anos de experiência real no comércio. 
              Trabalhamos em diversos segmentos do varejo e conhecemos de perto os desafios do dia a dia. 
              É essa vivência prática que nos permite criar soluções que realmente resolvem problemas e impulsionam resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
