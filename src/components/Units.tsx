import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";

const units = [
  {
    name: "Camboriú",
    description: "Centro de Alta Performance",
    address: "R. Siqueira Campos, 397 - Centro, Camboriú",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxZN_PY3Pxf3kbqaxxFo3AUAdMWI66z83LxPM1MYtO5anuccfpmhzSj-OX_HIn1xOchaSxZAKNsxZOUM6kyiK9co9pZB_E4Wq0TJ8zZc1IYQYiRrgw8FrbC43RZljw8Y26Kgkq3Wl8g5gmzo5wUsh9UCR5qrw-emI70JrsnZTXtXxAB5rAeOnnVniJJtRFq89_0ZWXngj3llQEFhnVZW0o2kKOgpTl-v4LGlEfx0nzHiT4DPqsZYIixmfPLWlfHtsqA6ESAcI0i5ew",
    mapsUrl: "https://maps.google.com",
    whatsappUrl: "https://api.whatsapp.com/send?phone=5547991454347",
  },
  {
    name: "Balneário Camboriú",
    description: "Dojo Costeiro Premium",
    address: "R. 3130 - Centro, Baln. Camboriú",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOM4SVpU40VlkOmJ1AoRGEuiSBppRK5gm72ljgpYeltCiHJA5ZgYmdjHR-yiWSvid51atbevJHJ0uRwyndIop10p8N69_24n6K8VWMXhZMPCed5WnFvzFSVAqfmWiMUBMarRvvWdfQpNFH7ns8tZ_uhYTHWhJl6c5cqyGaRQlmXOZOHiG52UUia823tHoqR3Y7epkQzeUnjLnLlcxWpdUD9glo99kFaDRLam0yhqEkKPCZe90qWLR04hlX8cqsGfLXEBepCup_0Kyy",
    mapsUrl: "https://maps.google.com",
    whatsappUrl: "https://wa.me/5547999232164",
  },
];

export default function Units() {
  return (
    <section id="unidades" className="bg-surface py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="font-headline text-tertiary font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4 text-sm">
              <span className="h-[1px] w-10 bg-tertiary inline-block" />
              Onde Estamos
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
              NOSSAS UNIDADES
            </h2>
          </div>
          <p className="font-body text-outline max-w-xs text-sm leading-relaxed">
            Duas unidades estrategicamente localizadas no litoral catarinense para atender você.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {units.map((unit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="relative aspect-[16/10] bg-surface-container-high overflow-hidden group"
            >
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                src={unit.image}
                alt={unit.name}
                referrerPolicy="no-referrer"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <p className="font-body text-white/50 text-xs tracking-[0.3em] uppercase mb-2 font-semibold">
                      {unit.description}
                    </p>
                    <h4 className="font-headline text-2xl md:text-3xl font-bold text-white uppercase mb-1">
                      {unit.name}
                    </h4>
                    <p className="font-body text-white/40 text-xs flex items-center gap-2 mt-2">
                      <MapPin size={12} strokeWidth={1.5} />
                      {unit.address}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <a
                      href={unit.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 p-3 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                      aria-label="Ver no mapa"
                    >
                      <MapPin size={20} strokeWidth={1.5} />
                    </a>
                    <a
                      href={unit.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-tertiary text-white p-3 hover:bg-red-800 transition-colors flex items-center justify-center group/btn"
                      aria-label="Saiba mais"
                    >
                      <ArrowRight size={20} strokeWidth={1.5} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
