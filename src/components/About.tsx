import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Alcance Global",
      description: "Importamos produtos de qualidade de fornecedores internacionais confiáveis"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Todos os produtos passam por rigoroso controle de qualidade"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Equipe especializada para atender suas necessidades específicas"
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de experiência no mercado de materiais de escritório"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary">
            Quem Somos
          </h2>
          <div className="h-1 w-24 bg-gradient-hero rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A MoriPaper é especializada na importação e distribuição de materiais de escritório 
            e papelaria, oferecendo produtos de alta qualidade para empresas e profissionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-soft hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-primary">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fornecer materiais de escritório e papelaria de excelente qualidade, 
                com preços competitivos e atendimento diferenciado, contribuindo para 
                o sucesso e produtividade de nossos clientes.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-primary">
                Nossos Valores
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Qualidade em todos os produtos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Pontualidade nas entregas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span>Transparência nas negociações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;