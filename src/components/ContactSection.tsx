import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Calculator, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    salary: "",
    employmentType: "",
    loanAmount: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formatar mensagem com todas as informações do cliente
      const message = `*Nova Simulação de Crédito Consignado - VivaConsig*

📋 *Dados do Cliente:*
• Nome: ${formData.name}
• E-mail: ${formData.email}
• WhatsApp: ${formData.phone}
• Renda Mensal: ${formData.salary}
• Tipo de Vínculo: ${formData.employmentType}
• Valor Desejado: ${formData.loanAmount || 'Não informado'}

⏰ Solicitação enviada em: ${new Date().toLocaleString('pt-BR')}

🎯 *Próximos passos:*
Entrar em contato para análise e simulação personalizada.`;

      // Limpar o número de telefone (remover caracteres especiais)
      const cleanPhone = formData.phone.replace(/\D/g, '');
      const phoneWithCountryCode = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

      // Gerar ID único para o externalKey
      const externalKey = `vivaconsig_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const payload = {
        body: message,
        number: phoneWithCountryCode,
        externalKey: externalKey,
        note: {
          body: `Simulação VivaConsig - Cliente: ${formData.name} | E-mail: ${formData.email} | Renda: ${formData.salary} | Vínculo: ${formData.employmentType}`,
          mediaUrl: ""
        }
      };

      const response = await fetch('https://suporteapi.clickmassa.com.br/v1/api/external/b62f4fb4-bb66-4f74-a238-21408fca2fa0/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6MjMsInByb2ZpbGUiOiJhZG1pbiIsInNlc3Npb25JZCI6MTkzLCJjaGFubmVsVHlwZSI6IndoYXRzYXBwIiwiaWF0IjoxNzUxNjc0MDkzLCJleHAiOjE4MTQ3NDYwOTN9.rMO7W-Rgkz_E7Xwcb5sL6WIlSm8KKcAxykCX9HUFxnU', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast({
          title: "Simulação enviada com sucesso!",
          description: "Nosso especialista entrará em contato em até 30 minutos.",
        });
        
        setFormData({
          name: "",
          phone: "",
          email: "",
          salary: "",
          employmentType: "",
          loanAmount: ""
        });
      } else {
        throw new Error('Erro ao enviar simulação');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar simulação",
        description: "Tente novamente ou entre em contato conosco.",
        variant: "destructive"
      });
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            <span className="bg-gradient-primary text-transparent bg-clip-text">
              Simule
            </span>{" "}
            seu Crédito
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Preencha o formulário abaixo e descubra o valor que você pode obter 
            com as melhores condições do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-xl text-foreground">Simulação Gratuita</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">WhatsApp</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="salary" className="text-foreground">Renda Mensal</Label>
                    <Input
                      id="salary"
                      value={formData.salary}
                      onChange={(e) => handleInputChange("salary", e.target.value)}
                      placeholder="R$ 0,00"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="employmentType" className="text-foreground">Tipo de Vínculo</Label>
                    <Select onValueChange={(value) => handleInputChange("employmentType", value)}>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                        <SelectValue placeholder="Selecione seu vínculo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clt">CLT</SelectItem>
                        <SelectItem value="servidor">Servidor Público</SelectItem>
                        <SelectItem value="aposentado">Aposentado INSS</SelectItem>
                        <SelectItem value="pensionista">Pensionista INSS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="loanAmount" className="text-foreground">Valor Desejado</Label>
                  <Input
                    id="loanAmount"
                    value={formData.loanAmount}
                    onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                    placeholder="R$ 0,00"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Simular Agora - Grátis"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa política de privacidade e 
                  autoriza o contato via WhatsApp, e-mail e telefone.
                </p>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="bg-gradient-card border-border/20 p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-foreground">(11) 3333-3333</div>
                    <div className="text-sm text-muted-foreground">Ligação gratuita</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="font-medium text-foreground">(11) 99999-9999</div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <div className="font-medium text-foreground">contato@vivaconsig.com.br</div>
                    <div className="text-sm text-muted-foreground">E-mail</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <a href="https://api.whatsapp.com/send/?phone=5585994172840&text=Ol%C3%A1,%20quero%20fazer%20uma%20simula%C3%A7%C3%A3o%20de%20cr%C3%A9dito."
                  target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    
                    WhatsApp
                    
                  </Button>
                </a>
              </div>
            </Card>

            {/* Hours */}
            <Card className="bg-gradient-card border-border/20 p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <span className="text-foreground">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="text-foreground">8h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="text-foreground">Fechado</span>
                </div>
              </div>
            </Card>

            {/* Address */}
            <Card className="bg-gradient-card border-border/20 p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                Endereço
              </h3>
              <div className="text-sm text-muted-foreground">
                <p>Av. Paulista, 1234 - Conjunto 567</p>
                <p>Bela Vista, São Paulo - SP</p>
                <p>CEP: 01310-100</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;