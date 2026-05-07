import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { events } from "@/data/events";
import Countdown from "./Countdown";

export default function ProximoEvento() {
  const next = events.find((e) => e.upcoming);
  if (!next) return null;

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,158,255,0.05)_0%,transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3b9eff]/30" />
          <span className="font-bebas text-[#3b9eff] tracking-[0.4em] text-sm">PRÓXIMO EVENTO</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3b9eff]/30" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Real poster */}
          <div className="relative group">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(59,158,255,0.2), 0 0 120px rgba(59,158,255,0.05)" }}
            >
              {next.image ? (
                <div className="relative aspect-[3/4]">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="aspect-[3/4] bg-[#111] flex items-center justify-center">
                  <p className="font-bebas text-gray-600 text-2xl">Sin imagen</p>
                </div>
              )}
            </div>
            {/* Glow pulse effect */}
            <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-[#3b9eff]/0 via-[#3b9eff]/10 to-[#D4A017]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <p className="font-bebas text-[#3b9eff] tracking-[0.4em] text-sm mb-2">SCW PRESENTA</p>
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-2">
                {next.title}
              </h2>
              <p className="font-oswald text-gray-400 text-base">{next.subtitle}</p>
            </div>

            {/* Details */}
            <div className="space-y-3">
              {[
                { icon: Calendar, text: next.date },
                { icon: Clock, text: next.time },
                { icon: MapPin, text: `${next.venue} — ${next.address}, ${next.city}` },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-sm border border-[#D4A017]/20 flex items-center justify-center bg-[#D4A017]/5 shrink-0">
                    <Icon size={15} className="text-[#D4A017]" />
                  </div>
                  <span className="font-oswald text-gray-300 text-sm tracking-wide">{text}</span>
                </div>
              ))}
            </div>

            {/* Fights card */}
            {next.fights && (
              <div className="rounded-sm border border-white/5 bg-[#111] overflow-hidden">
                <div className="px-4 py-3 border-b border-white/5 bg-[#141414]">
                  <p className="font-bebas text-[#D4A017] tracking-[0.3em] text-xs">CARTELERA COMPLETA</p>
                </div>
                <div className="divide-y divide-white/5">
                  {next.fights.map((f, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3">
                      <div className="flex-1">
                        <p className="font-bebas text-white text-sm leading-tight">
                          {f.fighter1} {f.fighter3 ? "·" : "vs."} {f.fighter2}
                          {f.fighter3 && ` · ${f.fighter3}`}
                        </p>
                        <p className="font-oswald text-gray-500 text-[10px] tracking-widest uppercase mt-0.5">{f.type}</p>
                      </div>
                      {f.type.toLowerCase().includes("campeonato") && (
                        <span className="font-bebas text-[10px] tracking-widest px-2 py-0.5 bg-[#D4A017] text-black rounded-sm shrink-0 ml-2">
                          🏆 Título
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Countdown */}
            <div>
              <p className="font-bebas text-gray-500 tracking-widest text-xs mb-3">CUENTA REGRESIVA</p>
              <Countdown targetDate={next.isoDate} />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={next.ticketUrl ?? "/contacto"}
                className="btn-red px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2"
              >
                <Ticket size={18} /> Conseguir Boletos
              </Link>
              <Link
                href="/eventos"
                className="btn-outline-gold px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas"
              >
                Más Eventos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
