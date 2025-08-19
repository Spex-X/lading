"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  caption?: string;
};

const SLIDES: Slide[] = [
  { src: "/Imagem 15.png", alt: "Brigadeiros gourmet com brilho e cobertura uniforme, apresentação profissional", caption: "Apresentação profissional e brilho impecável" },
  { src: "/Imagem 8.jpg", alt: "Brigadeiro gourmet — cobertura belga e acabamento brilhante", caption: "Cobertura belga e acabamento brilhante" },
  { src: "/Imagem 10.jpg", alt: "Frutas vermelhas — contraste de cores e sabor equilibrado", caption: "Contraste de cores e sabor equilibrado" },
  { src: "/Imagem 11.jpg", alt: "Clássico com releitura — textura aveludada e formato padronizado", caption: "Textura aveludada e formato padronizado" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const max = SLIDES.length;
  const timer = useRef<NodeJS.Timeout | null>(null);
  const hoverRef = useRef(false);

  const goTo = (i: number) => setIndex((i + max) % max);
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

  const slide = useMemo(() => SLIDES[index], [index]);

  return (
    <div className="relative select-none" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-background/70">
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1200}
          height={800}
          className="w-full h-auto object-cover transition-opacity duration-500"
          priority
        />
      </div>

      {slide.caption && (
        <p className="mt-3 text-center text-xs md:text-sm opacity-80 italic">{slide.caption}</p>
      )}

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
            aria-label={`Ir para slide ${i + 1}`}
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
