import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          className="w-full h-full object-cover"
          src="/fundo.jpg"
          alt="Arte marcial em cenário de alto contraste"
        />
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-body text-white/50 uppercase text-xs tracking-[0.5em] mb-6 font-semibold"
        >
          Camboriú · Balneário Camboriú
        </motion.p>

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          className="font-headline font-black text-5xl md:text-[9rem] text-white tracking-tighter leading-none mb-6"
        >
          DEFENSE<br />
          <span className="text-white/30 font-light tracking-tight">
            MARTIAL ARTS
          </span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="h-[1px] w-24 bg-white/40 mx-auto mb-8 origin-left"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="font-body text-white/60 text-sm md:text-base tracking-widest uppercase mb-12"
        >
          Disciplina. Poder. Transformação.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5547999232164"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-highest transition-colors inline-block"
          >
            Matricule-se
          </a>
          <a
            href="https://wa.me/5547999232164"
            target="_blank"
            rel="noreferrer"
            className="border border-white/40 text-white px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:border-white transition-colors inline-block"
          >
            Aula Experimental
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-body text-white/30">
          Rolar
        </span>
        <ChevronDown size={36} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
