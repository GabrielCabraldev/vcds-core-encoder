
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

emailjs.init("N5r2pOzwjQDvQD8ns");

const contactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const defaultMessage = `Olá! Gostaria de agendar uma codificação VCDS para meu veículo. 
Por favor, me informe sobre disponibilidade e valores.
Preços a partir de R$ 150,00.`;

export const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      message: defaultMessage
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        "service_lkf7f91",
        "template_hhaxfve",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "vcdscore@gmail.com",
        },
        "N5r2pOzwjQDvQD8ns"
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      reset();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
      });
    }
  };

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
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <p className="text-primary font-semibold">Preços a partir de R$ 150,00</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nome"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                rows={4}
                {...register("message")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
