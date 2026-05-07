"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const topics = [
  "Información general",
  "Boletos para evento",
  "Contratar a SCW",
  "Inscripción al Dojo",
  "Patrocinio / Colaboración",
  "Otro",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to email service (Resend, Nodemailer, etc.)
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 rounded-sm border border-[#D4A017]/30 bg-[#D4A017]/5 text-center">
        <div className="w-16 h-16 rounded-full border-2 border-[#D4A017] flex items-center justify-center mb-6 shadow-gold-glow">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="font-bebas text-3xl text-[#D4A017] tracking-widest mb-2">¡Mensaje enviado!</h3>
        <p className="font-oswald text-gray-400 text-base">Nos pondremos en contacto contigo pronto.</p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 btn-outline-gold px-6 py-3 text-sm rounded-sm font-bebas tracking-widest"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="font-bebas text-[#D4A017] tracking-[0.4em] text-sm mb-6">ENVÍANOS UN MENSAJE</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-bebas text-gray-400 tracking-widest text-xs mb-2">
            Nombre *
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Tu nombre"
            className="w-full bg-[#111] border border-white/10 focus:border-[#D4A017]/50 rounded-sm px-4 py-3 font-oswald text-white text-sm placeholder-gray-600 outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block font-bebas text-gray-400 tracking-widest text-xs mb-2">
            Email *
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="tu@email.com"
            className="w-full bg-[#111] border border-white/10 focus:border-[#D4A017]/50 rounded-sm px-4 py-3 font-oswald text-white text-sm placeholder-gray-600 outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-bebas text-gray-400 tracking-widest text-xs mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="443 000 0000"
          className="w-full bg-[#111] border border-white/10 focus:border-[#D4A017]/50 rounded-sm px-4 py-3 font-oswald text-white text-sm placeholder-gray-600 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block font-bebas text-gray-400 tracking-widest text-xs mb-2">
          Asunto *
        </label>
        <select
          required
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className="w-full bg-[#111] border border-white/10 focus:border-[#D4A017]/50 rounded-sm px-4 py-3 font-oswald text-sm outline-none transition-colors text-gray-300"
        >
          <option value="" disabled>Selecciona un asunto</option>
          {topics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-bebas text-gray-400 tracking-widest text-xs mb-2">
          Mensaje *
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          className="w-full bg-[#111] border border-white/10 focus:border-[#D4A017]/50 rounded-sm px-4 py-3 font-oswald text-white text-sm placeholder-gray-600 outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-gold w-full py-4 text-xl rounded-sm uppercase tracking-widest font-bebas inline-flex items-center justify-center gap-3"
      >
        <Send size={18} /> Enviar Mensaje
      </button>

      <p className="font-oswald text-gray-600 text-xs text-center">
        También puedes escribirnos directamente a{" "}
        <a href="mailto:scwdojo@gmail.com" className="text-[#D4A017] hover:underline">
          scwdojo@gmail.com
        </a>
      </p>
    </form>
  );
}
