import { MapPin } from "lucide-react";
import mapaImg from "@/assets/mapa-escritorio.png";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Rua+Giovanni+Battista+Pirelli,+271+-+Vila+Homero+Thon,+Santo+Andr%C3%A9+-+SP,+09111-340";

const Location = () => {
  return (
    <section className="py-16 md:py-24 bg-muted" id="localizacao">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          Atendimento Presencial no Coração de Santo André
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={mapaImg}
              alt="Localização do escritório Fábio Péricles em Santo André"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estamos localizados em ponto estratégico do ABC, com fácil acesso e
              estrutura para receber você e sua família com total discrição.
            </p>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="text-foreground font-semibold">
                  Rua Giovanni Battista Pirelli, 271 - Cj 1218
                </p>
                <p className="text-muted-foreground text-sm">
                  Vila Homero Thon, Santo André - SP, 09111-340
                </p>
              </div>
            </div>

            📍 Localizado no Century Plaza Business
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
