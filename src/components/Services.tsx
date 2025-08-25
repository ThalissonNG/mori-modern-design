import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Pen, 
  Calculator, 
  Folder, 
  Scissors, 
  PenTool,
  Package,
  Truck,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const products = [
    {
      icon: FileText,
      title: "Papéis e Formulários",
      description: "Papéis A4, formulários, blocos e cadernos de alta qualidade"
    },
    {
      icon: Pen,
      title: "Material de Escrita",
      description: "Canetas, lápis, marcadores e materiais para escrita"
    },
    {
      icon: Calculator,
      title: "Material de Escritório",
      description: "Calculadoras, grampeadores, furadores e organizadores"
    },
    {
      icon: Folder,
      title: "Arquivo e Organização",
      description: "Pastas, arquivos, etiquetas e sistemas de organização"
    },
    {
      icon: Scissors,
      title: "Material Escolar",
      description: "Tesouras, colas, fitas adesivas e materiais educativos"
    },
    {
      icon: PenTool,
      title: "Design e Arte",
      description: "Materiais para desenho, design e apresentações"
    }
  ];

  const services = [
    {
      icon: Package,
      title: "Importação Especializada",
      description: "Importamos produtos de alta qualidade dos melhores fornecedores internacionais, garantindo variedade e excelência."
    },
    {
      icon: Truck,
      title: "Distribuição Eficiente",
      description: "Sistema de distribuição ágil e confiável, com entregas pontuais em todo o território nacional."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <section id="servicos" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary">
            Nossos Serviços
          </h2>
          <div className="h-1 w-24 bg-gradient-hero rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de produtos e serviços especializados 
            para atender todas as suas necessidades de escritório e papelaria.
          </p>
        </div>

        {/* Serviços Principais */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-subtle border-0 shadow-brand hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Produtos */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-primary mb-4">
              Categorias de Produtos
            </h3>
            <p className="text-muted-foreground text-lg">
              Trabalhamos com as principais marcas e oferecemos produtos para todas as necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <product.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-brand-primary">
                    {product.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Precisa de um Orçamento?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e receba uma proposta personalizada 
              para suas necessidades de materiais de escritório e papelaria.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90 shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;