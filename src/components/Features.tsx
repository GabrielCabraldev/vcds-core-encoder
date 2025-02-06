
import { Car, Umbrella, ArrowUp } from "lucide-react";

const featureCategories = [
  {
    icon: <Car className="w-8 h-8 mb-4 text-primary" />,
    title: "Conforto e Conveniência",
    features: [
      "Rebatimento dos retrovisores na chave",
      "Fechamento dos vidros pelo sensor de chuva"
    ]
  },
  {
    icon: <ArrowUp className="w-8 h-8 mb-4 text-primary" />,
    title: "Melhorias de Desempenho",
    features: [
      "Hill Hold Control (HHC) - Saída suave em ladeiras (TSI)"
    ]
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Funcionalidades Disponíveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featureCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                {category.icon}
                <h3 className="text-xl font-semibold mb-6 text-center text-secondary">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
