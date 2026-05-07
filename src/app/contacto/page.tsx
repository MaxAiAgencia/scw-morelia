import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | SCW Strong Classic Wrestling",
  description: "Contáctanos para boletos, contrataciones o informes del SCW Dojo.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.06)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-bebas text-[#D4A017] tracking-[0.5em] text-sm mb-4">ESTAMOS AQUÍ</p>
          <h1 className="font-bebas text-7xl sm:text-9xl text-white leading-none mb-4">Contacto</h1>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div className="space-y-10">
              <div>
                <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">
                  INFORMACIÓN DE CONTACTO
                </p>
                <h2 className="font-bebas text-4xl text-white mb-4">Escríbenos o visítanos</h2>
                <p className="font-oswald text-gray-400 text-base leading-relaxed">
                  Para boletos, contrataciones para eventos, informes del SCW Dojo
                  o cualquier duda, estamos disponibles por estos medios.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Dirección", value: "Av. Michoacán 614, Morelia, Michoacán, México", href: "https://maps.google.com/?q=Av+Michoacan+614+Morelia" },
                  { icon: Phone, label: "Teléfono", value: "443 502 8658", href: "tel:4435028658" },
                  { icon: Mail, label: "Email", value: "scwdojo@gmail.com", href: "mailto:scwdojo@gmail.com" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-sm border border-[#D4A017]/20 flex items-center justify-center bg-[#D4A017]/5 shrink-0 group-hover:border-[#D4A017]/60 group-hover:shadow-gold-glow transition-all duration-300">
                      <Icon size={20} className="text-[#D4A017]" />
                    </div>
                    <div>
                      <p className="font-bebas text-[#D4A017] tracking-widest text-sm">{label}</p>
                      <p className="font-oswald text-gray-300 text-sm group-hover:text-white transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="font-bebas text-gray-500 tracking-[0.4em] text-xs mb-4">REDES SOCIALES</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/scwmorelia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm border border-white/10 hover:border-pink-500/40 bg-[#111] transition-all duration-300 group"
                  >
                    <InstagramIcon size={18} className="text-pink-400" />
                    <span className="font-bebas text-white text-sm tracking-wider group-hover:text-pink-400 transition-colors">
                      @scwmorelia
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/scwmorelia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-sm border border-white/10 hover:border-blue-500/40 bg-[#111] transition-all duration-300 group"
                  >
                    <FacebookIcon size={18} className="text-blue-400" />
                    <span className="font-bebas text-white text-sm tracking-wider group-hover:text-blue-400 transition-colors">
                      SCW Morelia
                    </span>
                  </a>
                </div>
              </div>

              {/* What we offer */}
              <div className="p-6 rounded-sm border border-[#D4A017]/20 bg-[#D4A017]/5">
                <p className="font-bebas text-[#D4A017] tracking-widest text-sm mb-4">PODEMOS AYUDARTE CON</p>
                <ul className="space-y-2">
                  {[
                    "Información sobre el próximo evento",
                    "Compra y reserva de boletos",
                    "Contratar a SCW para tu evento o negocio",
                    "Inscripción al SCW Dojo",
                    "Colaboraciones y patrocinios",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-oswald text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
