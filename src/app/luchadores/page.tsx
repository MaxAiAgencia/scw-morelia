import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { wrestlers, type Wrestler } from "@/data/wrestlers";

export const metadata: Metadata = {
  title: "Luchadores | SCW Strong Classic Wrestling",
  description: "Conoce al roster de luchadores de SCW Strong Classic Wrestling en Morelia.",
};

function WrestlerSilhouette({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`rg-${color.replace("#","")}`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="280" fill={`url(#rg-${color.replace("#","")})`} />
      <g fill={color} opacity="0.12">
        <ellipse cx="100" cy="48" rx="26" ry="30" />
        <rect x="90" y="74" width="20" height="16" />
        <path d="M62 90 L138 90 L145 168 L55 168 Z" />
        <path d="M62 94 L24 152 L36 160 L70 104 Z" />
        <path d="M138 94 L176 152 L164 160 L130 104 Z" />
        <path d="M70 168 L58 268 L84 268 L100 200 Z" />
        <path d="M130 168 L142 268 L116 268 L100 200 Z" />
        <ellipse cx="100" cy="48" rx="26" ry="30" fill="none" stroke={color} strokeWidth="2" opacity="0.5"/>
        <ellipse cx="87" cy="44" rx="7" ry="9" fill="#000" opacity="0.4" />
        <ellipse cx="113" cy="44" rx="7" ry="9" fill="#000" opacity="0.4" />
      </g>
    </svg>
  );
}

export default function LuchadoresPage() {
  const tecnicos = wrestlers.filter((w) => w.style === "Técnico");
  const rudos = wrestlers.filter((w) => w.style === "Rudo");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-bebas text-[#D4A017] tracking-[0.5em] text-sm mb-4">EL MEJOR TALENTO</p>
          <h1 className="font-bebas text-7xl sm:text-9xl text-white leading-none mb-4">Luchadores</h1>
          <div className="divider-gold max-w-xs mx-auto mb-6" />
          <p className="font-oswald text-gray-400 text-lg max-w-xl mx-auto">
            Conoce a los guerreros que hacen vibrar el ring en cada evento de SCW Morelia
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-[#111] border-y border-[#D4A017]/20 py-4">
        <p className="text-center font-oswald text-[#D4A017] text-sm tracking-widest">
          ⚠️ Roster placeholder — próximamente con fotos y perfiles reales de los luchadores SCW
        </p>
      </div>

      {/* Rudos */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[#CC0000]/20" />
            <h2 className="font-bebas text-4xl text-[#CC0000] tracking-widest">Los Rudos</h2>
            <div className="h-px flex-1 bg-[#CC0000]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rudos.map((w) => (
              <WrestlerCard key={w.id} wrestler={w} />
            ))}
          </div>
        </div>
      </section>

      {/* Técnicos */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-[#D4A017]/20" />
            <h2 className="font-bebas text-4xl text-[#D4A017] tracking-widest">Los Técnicos</h2>
            <div className="h-px flex-1 bg-[#D4A017]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tecnicos.map((w) => (
              <WrestlerCard key={w.id} wrestler={w} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5 text-center">
        <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">¿QUIERES SER UNO DE ELLOS?</p>
        <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-6">Únete al SCW Dojo</h2>
        <Link href="/dojo" className="btn-gold px-10 py-5 text-2xl rounded-sm uppercase tracking-widest font-bebas inline-block">
          Saber Más
        </Link>
      </section>
    </>
  );
}

function WrestlerCard({ wrestler: w }: { wrestler: Wrestler }) {
  return (
    <div
      className="wrestler-card cursor-pointer"
    >
      <div className="wrestler-card-inner h-96 rounded-sm overflow-hidden">
        {/* Front */}
        <div
          className="wrestler-card-front w-full h-full border border-white/5 rounded-sm overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${w.color}22 0%, #0a0a0a 100%)` }}
        >
          <div className="relative w-full h-full">
            {w.image ? (
              <Image
                src={w.image}
                alt={w.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <WrestlerSilhouette color={w.color} />
            )}
            <div className="absolute top-3 left-3">
              <span className="font-bebas text-5xl leading-none" style={{ color: w.color, opacity: w.image ? 0.6 : 0.15 }}>
                {w.number}
              </span>
            </div>
            <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
              <span
                className="font-bebas text-xs tracking-widest px-3 py-1 rounded-sm"
                style={{
                  background: w.style === "Rudo" ? "#CC0000cc" : "#D4A017cc",
                  color: w.style === "Rudo" ? "#fff" : "#000",
                }}
              >
                {w.style}
              </span>
              {w.title && (
                <span className="font-bebas text-[10px] tracking-widest px-2 py-1 rounded-sm bg-[#D4A017] text-black">
                  🏆 {w.title}
                </span>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-10">
              <h3 className="font-bebas text-white text-3xl leading-none">{w.name}</h3>
              <p className="font-oswald text-gray-400 text-xs tracking-widest uppercase mt-1">{w.alias}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="wrestler-card-back w-full h-full rounded-sm border p-6 flex flex-col justify-between"
          style={{
            background: `linear-gradient(160deg, ${w.color}30 0%, #0a0a0a 100%)`,
            borderColor: `${w.color}40`,
          }}
        >
          <div>
            <p className="font-bebas text-[#D4A017] tracking-[0.3em] text-xs mb-1">FICHA TÉCNICA</p>
            <h3 className="font-bebas text-white text-2xl">{w.name}</h3>
            <p className="font-oswald text-gray-400 text-xs tracking-wide">{w.alias}</p>
          </div>
          <div className="space-y-2">
            {[
              { label: "Peso", value: w.weight },
              { label: "Origen", value: w.hometown },
              { label: "Estilo", value: w.style },
              ...(w.title ? [{ label: "Título", value: w.title }] : []),
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-oswald text-gray-500 text-xs uppercase tracking-wider">{label}</span>
                <span className="font-oswald text-white text-xs">{value}</span>
              </div>
            ))}
          </div>
          <p className="font-oswald text-gray-400 text-sm leading-relaxed italic">
            &ldquo;{w.bio}&rdquo;
          </p>
          <Link href="/eventos" className="block text-center btn-gold py-3 rounded-sm font-bebas tracking-widest text-sm">
            Ver Próximo Evento
          </Link>
        </div>
      </div>
    </div>
  );
}
