import { Settings, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: <Settings className="w-12 h-12 mb-4 text-primary" />,
    title: "Codificação VCDS",
    description: "Personalização completa das funcionalidades do seu veículo através do VCDS"
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-primary" />,
    title: "Diagnóstico Especializado",
    description: "Análise detalhada dos sistemas eletrônicos do seu Audi ou Volkswagen"
  },
  {
    icon: <Zap className="w-12 h-12 mb-4 text-primary" />,
    title: "Ativação de Recursos",
    description: "Desbloqueio e ativação de funcionalidades ocultas do seu veículo"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};