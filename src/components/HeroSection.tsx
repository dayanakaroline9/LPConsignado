import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              <span className="text-foreground">Crédito Consignado</span>
              <br />
              <span className="bg-gradient-primary text-transparent bg-clip-text">
                Sem Complicação
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-2xl">
              As menores taxas do mercado, aprovação rápida e dinheiro na sua conta em até 24 horas. 
              Realize seus sonhos com segurança e transparência.
            </p>

            {/* Features highlight */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Menores Taxas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Aprovação em 24h</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contato">
                <Button variant="hero" size="xl" className="group">
                  
                  Simular Meu Crédito
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-border/20">
              <p className="text-sm text-muted-foreground mb-4">Mais de 50.000 clientes confiam na VivaConsig</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-xs text-muted-foreground">Avaliação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">50k+</div>
                  <div className="text-xs text-muted-foreground">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24h</div>
                  <div className="text-xs text-muted-foreground">Aprovação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Família feliz celebrando conquistas financeiras"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-card p-6 rounded-xl border border-border/20 backdrop-blur-sm animate-float">
              <div className="text-sm text-muted-foreground">Taxa a partir de</div>
              <div className="text-2xl font-bold text-primary">1,89% a.m.</div>
              <div className="text-xs text-muted-foreground">*consulte condições</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;