import { ShoppingCart, Cloud, Smartphone, BarChart3, Lock, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Completo",
      description: "Plataformas robustas e escaláveis para vendas online, integradas com os principais marketplaces",
      features: ["Checkout otimizado", "Gestão de estoque", "Multi-canais"]
    },
    {
      icon: Cloud,
      title: "ERP em Nuvem",
      description: "Gestão empresarial integrada, acessível de qualquer lugar, com dados seguros na nuvem",
      features: ["Financeiro completo", "Controle total", "Relatórios em tempo real"]
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Aplicativos nativos para iOS e Android que aproximam sua marca dos clientes",
      features: ["Design personalizado", "Push notifications", "Pagamento integrado"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Dashboards inteligentes que transformam dados em insights estratégicos para seu negócio",
      features: ["Análise preditiva", "KPIs personalizados", "Visualização avançada"]
    },
    {
      icon: Lock,
      title: "Segurança Digital",
      description: "Proteção completa contra ameaças cibernéticas com monitoramento 24/7",
      features: ["Backup automático", "Criptografia avançada", "Compliance LGPD"]
    },
    {
      icon: Headphones,
      title: "Suporte Premium",
      description: "Time dedicado disponível sempre que você precisar, com SLA garantido",
      features: ["Resposta imediata", "Treinamento incluso", "Consultoria estratégica"]
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nossas Soluções
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de ponta adaptada às necessidades do seu negócio
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
