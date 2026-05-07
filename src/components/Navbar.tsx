"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/luchadores", label: "Luchadores" },
  { href: "/dojo", label: "SCW Dojo" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/96 backdrop-blur-md border-b border-[#D4A017]/20 shadow-[0_4px_40px_rgba(0,0,0,0.7)]"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4A017]/60 group-hover:border-[#D4A017] group-hover:shadow-[0_0_20px_rgba(212,160,23,0.5)] transition-all duration-300 bg-black">
            <Image
              src="/images/logo.jpg"
              alt="SCW Strong Classic Wrestling"
              fill
              className="object-cover scale-110"
              style={{ filter: "invert(1)" }}
              sizes="48px"
              priority
            />
          </div>
          <div className="hidden sm:block leading-none">
            <p className="font-bebas text-white text-base tracking-[0.2em] leading-tight">Strong Classic</p>
            <p className="font-bebas text-[#D4A017] text-xs tracking-[0.4em]">Wrestling</p>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link font-oswald text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href ? "text-[#D4A017]" : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/eventos"
            className="hidden sm:block btn-red px-5 py-2 text-sm rounded-sm uppercase tracking-widest font-bebas"
          >
            Ver Eventos
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 hover:text-[#D4A017] transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-black/98 border-t border-[#D4A017]/20`}
      >
        <ul className="flex flex-col py-4 px-6 gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-3 font-bebas text-xl tracking-widest border-b border-white/5 transition-colors ${
                  pathname === href ? "text-[#D4A017]" : "text-white hover:text-[#D4A017]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link href="/eventos" className="block btn-red text-center py-3 rounded-sm uppercase tracking-widest font-bebas text-lg">
              Ver Eventos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
