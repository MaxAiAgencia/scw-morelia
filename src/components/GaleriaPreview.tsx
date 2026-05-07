"use client";

import Link from "next/link";
import { useState } from "react";

const placeholders = [
  { id: 1, label: "Evento Estelar", aspect: "aspect-square", col: "col-span-1" },
  { id: 2, label: "En el Ring", aspect: "aspect-square", col: "col-span-1" },
  { id: 3, label: "La Llave Final", aspect: "aspect-square", col: "col-span-2 row-span-2" },
  { id: 4, label: "El Público", aspect: "aspect-square", col: "col-span-1" },
  { id: 5, label: "El Campeón", aspect: "aspect-square", col: "col-span-1" },
  { id: 6, label: "Entrenamiento", aspect: "aspect-square", col: "col-span-1" },
  { id: 7, label: "SCW Dojo", aspect: "aspect-square", col: "col-span-1" },
];

const colors = [
  "from-[#1a0000] to-[#0a0a0a]",
  "from-[#1a1000] to-[#0a0a0a]",
  "from-[#000f1a] to-[#0a0a0a]",
  "from-[#1a001a] to-[#0a0a0a]",
  "from-[#001a0a] to-[#0a0a0a]",
  "from-[#1a0a00] to-[#0a0a0a]",
  "from-[#0a001a] to-[#0a0a0a]",
];

export default function GaleriaPreview() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-2">
              MOMENTOS ÉPICOS
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white leading-none">
              Galería
            </h2>
          </div>
          <Link
            href="/galeria"
            className="btn-outline-gold px-6 py-3 text-lg rounded-sm uppercase tracking-widest font-bebas shrink-0"
          >
            Ver Todo →
          </Link>
        </div>

        {/* Grid gallery */}
        <div className="grid grid-cols-4 auto-rows-[120px] sm:auto-rows-[160px] gap-3">
          {placeholders.map((item, i) => (
            <div
              key={item.id}
              className={`${item.col} relative rounded-sm overflow-hidden cursor-pointer group bg-gradient-to-br ${colors[i % colors.length]} border border-white/5`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div
                    className="w-12 h-12 rounded-full border border-[#D4A017]/30 flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:border-[#D4A017] group-hover:shadow-gold-glow"
                  >
                    <span className="font-bebas text-[#D4A017]/40 group-hover:text-[#D4A017] text-xl transition-colors">
                      SCW
                    </span>
                  </div>
                  <p className="font-bebas text-white/20 group-hover:text-white/60 text-sm tracking-widest transition-colors">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
                  hovered === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-bebas text-[#D4A017] text-sm tracking-widest">{item.label}</p>
                </div>
              </div>

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(212,160,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <div className="mt-8 p-4 border border-[#D4A017]/20 rounded-sm bg-[#D4A017]/5 text-center">
          <p className="font-oswald text-[#D4A017] text-sm tracking-wide">
            📸 Próximamente: fotos y videos de los eventos de SCW Morelia
          </p>
        </div>
      </div>
    </section>
  );
}
