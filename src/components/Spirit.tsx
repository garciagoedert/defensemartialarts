import { motion } from "motion/react";

export default function Spirit() {
  return (
    <section id="sobre" className="bg-surface py-32 md:py-48 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <p className="font-headline text-tertiary font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-tertiary inline-block" />
            Nossa Filosofia
          </p>

          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] overflow-hidden mt-8 hidden md:block"
          >
            <img
              className="w-full h-full object-cover grayscale"
              src="/monolito.jpg"
              alt="Treino de artes marciais"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-6 left-6 font-body text-white/70 text-xs tracking-[0.3em] uppercase">
              Transformação pelo movimento
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full md:w-1/2 pt-2 md:pt-28"
        >
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light mb-8">
            Não ensinamos a lutar; forjamos caráter. Nossa filosofia é enraizada na precisão do golpe e no silêncio entre os movimentos. Na Defense, a disciplina é a arquitetura da liberdade.
          </p>
          <p className="font-body text-lg text-outline leading-relaxed mb-10">
            Cada sessão é um estudo em disciplina de alto contraste, onde os limites físicos são apenas pontos de partida para a transformação mental. Abraçamos o espaço entre os movimentos para encontrar foco absoluto em um mundo agitado.
          </p>

          <div className="border-t border-outline-variant/20 pt-10 flex flex-col gap-6">
            {[
              { label: "Foco e Concentração", desc: "Mente afiada como o golpe perfeito." },
              { label: "Força e Condicionamento", desc: "Corpo preparado para qualquer desafio." },
              { label: "Respeito e Comunidade", desc: "Valores que transcendem o tatame." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="w-5 h-5 mt-1 border border-tertiary flex-shrink-0 flex items-center justify-center">
                  <span className="w-2 h-2 bg-tertiary inline-block" />
                </span>
                <div>
                  <p className="font-headline font-bold text-on-background text-sm tracking-wide uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-body text-sm text-outline">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
