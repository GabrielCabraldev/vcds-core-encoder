import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Entre em Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <p className="text-gray-600">(11) 97411-8938</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-lg">E-mail</h3>
                <p className="text-gray-600">vcdscore@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold text-lg">Endereço</h3>
                <p className="text-gray-600">Cotia, SP</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};