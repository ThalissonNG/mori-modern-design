import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os produtos da MoriPaper.", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:contato@moripaper.com.br", "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      action: () => window.open("tel:+5511999999999", "_blank")
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@moripaper.com.br",
      action: handleEmailClick
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      action: null
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 8h às 18h",
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-gradient-hero rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você. Entre em contato conosco e 
            descubra como podemos ajudar com suas necessidades de materiais de escritório.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-6">
                Fale Conosco
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className={`bg-white border-0 shadow-soft transition-all duration-300 ${
                      info.action ? 'hover:shadow-brand hover:-translate-y-1 cursor-pointer' : ''
                    }`}
                    onClick={info.action || undefined}
                  >
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-primary mb-1">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-subtle rounded-2xl p-8 space-y-4">
              <h4 className="text-xl font-bold text-brand-primary">
                Atendimento Especializado
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe está preparada para oferecer soluções personalizadas 
                para empresas de todos os portes. Entre em contato e receba um 
                atendimento diferenciado.
              </p>
            </div>
          </div>

          {/* Call to Action Principal */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-brand overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-hero p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Converse pelo WhatsApp
                  </h3>
                  <p className="text-white/90 mb-8 leading-relaxed">
                    A forma mais rápida e prática de falar conosco. 
                    Tire suas dúvidas e solicite orçamentos diretamente pelo WhatsApp.
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-white text-brand-primary hover:bg-white/90 shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Abrir WhatsApp
                  </Button>
                </div>
                
                <div className="p-8 space-y-6">
                  <h4 className="text-xl font-bold text-brand-primary">
                    Como podemos ajudar?
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Orçamentos personalizados</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Consulta sobre produtos específicos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Informações sobre prazos de entrega</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                      <span className="text-muted-foreground">Suporte pós-venda</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;