import { Mail, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10 py-16 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div>
          <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">
            PRONTO PARA COMEÇAR?
          </h3>
          <p className="font-body text-white/40 text-sm">
            Agende uma aula experimental sem compromisso.
          </p>
        </div>
        <a
          href="https://wa.me/5547999232164"
          target="_blank"
          rel="noreferrer"
          className="bg-tertiary text-white px-12 py-4 font-headline uppercase tracking-widest text-sm font-bold hover:bg-red-800 transition-colors flex-shrink-0 active:scale-95"
        >
          Fale pelo WhatsApp
        </a>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-16 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="space-y-5 max-w-xs">
          <div>
            <div className="text-xl font-black font-headline tracking-tighter">DEFENSE</div>
            <div className="text-[9px] tracking-[0.35em] uppercase text-tertiary font-body font-semibold mt-0.5">
              Martial Arts
            </div>
          </div>
          <p className="text-white/40 font-body text-sm leading-relaxed">
            Fundada sobre os princípios da disciplina estóica. Um santuário para quem busca o equilíbrio supremo entre mente e movimento.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-headline text-xs font-black tracking-widest uppercase text-white">
              Navegação
            </span>
            {["Início", "Modalidades", "Unidades", "Sobre Nós"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-sm tracking-widest uppercase text-white/40 hover:text-tertiary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-headline text-xs font-black tracking-widest uppercase text-white">
              Unidades
            </span>
            <a
              href="https://api.whatsapp.com/send?phone=5547991454347"
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm tracking-widest uppercase text-white/40 hover:text-tertiary transition-colors"
            >
              Camboriú
            </a>
            <a
              href="https://wa.me/5547999232164"
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm tracking-widest uppercase text-white/40 hover:text-tertiary transition-colors"
            >
              Balneário Camboriú
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-headline text-xs font-black tracking-widest uppercase text-white">
              Contato
            </span>
            <a
              href="mailto:contato@defensema.com.br"
              className="font-body text-sm tracking-widest text-white/40 hover:text-tertiary transition-colors flex items-center gap-2"
            >
              <Mail size={14} strokeWidth={1.5} />
              contato@defensema.com.br
            </a>
            <a
              href="tel:+5547999232164"
              className="font-body text-sm tracking-widest text-white/40 hover:text-tertiary transition-colors flex items-center gap-2"
            >
              <Phone size={14} strokeWidth={1.5} />
              (47) 99923-2164
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
        <p className="font-body text-xs tracking-widest uppercase text-white/20">
          © {new Date().getFullYear()} Defense Martial Arts. Todos os direitos reservados.
        </p>
        <p className="font-body text-xs tracking-widest uppercase text-white/20">
          Disciplina Estóica
        </p>
      </div>
    </footer>
  );
}
