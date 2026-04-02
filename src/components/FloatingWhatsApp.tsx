import { MessageCircle } from "lucide-react";
import { handleWhatsAppClick } from "@/lib/tracking";

const FloatingWhatsApp = () => {
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-2 border-white animate-bounce-slow"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
};

export default FloatingWhatsApp;
