import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/luchadores", label: "Luchadores" },
  { href: "/dojo", label: "SCW Dojo" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4A017]/60 bg-black shrink-0">
                <Image src="/images/logo.jpg" alt="SCW" fill className="object-cover scale-110" sizes="56px" />
              </div>
              <div>
                <p className="font-bebas text-white text-xl leading-none tracking-widest">Strong Classic</p>
                <p className="font-bebas text-[#D4A017] text-base leading-none tracking-[0.3em]">Wrestling</p>
              </div>
            </div>
            <p className="font-oswald text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Somos la empresa de lucha libre profesional de Morelia, dedicada a crear
              espectáculos emocionantes y a formar el talento luchístico del futuro a
              través del SCW Dojo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/scwmorelia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/40 transition-all duration-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/scwmorelia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-300"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bebas text-white text-lg tracking-widest mb-6 border-b border-[#D4A017]/20 pb-3">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-oswald text-gray-400 text-sm tracking-wide hover:text-[#D4A017] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4A017]/30 group-hover:bg-[#D4A017] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bebas text-white text-lg tracking-widest mb-6 border-b border-[#D4A017]/20 pb-3">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4A017] mt-0.5 shrink-0" />
                <p className="font-oswald text-gray-400 text-sm leading-relaxed">
                  Av. Michoacán 614,<br />Morelia, Michoacán, México
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4A017] shrink-0" />
                <a href="tel:4435028658" className="font-oswald text-gray-400 text-sm hover:text-[#D4A017] transition-colors">
                  443 502 8658
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#D4A017] shrink-0" />
                <a href="mailto:scwdojo@gmail.com" className="font-oswald text-gray-400 text-sm hover:text-[#D4A017] transition-colors">
                  scwdojo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-oswald text-gray-600 text-xs tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} SCW Strong Classic Wrestling. Todos los derechos reservados.
          </p>
          <p className="font-oswald text-gray-700 text-xs tracking-widest">
            Morelia, Michoacán, México
          </p>
        </div>
      </div>
    </footer>
  );
}
