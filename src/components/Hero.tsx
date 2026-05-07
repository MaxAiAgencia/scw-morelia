"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";

/* ── Lightning bolt SVG lines ── */
function LightningBolt({
  x1, y1, x2, y2, delay = 0, color = "#3b9eff",
}: {
  x1: string; y1: string; x2: string; y2: string;
  delay?: number; color?: string;
}) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color} strokeWidth="1.5" strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.9, 0.9, 0] }}
      transition={{ duration: 0.4, delay, repeat: Infinity, repeatDelay: 3 + Math.random() * 4 }}
    />
  );
}

/* ── Animated electric border ── */
function ElectricBorder() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      {/* Background lightning network */}
      <LightningBolt x1="10%" y1="0%" x2="30%" y2="40%" delay={0} color="#3b9eff" />
      <LightningBolt x1="30%" y1="40%" x2="20%" y2="70%" delay={0.1} color="#3b9eff" />
      <LightningBolt x1="20%" y1="70%" x2="40%" y2="100%" delay={0.2} color="#3b9eff" />

      <LightningBolt x1="80%" y1="0%" x2="65%" y2="35%" delay={1.5} color="#3b9eff" />
      <LightningBolt x1="65%" y1="35%" x2="75%" y2="65%" delay={1.6} color="#3b9eff" />
      <LightningBolt x1="75%" y1="65%" x2="60%" y2="100%" delay={1.7} color="#3b9eff" />

      <LightningBolt x1="50%" y1="5%" x2="45%" y2="25%" delay={3} color="#D4A017" />
      <LightningBolt x1="45%" y1="25%" x2="55%" y2="50%" delay={3.1} color="#D4A017" />

      <LightningBolt x1="5%" y1="50%" x2="25%" y2="55%" delay={5} color="#3b9eff" />
      <LightningBolt x1="90%" y1="30%" x2="70%" y2="45%" delay={6} color="#3b9eff" />
    </svg>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function HeroCountdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { v: time.days, l: "Días" },
    { v: time.hours, l: "Horas" },
    { v: time.minutes, l: "Min" },
    { v: time.seconds, l: "Seg" },
  ];

  return (
    <div className="flex items-end gap-2 sm:gap-3">
      {units.map(({ v, l }, i) => (
        <div key={l} className="flex items-end gap-2 sm:gap-3">
          <div className="flex flex-col items-center">
            {/* Number box */}
            <div
              className="relative w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] flex items-center justify-center rounded-sm"
              style={{
                background: "linear-gradient(145deg, #111 0%, #0a0a0a 100%)",
                border: "1px solid rgba(212,160,23,0.25)",
                boxShadow: "0 0 12px rgba(212,160,23,0.1), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Top shine line */}
              <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />
              <span className="font-bebas text-4xl sm:text-5xl text-[#D4A017] tabular-nums leading-none" style={{ textShadow: "0 0 20px rgba(212,160,23,0.4)" }}>
                {pad(v)}
              </span>
            </div>
            <span className="font-oswald text-[10px] text-gray-500 tracking-widest uppercase mt-1.5">{l}</span>
          </div>
          {i < 3 && (
            <div className="pb-6 text-[#D4A017]/40">
              <span className="font-bebas text-3xl leading-none">:</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const posterY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]">

      {/* ── Deep background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_50%,rgba(10,20,50,0.95)_0%,#050508_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(20,10,10,0.8)_0%,transparent_70%)]" />

      {/* Electric blue ambient glow from right */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-[radial-gradient(ellipse_80%_100%_at_100%_50%,rgba(30,80,200,0.18)_0%,transparent_65%)]" />
      <div className="absolute right-1/4 top-1/4 w-96 h-96 rounded-full bg-[radial-gradient(ellipse,rgba(59,158,255,0.12)_0%,transparent_70%)] blur-3xl" />

      {/* Gold glow from left */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_60%_80%_at_0%_60%,rgba(212,160,23,0.07)_0%,transparent_70%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "linear-gradient(rgba(59,158,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(59,158,255,1) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Lightning SVG layer */}
      <div className="absolute inset-0 overflow-hidden">
        <ElectricBorder />
      </div>

      {/* ── Poster (right side, parallax) ── */}
      <motion.div
        style={{ y: posterY }}
        className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[50%] pointer-events-none"
      >
        {/* Poster image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/evento.jpg"
            alt="Strong Style Friday Nites 2"
            fill
            className="object-cover object-top"
            sizes="50vw"
            priority
          />
          {/* Fade mask — left edge blends into dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/30 to-transparent" />
          {/* Top fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/60 via-transparent to-[#050508]/80" />
          {/* Electric overlay on poster */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,158,255,0.08)_0%,transparent_60%)] mix-blend-screen" />
        </div>
      </motion.div>

      {/* ── Main content (left side) ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div className="max-w-[600px]">

          {/* Event badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 bg-[#3b9eff]/10 border border-[#3b9eff]/30 px-4 py-2 rounded-sm">
              <Zap size={14} className="text-[#3b9eff]" fill="#3b9eff" />
              <span className="font-bebas text-[#3b9eff] text-sm tracking-[0.4em]">PRÓXIMO EVENTO</span>
              <Zap size={14} className="text-[#3b9eff]" fill="#3b9eff" />
            </div>
          </motion.div>

          {/* Event title */}
          <div className="overflow-hidden mb-1">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[clamp(2.2rem,5vw,4rem)] text-white leading-none tracking-wide"
            >
              Strong Style
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-tight"
            >
              <span className="text-gold-gradient">Friday</span>
              <span className="text-white"> Nites</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-end gap-4"
            >
              {/* Big "2" */}
              <span
                className="font-bebas leading-none text-[clamp(5rem,14vw,11rem)] text-stroke-gold"
                style={{ lineHeight: 0.85 }}
              >
                2
              </span>
              <div className="pb-3">
                <p className="font-bebas text-[#3b9eff] tracking-[0.3em] text-base leading-none mb-1">SCW PRESENTA</p>
                <p className="font-oswald text-gray-300 text-sm tracking-wider leading-relaxed">
                  The Wrestling Factory<br />
                  <span className="text-gray-500">Av. Michoacán #614, Morelia</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{ originX: 0 }}
            className="divider-gold mb-6 max-w-xs"
          />

          {/* Date + BIG countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-8"
          >
            {/* Date row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-10 bg-gradient-to-b from-[#D4A017] to-[#3b9eff]" />
              <div>
                <p className="font-bebas text-white text-2xl leading-none tracking-widest">Viernes 08 de Mayo</p>
                <p className="font-oswald text-[#D4A017] text-sm tracking-widest">7:30 PM · The Wrestling Factory</p>
              </div>
            </div>
            {/* Big countdown block */}
            <div className="border border-white/8 bg-black/40 backdrop-blur-sm rounded-sm p-4 inline-block">
              <p className="font-bebas text-[#3b9eff] tracking-[0.4em] text-xs mb-3">CUENTA REGRESIVA</p>
              <HeroCountdown targetDate="2026-05-08T19:30:00" />
            </div>
          </motion.div>

          {/* Main event */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mb-8 px-4 py-3 border-l-2 border-[#3b9eff] bg-[#3b9eff]/5"
          >
            <p className="font-bebas text-[#3b9eff] tracking-[0.3em] text-xs mb-1">COMBATE ESTELAR</p>
            <p className="font-bebas text-white text-lg tracking-wide">Aero Panther vs. El Príncipe</p>
            <p className="font-oswald text-gray-400 text-xs tracking-widest uppercase">Campeonato Crucero SCW</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/eventos"
              className="btn-red px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2 shadow-red-glow"
            >
              🎟 Ver Cartelera
            </Link>
            <Link
              href="/dojo"
              className="btn-outline-gold px-8 py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center gap-2"
            >
              🥊 SCW Dojo
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-8 mt-12 pt-6 border-t border-white/5"
          >
            {[
              { value: "4,600+", label: "Seguidores" },
              { value: "11", label: "Luchadores" },
              { value: "SCW", label: "Dojo Activo" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-bebas text-2xl text-gold-gradient leading-none">{value}</p>
                <p className="font-oswald text-[10px] text-gray-600 tracking-widest uppercase mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3b9eff]/60"
      >
        <span className="font-bebas tracking-widest text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
