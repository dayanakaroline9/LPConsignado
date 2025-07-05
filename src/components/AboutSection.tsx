import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star
} from "lucide-react";

const stats = [
  {
    number: "50.000+",
    label: "Clientes Atendidos",
    icon: Users
  },
  {
    number: "R$ 2Bi+",
    label: "Liberados em Crédito",
    icon: TrendingUp
  },
  {
    number: "4.9★",
    label: "Avaliação dos Clientes",
    icon: Star
  },
  {
    number: "15+",
    label: "Anos de Experiência",
    icon: Award
  }
];

const certifications = [
  "Empresa registrada no Banco Central do Brasil",
  "Certificada ISO 27001 em Segurança da Informação",
  "Membro da ABBC - Associação Brasileira de Bancos",
  "Auditoria anual por empresas especializadas",
  "Compliance total com LGPD"
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Conheça a{" "}
            <span className="bg-gradient-primary text-transparent bg-clip-text">
              VivaConsig
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Somos uma empresa especializada em crédito consignado, comprometida em oferecer 
            as melhores soluções financeiras com transparência e segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Story */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" />
              <h3 className="font-bold text-2xl text-foreground">Nossa História</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fundada em 2009, a VivaConsig nasceu com o propósito de democratizar o acesso 
                ao crédito consignado no Brasil. Começamos como uma pequena empresa em São Paulo 
                e hoje somos referência nacional no setor.
              </p>
              
              <p>
                Nossa missão é oferecer crédito justo e acessível, sempre priorizando a 
                transparência e o atendimento humanizado. Acreditamos que todos merecem 
                realizar seus sonhos com segurança financeira.
              </p>
              
              <p>
                Com mais de 15 anos de experiência, já ajudamos milhares de famílias a 
                conquistarem seus objetivos, desde a reforma da casa até a realização 
                de sonhos maiores.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/20 p-6 text-center hover:shadow-glow transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/20 p-8 text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-foreground">Missão</h3>
            <p className="text-muted-foreground">
              Democratizar o acesso ao crédito consignado, oferecendo soluções 
              financeiras justas e transparentes para realizar sonhos.
            </p>
          </Card>

          <Card className="bg-gradient-card border-border/20 p-8 text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-foreground">Visão</h3>
            <p className="text-muted-foreground">
              Ser a empresa de crédito consignado mais confiável e inovadora 
              do Brasil, reconhecida pela excelência no atendimento.
            </p>
          </Card>

          <Card className="bg-gradient-card border-border/20 p-8 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-foreground">Valores</h3>
            <p className="text-muted-foreground">
              Transparência, ética, responsabilidade social e compromisso 
              com a satisfação e sucesso dos nossos clientes.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-hero border-border/20 p-12 max-w-4xl mx-auto">
            <h3 className="font-bold text-3xl mb-4 text-foreground">
              Faça parte da nossa história de sucesso
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Junte-se aos milhares de clientes que já transformaram suas vidas 
              com o crédito consignado da VivaConsig.
            </p>
            <a href="#contato">
            <Button variant="hero" size="xl">
              Simular Meu Crédito Agora
            </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;