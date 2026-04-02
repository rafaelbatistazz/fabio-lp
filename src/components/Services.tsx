import { Shield, FileText, Scale, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Shield,
    title: "Prisão em Flagrante e Audiência de Custódia",
    description:
      "Atendimento urgente em delegacias e fóruns. Buscamos a liberdade provisória e o relaxamento da prisão ilegal nas primeiras horas, que são cruciais.",
  },
  {
    icon: FileText,
    title: "Inquéritos Policiais e Intimações",
    description:
      "Foi intimado para depor? Não compareça sem defesa técnica. Acompanhamos oitivas e inquéritos para evitar autoincriminação e garantir o devido processo legal.",
  },
  {
    icon: Scale,
    title: "Defesa em Processo Criminal",
    description:
      "Atuação em todas as instâncias judiciais. Habeas Corpus, Pedidos de Liberdade, Defesa Preliminar, Alegações Finais e Recursos.",
  },
  {
    icon: Gavel,
    title: "Tribunal do Júri",
    description:
      "Defesa plena e estratégica em crimes contra a vida. Preparação técnica para o plenário.",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="servicos">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Atuação Especializada e Estratégica
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group border-l-4 border-l-transparent hover:border-l-primary transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

