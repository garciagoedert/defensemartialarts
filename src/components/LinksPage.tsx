import { motion } from "motion/react";
import { MessageCircle, Globe, Instagram, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    title: "WhatsApp Balneário Camboriú",
    subtitle: "",
    url: "https://wa.me/5547999232164",
    icon: <MessageCircle size={24} />,
    primary: true,
  },
  {
    title: "WhatsApp Camboriú",
    subtitle: "",
    url: "https://api.whatsapp.com/send?phone=5547991454347",
    icon: <MessageCircle size={24} />,
    primary: true,
  },
  {
    title: "Instagram Oficial",
    subtitle: "@defensemartialarts",
    url: "https://instagram.com/defensemartialarts",
    icon: <Instagram size={24} />,
    primary: false,
  },
  {
    title: "Site Principal",
    subtitle: "Conheça nossa filosofia",
    url: "/",
    icon: <Globe size={24} />,
    isInternal: true,
    primary: false,
  },
];

const locations = [
  { name: "Ver Unidade Camboriú", url: "https://maps.google.com" },
  { name: "Ver Unidade Balneário", url: "https://maps.google.com" },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-tertiary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-white/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[450px] flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="w-24 h-24 mb-6 relative">
            <img
              src="/logo_vector.png"
              alt="Defense Logo"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <h1 className="font-headline font-black text-3xl tracking-tighter text-center uppercase">
            Defense<br/>
            <span className="text-tertiary text-xs tracking-[0.4em] font-body font-bold">Martial Arts</span>
          </h1>
        </motion.div>

        {/* Links List */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {links.map((link, i) => (
            <motion.div
              key={link.title}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              {link.isInternal ? (
                <Link
                  to={link.url}
                  className="group w-full bg-white/5 border border-white/10 p-5 flex items-center gap-5 hover:bg-white/10 transition-all hover:border-white/30"
                >
                  <div className="text-tertiary">{link.icon}</div>
                  <div className="flex-grow text-left">
                    <p className="font-headline font-bold text-sm tracking-widest uppercase">{link.title}</p>
                    {link.subtitle && (
                      <p className="font-body text-[10px] text-white/40 uppercase tracking-widest">{link.subtitle}</p>
                    )}
                  </div>
                  <ArrowRight size={18} className="text-white/20 group-hover:text-white transition-colors" />
                </Link>
              ) : (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`group w-full p-5 flex items-center gap-5 transition-all active:scale-[0.98] ${
                    link.primary 
                      ? "bg-white text-black border border-white hover:bg-transparent hover:text-white" 
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  <div className={link.primary ? "text-tertiary" : "text-white/40"}>{link.icon}</div>
                  <div className="flex-grow text-left">
                    <p className="font-headline font-bold text-sm tracking-widest uppercase">{link.title}</p>
                    {link.subtitle && (
                      <p className={`font-body text-[10px] uppercase tracking-widest ${link.primary ? "text-black/40 group-hover:text-white/40" : "text-white/40"}`}>
                        {link.subtitle}
                      </p>
                    )}
                  </div>
                  <ArrowRight size={18} className={`${link.primary ? "text-black/20 group-hover:text-white/20" : "text-white/20"} group-hover:translate-x-1 transition-all`} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40">Localizações</span>
            <div className="h-[1px] flex-grow bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-3">
            {locations.map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-6 py-4 border border-white/5 text-white/60 hover:text-white hover:bg-white/5 transition-all text-xs font-headline font-bold uppercase tracking-widest"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-tertiary" />
                  {loc.name}
                </div>
                <ArrowRight size={14} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 font-body text-[9px] tracking-[0.4em] uppercase text-white/20 text-center"
        >
          © {new Date().getFullYear()} Defense Martial Arts<br/>
          Disciplina Estóica
        </motion.p>
      </div>
    </div>
  );
}
