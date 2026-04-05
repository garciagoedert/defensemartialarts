import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const modalidades = [
  {
    tag: "Modalidade 01",
    title: "TAEKWONDO",
    desc: "Precisão em alta velocidade. Domine a arte do chute por meio de formas tradicionais e técnicas competitivas modernas.",
    cta: "Explorar Modalidade",
    imgSrc: "/quadrado.jpg",
    imgAlt: "Taekwondo",
    dark: true,
    span: "md:col-span-12",
    size: "min-h-[620px]",
    textAlign: "justify-end",
  },
];

export default function Classes() {
  return (
    <section id="modalidades" className="bg-surface-container-low py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-headline text-tertiary font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4 text-sm">
            <span className="h-[1px] w-10 bg-tertiary inline-block" />
            Modalidades
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-background">
            ESCOLHA SUA<br />DISCIPLINA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {modalidades.map((m) => (
            <motion.div
              key={m.title}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`${m.span} ${m.dark ? "bg-black text-white" : "bg-white text-black border border-outline-variant/20"} ${m.size} relative group overflow-hidden flex flex-col ${m.textAlign}`}
            >
              {/* Background image */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  m.dark
                    ? "opacity-40 group-hover:opacity-60"
                    : "opacity-10 group-hover:opacity-25"
                }`}
              >
                <img
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                  src={m.imgSrc}
                  alt={m.imgAlt}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient */}
              {m.dark && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              )}

              {/* Content */}
              <div className="relative z-10 p-10 md:p-16">
                <span
                  className={`font-body text-xs tracking-[0.4em] uppercase mb-4 block font-bold ${
                    m.dark ? "text-white/40" : "text-tertiary"
                  }`}
                >
                  {m.tag}
                </span>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-5 tracking-tighter">
                  {m.title}
                </h3>
                <p
                  className={`font-body max-w-md mb-8 font-light leading-relaxed ${
                    m.dark ? "text-surface-variant" : "text-on-surface-variant"
                  }`}
                >
                  {m.desc}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-3 pb-2 border-b hover:gap-6 transition-all duration-300 font-headline uppercase text-sm tracking-widest font-bold ${
                    m.dark
                      ? "text-white border-white/30"
                      : "text-black border-black/30"
                  }`}
                >
                  {m.cta} <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
