import { MessageCircle, Phone, Instagram } from "lucide-react";
import { handleWhatsAppClick, handleCallClick } from "@/lib/tracking";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-3">
            Não espere a situação se agravar.
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            A presença de um advogado nas primeiras horas pode definir o futuro do processo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-whatsapp text-white font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-green-900/20 border-2 border-white/10"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR COM ADVOGADO AGORA
          </button>
          <button
            onClick={handleCallClick}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg glass text-white font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/10"
          >
            <Phone className="w-5 h-5" />
            LIGAR AGORA
          </button>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm mb-2">
            Fábio Péricles Advogado & Associados | OAB/SP [Número da OAB] <br className="md:hidden" /> Política de Privacidade | Termos de Uso
          </p>
          <a
            href="https://instagram.com/drfabiopericles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/60 text-sm hover:text-gold transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @drfabiopericles
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
