"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string; caption?: string };

const SLIDES: Slide[] = [
  { src: "/Depoimento 2.webp", alt: "Print real de aluna — Depoimento 1" },
  { src: "/Depoimento 3.webp", alt: "Print real de aluna — Depoimento 2" },
  { src: "/Depoimento 4.png", alt: "Print real de aluna — Depoimento 3" },
  { src: "/Depoimento 5.png", alt: "Print real de aluna — Depoimento 4" },
  { src: "/Depoimento 6.png", alt: "Print real de aluna — Depoimento 5" },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(1); // 1 on mobile, 3 on desktop
  const max = SLIDES.length;
  const timer = useRef<NodeJS.Timeout | null>(null);
  const hoverRef = useRef(false);

  // Responsive visible items
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setVisible(mql.matches ? 3 : 1);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const goTo = (i: number) => setIndex(((i % max) + max) % max);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    if (hoverRef.current) return;
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % max);
    }, 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [max]);

  const onMouseEnter = () => {
    hoverRef.current = true;
    if (timer.current) clearInterval(timer.current);
  };
  const onMouseLeave = () => {
    hoverRef.current = false;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % max);
    }, 4500);
  };

  const itemBasis = `${100 / visible}%`;
  const translatePct = index * (100 / visible);

  return (
    <div className="relative select-none" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${translatePct}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div key={`${s.src}-${i}`} style={{ flex: `0 0 ${itemBasis}` }} className="relative h-56 md:h-64">
              <Image src={s.src} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 1200px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/80 dark:bg-black/40 text-rose-600 shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        aria-label="Próximo"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/80 dark:bg-black/40 text-rose-600 shadow hover:bg-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para depoimento ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-rose-600" : "bg-rose-300/60 hover:bg-rose-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
