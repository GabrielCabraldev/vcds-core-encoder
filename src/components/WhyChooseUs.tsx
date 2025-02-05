import { Check } from "lucide-react";

const reasons = [
  "Especialistas certificados em sistemas VCDS",
  "Atendimento personalizado",
  "Garantia de satisfação",
  "Equipamentos de última geração",
  "Experiência com diversas marcas do grupo VAG"
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Por Que Nos Escolher
        </h2>
        <div className="max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg"
            >
              <Check className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
              <p className="text-lg text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};