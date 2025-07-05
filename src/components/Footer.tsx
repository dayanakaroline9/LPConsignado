import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Lock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-primary text-transparent bg-clip-text font-inter font-bold text-3xl mb-4">
                VivaConsig
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Especialistas em crédito consignado com mais de 15 anos de experiência. 
                Oferecemos as melhores condições do mercado com total segurança e transparência.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">(11) 3333-3333</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">contato@vivaconsig.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Av. Paulista, 1234 - São Paulo/SP</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Crédito Consignado CLT
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Consignado INSS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Servidor Público
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cartão Consignado
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Refinanciamento
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Portabilidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Security */}
        <div className="py-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>

            {/* Security Badges */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-4 mb-2">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">Banco Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">SSL 256 bits</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Site protegido por certificado SSL
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/20">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              © 2024 VivaConsig - Todos os direitos reservados. CNPJ: 12.345.678/0001-90
            </p>
            <p className="text-xs">
              VivaConsig Correspondente Bancário Ltda. | Empresa autorizada pelo Banco Central do Brasil | 
              As operações de crédito estão sujeitas à análise e aprovação de crédito.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;