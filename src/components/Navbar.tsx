import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Unidades", href: "#unidades" },
  { label: "Sobre Nós", href: "#sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 transition-all duration-500 ${
          scrolled ? "glass shadow-sm py-4" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className={`text-xl font-black tracking-tighter font-headline transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            DEFENSE
          </span>
          <span
            className={`text-[9px] tracking-[0.35em] uppercase font-body font-semibold transition-colors duration-300 ${
              scrolled ? "text-tertiary" : "text-white/60"
            }`}
          >
            Martial Arts
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-headline uppercase tracking-widest text-xs font-bold transition-colors duration-300 hover:text-tertiary ${
                scrolled ? "text-black" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5547999232164"
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex px-8 py-3 font-headline uppercase tracking-widest text-xs font-bold transition-all active:scale-95 ${
              scrolled
                ? "bg-primary text-on-primary hover:bg-primary-fixed"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 w-full h-screen z-40 bg-black flex flex-col justify-center items-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="font-headline text-4xl font-black text-white uppercase tracking-tight hover:text-tertiary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/5547999232164"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-tertiary text-white px-12 py-4 font-headline uppercase tracking-widest text-sm font-bold"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
