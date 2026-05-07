import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function SocialBanner() {
  return (
    <section className="py-16 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-2">
              SÍGUENOS EN REDES
            </p>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white">
              No te pierdas nada
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/scwmorelia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 rounded-sm border border-white/10 bg-[#0a0a0a] hover:border-pink-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-pink-900/20"
            >
              <InstagramIcon size={28} className="text-pink-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bebas text-white text-lg leading-none tracking-wider">@scwmorelia</p>
                <p className="font-oswald text-gray-500 text-xs tracking-widest uppercase">Instagram</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/scwmorelia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-6 py-4 rounded-sm border border-white/10 bg-[#0a0a0a] hover:border-blue-500/50 transition-all duration-300 hover:bg-blue-900/10"
            >
              <FacebookIcon size={28} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-bebas text-white text-lg leading-none tracking-wider">SCW Strong Classic Wrestling</p>
                <p className="font-oswald text-gray-500 text-xs tracking-widest uppercase">Facebook · 4,600+ seguidores</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
