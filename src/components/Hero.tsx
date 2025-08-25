import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck } from "lucide-react";
import heroImage from "@/assets/hero-stationery.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-primary leading-tight">
              MoriPaper
            </h1>
            <div className="h-1 w-24 bg-gradient-hero rounded-full"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Importação e distribuição de materiais de escritório e papelaria com qualidade e confiança
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Importação</h3>
                <p className="text-sm text-muted-foreground">Produtos internacionais</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Distribuição</h3>
                <p className="text-sm text-muted-foreground">Entrega confiável</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-brand-primary hover:bg-brand-accent text-primary-foreground shadow-brand"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-3"></div>
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-brand">
            <img 
              src={heroImage} 
              alt="Materiais de escritório e papelaria da MoriPaper"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;