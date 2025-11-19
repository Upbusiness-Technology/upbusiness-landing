import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const links = {
    solutions: [
      { name: "E-commerce", href: "#" },
      { name: "ERP em Nuvem", href: "#" },
      { name: "App Mobile", href: "#" },
      { name: "Business Intelligence", href: "#" }
    ],
    company: [
      { name: "Sobre Nós", href: "#" },
      { name: "Nosso Time", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Blog", href: "#" }
    ],
    support: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Documentação", href: "#" },
      { name: "Status", href: "#" },
      { name: "Termos de Uso", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  UpBusiness
                </h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Transformando comércios através da tecnologia. Soluções inovadoras para impulsionar seu negócio.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Av. Paulista, 1000 - São Paulo, SP - 01310-100</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>(11) 3000-0000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>contato@upbusiness.com.br</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-3">
                {links.solutions.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-3">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-3">
                {links.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2024 UpBusiness. Todos os direitos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
