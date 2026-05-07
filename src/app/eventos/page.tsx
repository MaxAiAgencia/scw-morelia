import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Ticket, ChevronRight } from "lucide-react";
import { events } from "@/data/events";
import Countdown from "@/components/Countdown";

export const metadata: Metadata = {
  title: "Eventos | SCW Strong Classic Wrestling",
  description: "Próximos eventos y carteleras de SCW Strong Classic Wrestling en Morelia.",
};

export default function EventosPage() {
  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);
  const [featured, ...rest] = upcoming;

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,0,0,0.08)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-bebas text-[#CC0000] tracking-[0.5em] text-sm mb-4">SCW PRESENTA</p>
          <h1 className="font-bebas text-7xl sm:text-9xl text-white leading-none mb-4">Eventos</h1>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>
      </section>

      {/* Featured upcoming event — poster + detalles */}
      {featured && (
        <section className="relative py-0 bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,158,255,0.05)_0%,transparent_65%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3b9eff]/30" />
              <span className="font-bebas text-[#3b9eff] tracking-[0.4em] text-sm">PRÓXIMO EVENTO</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3b9eff]/30" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Poster */}
              <div className="relative group">
                <div
                  className="relative rounded-sm overflow-hidden aspect-[3/4]"
                  style={{ boxShadow: "0 0 60px rgba(59,158,255,0.2), 0 0 120px rgba(59,158,255,0.05)" }}
                >
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-[#111] flex items-center justify-center">
                      <span className="font-bebas text-gray-600 text-4xl">SCW</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-[#3b9eff]/0 via-[#3b9eff]/8 to-[#D4A017]/8 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </div>

              {/* Info */}
              <div className="space-y-8 lg:pt-4">
                <div>
                  <p className="font-bebas text-[#3b9eff] tracking-[0.4em] text-sm mb-2">SCW PRESENTA</p>
                  <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-2">
                    {featured.title}
                  </h2>
                  <p className="font-oswald text-gray-400 text-base">{featured.subtitle}</p>
                </div>

                {/* Fecha, hora, lugar */}
                <div className="space-y-3">
                  {[
                    { icon: Calendar, text: featured.date },
                    { icon: Clock, text: featured.time },
                    { icon: MapPin, text: `${featured.venue} — ${featured.address}, ${featured.city}` },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-sm border border-[#D4A017]/20 flex items-center justify-center bg-[#D4A017]/5 shrink-0">
                        <Icon size={15} className="text-[#D4A017]" />
                      </div>
                      <span className="font-oswald text-gray-300 text-sm tracking-wide">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Cartelera */}
                {featured.fights && (
                  <div className="rounded-sm border border-white/5 bg-[#111] overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/5 bg-[#141414]">
                      <p className="font-bebas text-[#D4A017] tracking-[0.3em] text-xs">CARTELERA COMPLETA</p>
                    </div>
                    <div className="divide-y divide-white/5">
                      {featured.fights.map((f, i) => (
                        <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-white/2 transition-colors">
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
                  <Countdown targetDate={featured.isoDate} />
                </div>

                {/* CTA boletos */}
                <a
                  href={featured.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2 shadow-red-glow"
                >
                  <Ticket size={18} /> Conseguir Boletos
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Más eventos próximos */}
      {rest.length > 0 && (
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bebas text-3xl text-[#D4A017] tracking-widest mb-8">Más Próximos Eventos</h2>
            <div className="space-y-4">
              {rest.map((event) => (
                <div
                  key={event.id}
                  className="group relative rounded-sm border border-white/5 bg-[#111] overflow-hidden hover:border-[#D4A017]/30 transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A017] to-[#3b9eff]" />
                  <div className="p-6 pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-bebas text-xs tracking-widest px-3 py-1 bg-[#D4A017]/20 text-[#D4A017] rounded-sm">
                        PRÓXIMO
                      </span>
                      <h3 className="font-bebas text-2xl text-white mt-2 mb-1">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm mt-2">
                        <span className="flex items-center gap-2 text-gray-400 font-oswald">
                          <Calendar size={13} className="text-[#D4A017]" /> {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-gray-400 font-oswald">
                          <Clock size={13} className="text-[#D4A017]" /> {event.time}
                        </span>
                        <span className="flex items-center gap-2 text-gray-400 font-oswald">
                          <MapPin size={13} className="text-[#D4A017]" /> {event.venue}
                        </span>
                      </div>
                    </div>
                    {event.ticketUrl ? (
                      <a
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-gold px-6 py-3 text-base rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2 shrink-0"
                      >
                        <Ticket size={14} /> Boletos
                      </a>
                    ) : (
                      <span className="font-bebas text-gray-600 tracking-widest text-sm">Próximamente</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Eventos pasados */}
      {past.length > 0 && (
        <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bebas text-3xl text-gray-600 tracking-widest mb-8">Eventos Pasados</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {past.map((event) => (
                <div key={event.id} className="p-5 rounded-sm border border-white/5 bg-[#111] opacity-60 hover:opacity-90 transition-opacity duration-300">
                  <p className="font-oswald text-gray-600 text-xs tracking-widest uppercase mb-1">{event.date}</p>
                  <h3 className="font-bebas text-xl text-white mb-1">{event.title}</h3>
                  <p className="font-oswald text-gray-500 text-sm">{event.mainEvent}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contratar CTA */}
      <section className="py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">¿QUIERES UN EVENTO SCW?</p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-6">Contrata a SCW para tu evento</h2>
          <p className="font-oswald text-gray-400 text-lg mb-8 leading-relaxed">
            SCW está disponible para cualquier tipo de evento: fiestas, festivales, exposiciones y más.
          </p>
          <Link href="/contacto" className="btn-gold px-10 py-5 text-2xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-3">
            Contáctanos <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
