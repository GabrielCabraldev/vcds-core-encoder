
import { Car, Lightbulb, Gauge, Monitor, Lamp, Layout, Radio, Settings } from "lucide-react";

const featureCategories = [
  {
    icon: <Car className="w-8 h-8 mb-4 text-primary" />,
    title: "Melhorias de Desempenho",
    features: [
      "Hill Hold Control (HHC) - Saída suave em ladeiras (TSI)",
      "Minimização do puxar para direita ao arrancar (TSI)",
      "Guardar memória do aquecimento do banco",
      "Habilitar botão controle de tração ASR (TSI)",
      "Ajuste na resposta do acelerador"
    ]
  },
  {
    icon: <Lightbulb className="w-8 h-8 mb-4 text-primary" />,
    title: "Iluminação e DRL",
    features: [
      "Habilitar DRL dos faróis LED",
      "Coming Home e Leaving Home",
      "Luz DRL forte na posição da lanterna",
      "Ativação automática do farol a 140km/h",
      "DRL ativo com seta no MK6 pacote premium"
    ]
  },
  {
    icon: <Settings className="w-8 h-8 mb-4 text-primary" />,
    title: "Conforto e Conveniência",
    features: [
      "Rebatimento dos retrovisores na chave",
      "Fechamento dos vidros pelo sensor de chuva",
      "Abertura do teto solar na chave",
      "Espelhos em Tilt Down (TSI e CL)",
      "Trancar o carro ligado (sistema kessy)"
    ]
  },
  {
    icon: <Monitor className="w-8 h-8 mb-4 text-primary" />,
    title: "Display e Indicadores",
    features: [
      "Indicator Celebration - Varredura dos ponteiros",
      "Pressão de pneus pelo sensor ABS (TSI)",
      "Mostrar velocidade digital no painel",
      "Câmera de ré OEM no rádio original",
      "Personalização dos avisos do painel"
    ]
  },
  {
    icon: <Radio className="w-8 h-8 mb-4 text-primary" />,
    title: "Personalização de Alertas",
    features: [
      "Personalização do bip do alarme",
      "Seta conforto de 3 até 5 piscas",
      "Desativação do aviso sonoro do cinto",
      "Pisca de alerta por frenagem de emergência",
      "Configuração dos avisos de revisão"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
