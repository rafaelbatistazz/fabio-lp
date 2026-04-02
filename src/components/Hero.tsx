import { MessageCircle, Phone, Star, Shield, Scale } from "lucide-react";
import { handleWhatsAppClick, handleCallClick } from "@/lib/tracking";
import { motion } from "framer-motion";
import { useCity } from "@/hooks/useCity";

const Hero = () => {
  const city = useCity("Santo André");

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background pt-20 lg:pt-0">

      {/* Liquid Background Blobs - Gold/Silver/Grey */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob bg-primary/10 w-[600px] h-[600px] top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="blob bg-white/5 w-[500px] h-[500px] bottom-0 right-0 translate-x-1/3 translate-y-1/3 animation-delay-2000" />
        <div className="blob bg-zinc-800/20 w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium tracking-wide uppercase text-foreground">Plantão Criminal 24h</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.2]"
          >
            Precisando de um <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary text-glow">
              Advogado Criminalista em {city} e Região?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Defesa técnica, combativa e sigilosa. Atuação imediata em Flagrantes, Audiências de Custódia e Inquéritos Policiais.
            <span className="block mt-2 text-white/90 font-medium">Proteja a liberdade e seus direitos agora.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={handleWhatsAppClick}
                className="group relative px-8 py-4 rounded-xl bg-whatsapp text-white font-bold text-lg hover:opacity-90 transition-all duration-300 overflow-hidden shadow-lg shadow-green-900/20 flex-1 sm:flex-none"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Especialista
                </div>
              </button>
              <button
                onClick={handleCallClick}
                className="px-8 py-4 rounded-xl glass text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 border border-white/10 flex-1 sm:flex-none"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>Excelência comprovada: <strong>Mais de 388 avaliações positivas no Google.</strong> Escritório referência no ABC Paulista.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default Hero;
