import { CheckCircle2, Rocket, Shield, TrendingUp, Users2, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Implementação Ágil",
      description: "Projetos entregues em até 30 dias, sem burocracia"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Certificações internacionais e compliance total"
    },
    {
      icon: TrendingUp,
      title: "ROI Comprovado",
      description: "Clientes alcançam payback em média de 4 meses"
    },
    {
      icon: Users2,
      title: "Time Dedicado",
      description: "Equipe especializada exclusiva para seu projeto"
    },
    {
      icon: Zap,
      title: "Integração Total",
      description: "Conectamos com todos os sistemas que você já usa"
    },
    {
      icon: CheckCircle2,
      title: "SLA Premium",
      description: "Garantia de 99.9% de uptime e suporte prioritário"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Por Que Escolher a UpBusiness?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diferenciais que nos tornam a escolha número 1 em tecnologia para comércio
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-card via-muted/20 to-card border border-border">
            {[
              { value: "10+", label: "Anos de Experiência" },
              { value: "500+", label: "Projetos Entregues" },
              { value: "50+", label: "Especialistas" },
              { value: "98%", label: "Clientes Satisfeitos" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
