import { Instagram, Award, Lock } from "lucide-react";


import drFabioImg from "@/assets/dr-fabio-new.png";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="sobre">
      <div className="container">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 border-primary/20 bg-primary/5">
              <img
                src={drFabioImg}
                alt="Dr. Fábio Péricles"
                width={634}
                height={792}
                className="w-full h-auto rounded-xl object-cover shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6">
              Sobre o Escritório Fábio Péricles Advogado & Associados
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Liderado pelo Dr. Fábio Péricles, nosso escritório é pautado pela ética,
              combatividade e atendimento humanizado. Entendemos que enfrentar um problema
              criminal é um momento delicado para o cliente e sua família.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nossa missão é garantir a melhor defesa técnica possível, assegurando que
              nenhum direito seja violado pelo Estado. Com sede própria em Santo André,
              atuamos com rigor técnico e transparência total sobre as possibilidades de cada caso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Award className="w-5 h-5 text-gold" />
                Advocacia Criminal Exclusiva e Artesanal
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Lock className="w-5 h-5 text-gold" />
                Atendimento Particular e Sigiloso
              </div>
            </div>

            <a
              href="https://instagram.com/drfabiopericles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @drfabiopericles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
