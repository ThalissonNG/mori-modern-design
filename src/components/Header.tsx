import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
          <h1 className="text-2xl font-bold text-brand-primary">MoriPaper</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-foreground hover:text-brand-primary transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-foreground hover:text-brand-primary transition-colors">
            Serviços
          </a>
          <a href="#contato" className="text-foreground hover:text-brand-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button 
          onClick={handleWhatsAppClick}
          className="bg-brand-primary hover:bg-brand-accent text-primary-foreground shadow-brand"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </header>
  );
};

export default Header;