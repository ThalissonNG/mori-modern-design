import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <footer className="bg-brand-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              <h3 className="text-2xl font-bold">MoriPaper</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Importação e distribuição de materiais de escritório e papelaria 
              com qualidade e confiança para o seu negócio.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5" />
                <span>contato@moripaper.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 MoriPaper. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;