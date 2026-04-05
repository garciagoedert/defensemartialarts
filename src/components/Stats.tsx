import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Anos de História" },
  { value: 1200, suffix: "+", label: "Alunos Formados" },
  { value: 2, suffix: "", label: "Unidades" },
  { value: 8, suffix: "+", label: "Modalidades" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1600;
          const step = target / (duration / 16);
          const interval = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(Math.floor(start));
            if (start >= target) clearInterval(interval);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-primary py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center text-center py-6 md:py-0 md:px-12 first:pt-0 md:first:pt-0"
          >
            <p className="font-headline text-4xl md:text-6xl font-black text-white mb-3">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/40 font-semibold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
