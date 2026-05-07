"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) {
        setEnded(true);
        return;
      }
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

  if (ended) {
    return (
      <p className="font-bebas text-2xl text-[#D4A017] tracking-widest">
        ¡Evento en curso!
      </p>
    );
  }

  const units = [
    { value: time.days, label: "Días" },
    { value: time.hours, label: "Horas" },
    { value: time.minutes, label: "Min" },
    { value: time.seconds, label: "Seg" },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-black border border-[#D4A017]/40 rounded-sm w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center shadow-[0_0_10px_rgba(212,160,23,0.2)]">
              <span className="font-bebas text-2xl sm:text-3xl text-[#D4A017]">
                {pad(value)}
              </span>
            </div>
            <span className="font-oswald text-[10px] text-gray-500 tracking-widest uppercase mt-1">
              {label}
            </span>
          </div>
          {i < 3 && (
            <span className="font-bebas text-2xl text-[#D4A017]/50 mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
