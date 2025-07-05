import { Card } from "@/components/ui/card";
import { 
  CreditCard, 
  Clock, 
  Shield, 
  TrendingDown, 
  CheckCircle, 
  Users,
  Calculator,
  Smartphone
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Menores Taxas do Mercado",
    description: "Taxas a partir de 1,89% a.m., muito abaixo do cartão de crédito e outros empréstimos.",
    highlight: "Até 70% menor que outros créditos"
  },
  {
    icon: Clock,
    title: "Aprovação em até 24h",
    description: "Processo 100% digital e rápido. Dinheiro na sua conta em até 24 horas após aprovação.",
    highlight: "Sem burocracia"
  },
  {
    icon: Shield,
    title: "100% Seguro e Confiável",
    description: "Empresa registrada no Banco Central com todas as certificações de segurança necessárias.",
    highlight: "Banco Central"
  },
  {
    icon: CreditCard,
    title: "Sem Consulta ao SPC/Serasa",
    description: "Seu nome sujo não é impedimento. O crédito é garantido pelo seu salário ou benefício.",
    highlight: "Nome limpo não obrigatório"
  },
  {
    icon: Calculator,
    title: "Simulação Gratuita",
    description: "Simule online sem compromisso e descubra o valor que você pode obter.",
    highlight: "Sem custos para simular"
  },
  {
    icon: CheckCircle,
    title: "Parcelas Fixas",
    description: "Parcelas descontadas direto do salário ou benefício, sem risco de atraso.",
    highlight: "Desconto em folha"
  },
  {
    icon: Users,
    title: "Atendimento Especializado",
    description: "Equipe de especialistas para tirar todas suas dúvidas e te ajudar na melhor escolha.",
    highlight: "Suporte personalizado"
  },
  {
    icon: Smartphone,
    title: "Processo 100% Digital",
    description: "Faça tudo pelo celular, sem sair de casa. Documentos enviados por foto.",
    highlight: "Sem sair de casa"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Por que escolher a{" "}
            <span className="bg-gradient-primary text-transparent bg-clip-text">
              VivaConsig?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Oferecemos as melhores condições do mercado com um processo simplificado 
            e atendimento personalizado para realizar seus objetivos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/20 p-6 hover:shadow-glow transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-primary transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {benefit.highlight}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-border/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl mb-4 text-foreground">
              Pronto para transformar sua vida financeira?
            </h3>
            <p className="text-muted-foreground mb-6">
              Descubra o valor que você pode obter e as condições especiais disponíveis para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-muted/20 rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
                  Até R$ 500.000
                </div>
                <div className="text-sm text-muted-foreground">Valor máximo</div>
              </div>
              <div className="bg-muted/20 rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-2xl font-bold bg-gradient-secondary text-transparent bg-clip-text">
                  96 parcelas
                </div>
                <div className="text-sm text-muted-foreground">Prazo máximo</div>
              </div>
              <div className="bg-muted/20 rounded-lg p-4 flex-1 max-w-xs">
                <div className="text-2xl font-bold text-accent">
                  1,89% a.m.
                </div>
                <div className="text-sm text-muted-foreground">Taxa mínima</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;