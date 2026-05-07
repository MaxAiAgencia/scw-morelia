import Link from "next/link";
import { Dumbbell, Users, Star, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Entrenamiento Profesional",
    desc: "Aprende de luchadores con años de experiencia. Técnicas de lucha libre mexicana y pro wrestling.",
    color: "#D4A017",
  },
  {
    icon: Users,
    title: "Comunidad SCW",
    desc: "Forma parte de una familia de luchadores apasionados. Entrena, crece y compite juntos.",
    color: "#CC0000",
  },
  {
    icon: Star,
    title: "Sube al Ring",
    desc: "Los mejores alumnos tienen la oportunidad de presentarse en eventos reales de SCW.",
    color: "#D4A017",
  },
];

export default function DojoSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Diagonal background split */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,160,23,0.06)_0%,transparent_60%)]" />

      {/* Top divider */}
      <div className="divider-gold mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">
              FORMA TU CARRERA
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-2">
              SCW
            </h2>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-gold-gradient leading-none mb-8">
              DOJO
            </h2>
            <p className="font-oswald text-gray-300 text-lg leading-relaxed mb-6">
              La escuela de lucha libre de SCW en Morelia. Formamos a los luchadores del futuro
              con entrenamiento serio, disciplina y pasión por el arte del pancracio.
            </p>
            <p className="font-oswald text-gray-400 text-base leading-relaxed mb-10">
              Tanto si eres principiante como si ya tienes experiencia, en el SCW Dojo
              encontrarás el ambiente y la guía que necesitas para desarrollar tu personaje
              y brillar bajo los reflectores.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span className="font-oswald text-gray-300 tracking-wide">
                  📍 Av. Michoacán 614, Morelia, Mich.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span className="font-oswald text-gray-300 tracking-wide">
                  📞 443 502 8658
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span className="font-oswald text-gray-300 tracking-wide">
                  ✉️ scwdojo@gmail.com
                </span>
              </div>
            </div>

            <Link
              href="/dojo"
              className="btn-gold px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2"
            >
              Más Info del Dojo <ChevronRight size={18} />
            </Link>
          </div>

          {/* Right: feature cards */}
          <div className="space-y-4">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group p-6 rounded-sm border border-white/5 bg-[#111] hover:border-[#D4A017]/30 transition-all duration-300 hover:bg-[#141414] card-hover"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-gold-glow"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-bebas text-white text-xl tracking-wide mb-2">{title}</h3>
                    <p className="font-oswald text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Ring graphic */}
            <div className="relative mt-8 p-8 rounded-sm border border-[#D4A017]/20 bg-[#111] text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.05)_0%,transparent_70%)]" />
              {/* Ring ropes SVG */}
              <svg viewBox="0 0 280 120" className="w-full max-w-xs mx-auto mb-4 opacity-30">
                <rect x="10" y="10" width="260" height="100" rx="4" fill="none" stroke="#D4A017" strokeWidth="2" />
                <line x1="10" y1="37" x2="270" y2="37" stroke="#D4A017" strokeWidth="1.5" />
                <line x1="10" y1="63" x2="270" y2="63" stroke="#D4A017" strokeWidth="1.5" />
                <line x1="10" y1="89" x2="270" y2="89" stroke="#D4A017" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="5" fill="#D4A017" />
                <circle cx="270" cy="10" r="5" fill="#D4A017" />
                <circle cx="10" cy="110" r="5" fill="#D4A017" />
                <circle cx="270" cy="110" r="5" fill="#D4A017" />
                <line x1="10" y1="10" x2="10" y2="110" stroke="#D4A017" strokeWidth="3" />
                <line x1="270" y1="10" x2="270" y2="110" stroke="#D4A017" strokeWidth="3" />
              </svg>
              <p className="font-bebas text-[#D4A017] text-2xl tracking-[0.3em] relative z-10">
                TU LUGAR EN EL RING TE ESPERA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-gold" />
    </section>
  );
}
