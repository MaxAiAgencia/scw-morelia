import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería | SCW Strong Classic Wrestling",
  description: "Fotos y videos de los eventos de SCW Strong Classic Wrestling en Morelia.",
};

const categories = ["Todos", "Eventos", "Luchadores", "Dojo", "Backstage"];

const items = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: categories[(i % 4) + 1],
  label: [
    "Evento Estelar", "La Gran Llave", "El Campeón", "Entrenamiento",
    "Backstage", "La Multitud", "Vuelo Espectacular", "El Debut",
    "Cinturón de Oro", "SCW Dojo", "El Rudo Ataca", "Victoria Final",
  ][i],
  colorClass: [
    "from-[#1a0000]", "from-[#1a1000]", "from-[#001a0a]", "from-[#0a001a]",
    "from-[#1a001a]", "from-[#001a1a]", "from-[#1a0a00]", "from-[#0a1a00]",
    "from-[#1a1a00]", "from-[#001a1a]", "from-[#1a000a]", "from-[#0a1a1a]",
  ][i],
  wide: [2, 5, 8, 11].includes(i),
}));

export default function GaleriaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.06)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="font-bebas text-[#D4A017] tracking-[0.5em] text-sm mb-4">MOMENTOS ÉPICOS</p>
          <h1 className="font-bebas text-7xl sm:text-9xl text-white leading-none mb-4">Galería</h1>
          <div className="divider-gold max-w-xs mx-auto" />
        </div>
      </section>

      {/* Coming soon notice */}
      <div className="bg-[#111] border-y border-[#D4A017]/20 py-6">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="font-bebas text-[#D4A017] text-xl tracking-widest mb-1">
            Galería en construcción
          </p>
          <p className="font-oswald text-gray-400 text-sm">
            Próximamente aquí encontrarás fotos y videos de todos los eventos SCW.
            Por ahora, síguenos en Instagram y Facebook para ver el contenido más reciente.
          </p>
        </div>
      </div>

      {/* Placeholder grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[180px]">
            {items.map((item) => (
              <div
                key={item.id}
                className={`relative rounded-sm overflow-hidden border border-white/5 bg-gradient-to-br ${item.colorClass} to-[#0a0a0a] group cursor-pointer ${item.wide ? "col-span-2" : ""}`}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full border border-[#D4A017]/20 group-hover:border-[#D4A017]/60 flex items-center justify-center mx-auto mb-2 transition-colors">
                      <span className="font-bebas text-[#D4A017]/30 group-hover:text-[#D4A017]/70 text-xs transition-colors">
                        SCW
                      </span>
                    </div>
                    <p className="font-bebas text-white/20 group-hover:text-white/50 text-xs tracking-widest transition-colors">
                      {item.label}
                    </p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className="font-bebas text-[10px] tracking-widest px-2 py-0.5 bg-[#D4A017]/20 text-[#D4A017] rounded-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#D4A017]/0 group-hover:bg-[#D4A017]/5 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-20 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-4">MIENTRAS TANTO</p>
          <h2 className="font-bebas text-5xl text-white mb-6">Síguenos en redes sociales</h2>
          <p className="font-oswald text-gray-400 text-lg mb-8">
            Todo el contenido en video e imagen de SCW está en nuestras redes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/scwmorelia/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center justify-center gap-2"
            >
              📸 Instagram @scwmorelia
            </a>
            <a
              href="https://www.facebook.com/scwmorelia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center justify-center gap-2"
            >
              📘 Facebook SCW Morelia
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
