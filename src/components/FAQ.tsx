import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O atendimento é 24 horas?",
    answer:
      "Sim. O direito penal não espera. Dispomos de plantão telefônico para casos de urgência, como prisões em flagrante e audiências de custódia.",
  },
  {
    question: "Vocês atendem por convênio ou Defensoria?",
    answer:
      "Não. Somos um escritório de advocacia privada. Nosso atendimento é particular, focado na dedicação exclusiva ao seu caso.",
  },
  {
    question: "Fui intimado por telefone/carta, o que faço?",
    answer:
      "Não preste depoimento sem orientação. Entre em contato imediatamente para que um advogado analise o caso e lhe acompanhe à delegacia.",
  },
  {
    question: "Vocês atendem em quais cidades?",
    answer:
      "Nossa sede é em Santo André, mas atuamos em toda a Grande São Paulo, com foco no ABC (São Bernardo, São Caetano, Diadema, Mauá).",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background" id="faq">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
