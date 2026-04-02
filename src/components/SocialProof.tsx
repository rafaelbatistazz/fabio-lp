import { Star, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    text: "Meu irmão foi preso em flagrante e o Dr. Fábio conseguiu a liberdade provisória em menos de 24h. Atendimento impecável, mesmo de madrugada.",
    rating: 5,
  },
  {
    name: "Patrícia S.",
    text: "Profissional extremamente claro e honesto sobre o caso. Não prometeu o que não poderia cumprir e reverteu a situação com muita competência.",
    rating: 5,
  },
  {
    name: "Ricardo L.",
    text: "Fui intimado e estava desesperado. O escritório me orientou, acompanhou na delegacia e evitou um problema muito maior. Recomendo demais.",
    rating: 5,
  },
  {
    name: "Fernanda A.",
    text: "Atendimento humanizado de verdade. Em um momento tão difícil, ter um advogado que explica tudo com calma e competência faz toda a diferença.",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 md:py-24 bg-primary" id="depoimentos">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground mb-3">
            O que dizem nossos clientes
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Mais de 300 famílias atendidas com respeito e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10">
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="text-primary-foreground font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/F%C3%A1bio+P%C3%A9ricles+Advogado+%26+Associados/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-gold-foreground font-bold hover:opacity-90 transition-opacity"
          >
            VEJA TODAS AS 388 AVALIAÇÕES NO GOOGLE
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
