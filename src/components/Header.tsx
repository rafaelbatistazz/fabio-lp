
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { handleWhatsAppClick, handleCallClick } from "@/lib/tracking";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-4 md:mx-auto max-w-7xl rounded-2xl border border-transparent",
        scrolled ? "glass bg-background/60 border-white/10 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <span className="text-foreground font-bold text-xl md:text-2xl tracking-tight">
          Fábio Péricles <span className="text-primary">Criminalista</span>
        </span>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleCallClick}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-transparent border border-white/20 text-foreground font-semibold hover:bg-white/10 transition-all"
          >
            <Phone className="w-4 h-4" />
            Ligar Agora
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-whatsapp text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Plantão 24h
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 glass rounded-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-200 md:hidden bg-card/95 border border-white/10">
            <button
              onClick={handleCallClick}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 text-foreground border border-white/10"
            >
              <Phone className="w-4 h-4" />
              Ligar Agora
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-whatsapp text-white shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
