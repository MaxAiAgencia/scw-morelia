import { Metadata } from "next";
import Link from "next/link";
import { Dumbbell, Users, Star, Clock, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "SCW Dojo | Escuela de Lucha Libre en Morelia",
  description:
    "El SCW Dojo es la escuela de lucha libre de SCW en Morelia. Aprende lucha libre profesional con entrenadores de alto nivel.",
};

const faqs = [
  {
    q: "¿Necesito experiencia previa para inscribirme?",
    a: "No. Recibimos a personas de todos los niveles, desde principiantes hasta quienes ya tienen algo de experiencia. Lo importante es la disposición para aprender.",
  },
  {
    q: "¿Cuántos días se entrena a la semana?",
    a: "Los entrenamientos se realizan varios días a la semana. Contáctanos para conocer el horario actualizado.",
  },
  {
    q: "¿A partir de qué edad puedo inscribirme?",
    a: "Generalmente a partir de los 16 años. Para menores de edad se requiere autorización de padres o tutores.",
  },
  {
    q: "¿Los alumnos pueden aparecer en eventos?",
    a: "Sí. Los alumnos más avanzados tienen la oportunidad de participar en eventos de SCW, que es la mejor experiencia que puedes tener.",
  },
  {
    q: "¿Qué necesito llevar al primer entrenamiento?",
    a: "Ropa deportiva cómoda y ganas de aprender. Nosotros te orientamos en todo lo demás al inicio.",
  },
];

export default function DojoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-0 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center pb-20">
            <p className="font-bebas text-[#D4A017] tracking-[0.5em] text-sm mb-4">
              FORMA TU CARRERA
            </p>
            <h1 className="font-bebas text-7xl sm:text-[10rem] text-white leading-none">
              SCW <span className="text-gold-gradient">Dojo</span>
            </h1>
            <div className="divider-gold max-w-xs mx-auto my-6" />
            <p className="font-oswald text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
              La escuela de lucha libre profesional de Morelia. Formamos a los guerreros
              del ring del futuro con disciplina, técnica y pasión.
            </p>
          </div>

          {/* Ring SVG decoration */}
          <div className="relative max-w-lg mx-auto">
            <svg viewBox="0 0 400 160" className="w-full opacity-20">
              <rect x="10" y="10" width="380" height="140" rx="6" fill="none" stroke="#D4A017" strokeWidth="3" />
              <line x1="10" y1="50" x2="390" y2="50" stroke="#D4A017" strokeWidth="2" />
              <line x1="10" y1="90" x2="390" y2="90" stroke="#D4A017" strokeWidth="2" />
              <line x1="10" y1="130" x2="390" y2="130" stroke="#D4A017" strokeWidth="2" />
              <circle cx="10" cy="10" r="8" fill="#D4A017" />
              <circle cx="390" cy="10" r="8" fill="#D4A017" />
              <circle cx="10" cy="150" r="8" fill="#D4A017" />
              <circle cx="390" cy="150" r="8" fill="#D4A017" />
              <line x1="10" y1="10" x2="10" y2="150" stroke="#D4A017" strokeWidth="5" />
              <line x1="390" y1="10" x2="390" y2="150" stroke="#D4A017" strokeWidth="5" />
            </svg>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">
                QUÉ ES EL SCW DOJO
              </p>
              <h2 className="font-bebas text-5xl sm:text-6xl text-white leading-tight mb-6">
                Más que una escuela,<br />
                <span className="text-gold-gradient">una familia</span>
              </h2>
              <div className="space-y-4 font-oswald text-gray-300 text-base leading-relaxed">
                <p>
                  El SCW Dojo es el brazo educativo de SCW Strong Classic Wrestling.
                  Nacimos con el objetivo de crear un espacio serio y profesional donde
                  cualquier persona apasionada por la lucha libre pueda desarrollar su
                  talento.
                </p>
                <p>
                  Nuestros entrenamientos combinan técnicas de lucha libre mexicana
                  clásica con elementos del pro wrestling americano, dándote una base
                  sólida y versátil.
                </p>
                <p>
                  Los alumnos más avanzados tienen la oportunidad de debutar en
                  eventos reales de SCW, la mejor escuela práctica que existe.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Dumbbell, title: "Técnica Profesional", desc: "Llaves, caídas, movimientos aéreos y psicología del ring", color: "#D4A017" },
                { icon: Users, title: "Grupos Reducidos", desc: "Atención personalizada para que avances más rápido", color: "#CC0000" },
                { icon: Star, title: "Debut en Eventos", desc: "Sube al ring en eventos reales de SCW ante el público", color: "#D4A017" },
                { icon: Clock, title: "Horarios Flexibles", desc: "Varios días y horarios para que puedas combinar con tu vida", color: "#CC0000" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="p-5 rounded-sm border border-white/5 bg-[#111] hover:border-[#D4A017]/20 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-3"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="font-bebas text-white text-lg tracking-wide mb-1">{title}</h3>
                  <p className="font-oswald text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Inscription */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.05)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">DA EL PRIMER PASO</p>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-4">Inscríbete al Dojo</h2>
            <p className="font-oswald text-gray-400 text-lg">
              Contáctanos por cualquiera de estos medios y nos ponemos en contacto contigo
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MapPin, label: "Visítanos", value: "Av. Michoacán 614, Morelia, Mich.", href: "https://maps.google.com" },
              { icon: Phone, label: "Llámanos", value: "443 502 8658", href: "tel:4435028658" },
              { icon: Mail, label: "Escríbenos", value: "scwdojo@gmail.com", href: "mailto:scwdojo@gmail.com" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group p-6 rounded-sm border border-white/5 bg-[#111] hover:border-[#D4A017]/30 transition-all duration-300 text-center card-hover"
              >
                <div className="w-12 h-12 rounded-full border border-[#D4A017]/30 flex items-center justify-center mx-auto mb-4 group-hover:border-[#D4A017] group-hover:shadow-gold-glow transition-all duration-300">
                  <Icon size={20} className="text-[#D4A017]" />
                </div>
                <p className="font-bebas text-[#D4A017] tracking-widest text-sm mb-1">{label}</p>
                <p className="font-oswald text-gray-300 text-sm">{value}</p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Link href="/contacto" className="btn-gold px-10 py-5 text-2xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-3">
              Formulario de Contacto <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">PREGUNTAS FRECUENTES</p>
            <h2 className="font-bebas text-5xl text-white">FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-sm border border-white/5 bg-[#111] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-[#141414] transition-colors">
                  <span className="font-bebas text-white text-lg tracking-wide">{q}</span>
                  <ChevronRight
                    size={18}
                    className="text-[#D4A017] shrink-0 transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="px-5 pb-5">
                  <p className="font-oswald text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
