import { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { events } from "@/data/events";
import Countdown from "@/components/Countdown";

export const metadata: Metadata = {
  title: "Eventos | SCW Strong Classic Wrestling",
  description: "Próximos eventos y carteleras de SCW Strong Classic Wrestling en Morelia.",
};

export default function EventosPage() {
  const upcoming = events.filter((e) => e.upcoming);
  const past = events.filter((e) => !e.upcoming);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,0,0,0.1)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-bebas text-[#CC0000] tracking-[0.5em] text-sm mb-4">SCW PRESENTA</p>
          <h1 className="font-bebas text-7xl sm:text-9xl text-white leading-none mb-4">Eventos</h1>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-4xl text-[#D4A017] tracking-widest mb-10">
            Próximos Eventos
          </h2>
          <div className="space-y-6">
            {upcoming.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-sm border border-[#CC0000]/20 bg-[#111] overflow-hidden hover:border-[#CC0000]/50 transition-all duration-300"
              >
                {/* Red left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#CC0000] to-[#D4A017]" />

                <div className="p-6 sm:p-8 pl-8 sm:pl-10">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-bebas text-xs tracking-widest px-3 py-1 bg-[#CC0000] text-white rounded-sm">
                          PRÓXIMO
                        </span>
                        <span className="font-oswald text-gray-500 text-xs tracking-widest uppercase">
                          {event.venue}
                        </span>
                      </div>
                      <h3 className="font-bebas text-2xl sm:text-3xl text-white mb-1 leading-tight">
                        {event.title}
                      </h3>
                      <p className="font-oswald text-gray-400 text-sm mb-4">{event.subtitle}</p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-2 text-gray-300 font-oswald">
                          <Calendar size={14} className="text-[#D4A017]" /> {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-gray-300 font-oswald">
                          <Clock size={14} className="text-[#D4A017]" /> {event.time}
                        </span>
                        <span className="flex items-center gap-2 text-gray-300 font-oswald">
                          <MapPin size={14} className="text-[#D4A017]" /> {event.address}, {event.city}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <span className="font-bebas text-[#D4A017] text-sm tracking-widest">
                          ESTELAR:
                        </span>
                        <span className="font-oswald text-white text-sm">{event.mainEvent}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-4">
                      <Countdown targetDate={event.isoDate} />
                      <Link
                        href={event.ticketUrl ?? "/contacto"}
                        className="btn-red px-6 py-3 text-lg rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2"
                      >
                        <Ticket size={16} /> Boletos
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-4xl text-gray-500 tracking-widest mb-10">
            Eventos Pasados
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {past.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-sm border border-white/5 bg-[#111] opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <p className="font-oswald text-gray-600 text-xs tracking-widest uppercase mb-2">
                  {event.date}
                </p>
                <h3 className="font-bebas text-xl text-white mb-1">{event.title}</h3>
                <p className="font-oswald text-gray-500 text-sm">{event.mainEvent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contracting CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">
            ¿QUIERES UN EVENTO SCW?
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl text-white mb-6">
            Contrata a SCW para tu evento
          </h2>
          <p className="font-oswald text-gray-400 text-lg mb-8 leading-relaxed">
            SCW está disponible para cualquier tipo de evento: fiestas, festivales,
            exposiciones y más. Llévate la emoción de la lucha libre a tu celebración.
          </p>
          <Link
            href="/contacto"
            className="btn-gold px-10 py-5 text-2xl rounded-sm uppercase tracking-widest font-bebas inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </>
  );
}
