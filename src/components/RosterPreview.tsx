import Link from "next/link";
import Image from "next/image";
import { wrestlers } from "@/data/wrestlers";

function WrestlerSilhouette({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`grad-${color.replace("#", "")}`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="300" fill={color} opacity="0.05" />
      <rect width="200" height="300" fill={`url(#grad-${color.replace("#", "")})`} />
      {/* Simplified wrestler silhouette */}
      <g fill={color} opacity="0.15">
        {/* Head */}
        <ellipse cx="100" cy="50" rx="28" ry="32" />
        {/* Neck */}
        <rect x="88" y="78" width="24" height="18" />
        {/* Torso */}
        <path d="M60 96 L140 96 L148 180 L52 180 Z" />
        {/* Arms */}
        <path d="M60 100 L20 160 L32 168 L72 110 Z" />
        <path d="M140 100 L180 160 L168 168 L128 110 Z" />
        {/* Legs */}
        <path d="M72 180 L60 280 L88 280 L100 210 Z" />
        <path d="M128 180 L140 280 L112 280 L100 210 Z" />
        {/* Mask details */}
        <ellipse cx="100" cy="50" rx="28" ry="32" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
        <line x1="100" y1="18" x2="100" y2="82" stroke={color} strokeWidth="1" opacity="0.4" />
        <ellipse cx="86" cy="46" rx="8" ry="10" fill="#000" opacity="0.5" />
        <ellipse cx="114" cy="46" rx="8" ry="10" fill="#000" opacity="0.5" />
      </g>
      {/* Question mark for mystery */}
      <text x="100" y="260" textAnchor="middle" fill={color} fontSize="80" opacity="0.05" fontFamily="serif" fontWeight="bold">?</text>
    </svg>
  );
}

export default function RosterPreview() {
  // Primero los que tienen foto, luego rellena hasta 4
  const withPhoto = wrestlers.filter((w) => w.image);
  const withoutPhoto = wrestlers.filter((w) => !w.image);
  const preview = [...withPhoto, ...withoutPhoto].slice(0, 4);

  return (
    <section className="relative py-24 bg-[#0f0f0f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-2">
              CONOCE A LOS GUERREROS
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl text-white leading-none">
              El Roster
            </h2>
          </div>
          <Link
            href="/luchadores"
            className="btn-outline-gold px-6 py-3 text-lg rounded-sm uppercase tracking-widest font-bebas shrink-0"
          >
            Ver Todos →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {preview.map((w) => (
            <div key={w.id} className="wrestler-card cursor-pointer">
              <div className="wrestler-card-inner h-80 sm:h-96 rounded-sm">
                {/* Front */}
                <div
                  className="wrestler-card-front w-full h-full rounded-sm overflow-hidden border border-white/5"
                  style={{ background: `linear-gradient(160deg, ${w.color}22 0%, #0a0a0a 100%)` }}
                >
                  <div className="relative w-full h-full">
                    {w.image ? (
                      <Image
                        src={w.image}
                        alt={w.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <WrestlerSilhouette color={w.color} />
                    )}
                    {/* Number */}
                    <div className="absolute top-3 left-3">
                      <span className="font-bebas text-5xl leading-none"
                        style={{ color: w.color, opacity: w.image ? 0.6 : 0.2 }}>
                        {w.number}
                      </span>
                    </div>
                    {/* Style badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="font-bebas text-xs tracking-widest px-2 py-1 rounded-sm"
                        style={{
                          background: w.style === "Rudo" ? "rgba(204,0,0,0.8)" : "rgba(212,160,23,0.8)",
                          color: w.style === "Rudo" ? "#fff" : "#000",
                        }}
                      >
                        {w.style}
                      </span>
                    </div>
                    {/* Title badge */}
                    {w.title && (
                      <div className="absolute top-10 right-3 mt-1">
                        <span className="font-bebas text-[10px] tracking-widest px-2 py-1 rounded-sm bg-[#D4A017] text-black block">
                          🏆 {w.title}
                        </span>
                      </div>
                    )}
                    {/* Name */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-8">
                      <h3 className="font-bebas text-white text-2xl leading-none">{w.name}</h3>
                      <p className="font-oswald text-gray-400 text-xs tracking-widest uppercase mt-1">{w.alias}</p>
                    </div>
                  </div>
                </div>

                {/* Back — fondo completamente opaco para tapar la imagen del frente */}
                <div
                  className="wrestler-card-back w-full h-full rounded-sm border overflow-hidden flex flex-col justify-between p-5"
                  style={{
                    background: `linear-gradient(160deg, #0d0d0d 0%, #111 50%, #0a0a0a 100%)`,
                    borderColor: `${w.color}50`,
                    boxShadow: `inset 0 0 40px ${w.color}18`,
                  }}
                >
                  {/* Color accent line top */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-sm" style={{ background: `linear-gradient(90deg, ${w.color}, transparent)` }} />

                  <div>
                    <p className="font-bebas text-[#D4A017] tracking-[0.3em] text-xs mb-1">FICHA TÉCNICA</p>
                    <h3 className="font-bebas text-white text-2xl leading-none mb-1">{w.name}</h3>
                    <p className="font-oswald text-gray-400 text-xs tracking-wide">{w.alias}</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: "Estilo", value: w.style },
                      ...(w.weight ? [{ label: "Peso", value: w.weight }] : []),
                      ...(w.hometown ? [{ label: "Origen", value: w.hometown }] : []),
                      ...(w.title ? [{ label: "Título", value: w.title }] : []),
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between border-b border-white/8 pb-1.5">
                        <span className="font-oswald text-gray-500 uppercase tracking-wider text-xs">{label}</span>
                        <span className="font-oswald text-gray-200 text-xs">{value}</span>
                      </div>
                    ))}
                  </div>

                  <p className="font-oswald text-gray-300 text-sm leading-relaxed italic">
                    &ldquo;{w.bio}&rdquo;
                  </p>

                  <Link
                    href="/luchadores"
                    className="block text-center btn-gold py-2 rounded-sm font-bebas tracking-widest text-sm"
                  >
                    Ver Perfil Completo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-oswald text-gray-500 text-sm tracking-widest">
          Pasa el cursor sobre cada luchador para ver su ficha
        </p>
      </div>
    </section>
  );
}
