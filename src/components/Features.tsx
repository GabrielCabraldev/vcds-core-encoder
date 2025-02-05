import { Car, Lightbulb, Gauge, Monitor, Lamp, Layout, Radio, Settings } from "lucide-react";

const featureCategories = [
  {
    icon: <Lightbulb className="w-8 h-8 mb-4 text-primary" />,
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
    icon: <Gauge className="w-8 h-8 mb-4 text-primary" />,
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
    icon: <Monitor className="w-8 h-8 mb-4 text-primary" />,
    title: "Sistema de Multimídia e Câmeras",
    features: [
      "Desbloqueio do vídeo em movimento",
      "Ativar a câmera de ré",
      "Ativar a exibição de sensor de estacionamento gráfico",
      "Ativar a função de espelhamento de mídia"
    ]
  },
  {
    icon: <Lamp className="w-8 h-8 mb-4 text-primary" />,
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
    icon: <Layout className="w-8 h-8 mb-4 text-primary" />,
    title: "Painel e Indicadores",
    features: [
      "Ativar a temperatura do óleo no painel",
      "Mostrar velocidade digital no painel",
      "Ativar 'Lap Timer'",
      "Mostrar o consumo instantâneo",
      "Ativar o indicador de troca de marcha"
    ]
  },
  {
    icon: <Radio className="w-8 h-8 mb-4 text-primary" />,
    title: "Funções do Controle Remoto",
    features: [
      "Abrir e fechar os vidros pelo controle remoto",
      "Desbloquear o porta-malas ao destravar",
      "Ativar travamento automático ao passar de 20 km/h",
      "Ativar destravamento automático ao remover a chave"
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