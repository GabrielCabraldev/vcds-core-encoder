
import { Car, Gauge, Camera, Sun, Monitor, Key, Settings } from "lucide-react";

const featureCategories = [
  {
    icon: <Car className="w-10 h-10 mb-4 text-primary" />,
    title: "Funções de Conforto e Iluminação",
    features: [
      "Luz de neblina como DRL (rodagem diurna)",
      "Travamento e destravamento sonoro (bip ao travar/destravar)",
      "Fechamento automático dos vidros ao travar",
      "Ativação do 'Comfort Blinker' (pisca 3 vezes com um toque)",
      "Desbloqueio do controle remoto para todos os vidros",
      "Ativar 'Coming Home' e 'Leaving Home'",
      "Desativação do aviso sonoro do cinto de segurança",
      "Desbloqueio do retrovisor rebatível automaticamente"
    ]
  },
  {
    icon: <Gauge className="w-10 h-10 mb-4 text-primary" />,
    title: "Desempenho e Motor",
    features: [
      "Desativação do sistema Start-Stop",
      "Ativação do indicador de marcha no painel",
      "Mudança no tempo de resposta do acelerador",
      "Modo 'escapamento esportivo'",
      "Ajuste da sensibilidade do ESP"
    ]
  },
  {
    icon: <Camera className="w-10 h-10 mb-4 text-primary" />,
    title: "Sistema de Multimídia e Câmeras",
    features: [
      "Desbloqueio do vídeo em movimento",
      "Ativar a câmera de ré",
      "Ativar a exibição de sensor de estacionamento gráfico",
      "Ativar a função de espelhamento de mídia"
    ]
  },
  {
    icon: <Sun className="w-10 h-10 mb-4 text-primary" />,
    title: "Iluminação Externa e Interna",
    features: [
      "Ativar os piscas traseiros como luz de freio adicional",
      "Ajuste do brilho da iluminação diurna (DRL)",
      "Habilitar DRL nas lanternas traseiras",
      "Piscas dinâmicos",
      "Personalização do tempo das setas de alerta"
    ]
  },
  {
    icon: <Monitor className="w-10 h-10 mb-4 text-primary" />,
    title: "Painel e Indicadores",
    features: [
      "Ativar a temperatura do óleo no painel",
      "Mostrar velocidade digital no painel",
      "Ativar 'Lap Timer'",
      "Mostrar o consumo instantâneo em L/100km ou km/L",
      "Ativar o indicador de troca de marcha no painel"
    ]
  },
  {
    icon: <Key className="w-10 h-10 mb-4 text-primary" />,
    title: "Funções do Controle Remoto",
    features: [
      "Abrir e fechar os vidros pelo controle remoto",
      "Desbloquear o porta-malas ao destravar o carro",
      "Ativar travamento automático ao passar de 20 km/h",
      "Ativar destravamento automático ao remover a chave"
    ]
  },
  {
    icon: <Settings className="w-10 h-10 mb-4 text-primary" />,
    title: "Ajustes Avançados",
    features: [
      "Codificação de novos módulos",
      "Atualização de software da ECU",
      "Ajuste fino na injeção para desempenho/economia",
      "Desativação de sensores desnecessários em retrofit",
      "Modificação do modo de funcionamento do câmbio DSG"
    ]
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Funcionalidades Disponíveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
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
                    <span className="text-primary mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-600 text-sm">{feature}</span>
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
