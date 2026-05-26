"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "@/data/landing-data";

const AUTOPLAY_MS = 6500;

const bgVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
};

const contentVariants = {
  enter: (direction: number) => ({ opacity: 0, y: direction > 0 ? 16 : -16 }),
  center: { opacity: 1, y: 0 },
  exit: (direction: number) => ({ opacity: 0, y: direction > 0 ? -16 : 16 }),
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const slide = heroSlides[current];
  const total = heroSlides.length;

  const goTo = useCallback(
    (index: number, dir?: number) => {
      setDirection(dir ?? (index > current ? 1 : -1));
      setCurrent((index + total) % total);
    },
    [current, total]
  );

  const next = useCallback(() => goTo((current + 1) % total, 1), [current, goTo, total]);
  const prev = useCallback(() => goTo((current - 1 + total) % total, -1), [current, goTo, total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="relative min-h-[560px] overflow-hidden sm:min-h-[600px] lg:min-h-[640px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Banner chính"
    >
      {/* Background image — full bleed */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={current === 0}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient nhẹ bên trái giúp text dễ đọc */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/50 to-transparent sm:from-cream/80 sm:via-cream/35" />
        </motion.div>
      </AnimatePresence>

      {/* Badge — giữa toàn bộ background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${slide.id}-badge`}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35 }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-charcoal/5 bg-white/95 text-center shadow-soft-lg backdrop-blur-sm sm:size-32"
        >
          <span className="text-[9px] font-bold uppercase tracking-widest text-charcoal/45">
            {slide.badge.prefix}
          </span>
          <span className="font-heading text-2xl font-bold leading-none text-forest sm:text-3xl">
            {slide.badge.value}
          </span>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-charcoal/45">
            {slide.badge.suffix}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div
        className="relative z-10 mx-auto flex h-full min-h-[560px] max-w-7xl flex-col px-4 py-12 sm:min-h-[600px] sm:py-16 lg:min-h-[640px] lg:py-20"
        onPointerDown={(e) => {
          const startX = e.clientX;
          const onUp = (ev: PointerEvent) => {
            const diff = ev.clientX - startX;
            if (diff < -50) next();
            else if (diff > 50) prev();
            window.removeEventListener("pointerup", onUp);
          };
          window.addEventListener("pointerup", onUp);
        }}
      >
        <div className="flex flex-1 flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <p className="mb-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/55">
                <span className="text-charcoal/35">—</span>
                {slide.tag}
                <span className="text-charcoal/25">|</span>
                {slide.tagDays}
              </p>

              <h1 className="font-heading text-[2.25rem] font-normal leading-[1.15] text-charcoal sm:text-5xl lg:text-[3.25rem]">
                {slide.titleBefore}
                <em className="font-heading italic text-gold">{slide.titleHighlight}</em>
                {slide.titleAfter}
              </h1>

              <div className="mt-5 space-y-1 text-sm leading-relaxed text-charcoal/60 sm:text-base">
                <p>{slide.description}</p>
                <p>{slide.descriptionSub}</p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-cream transition-colors hover:bg-forest/90"
                >
                  {slide.primaryCta}
                  <ArrowRight className="size-4" />
                </button>
                <Link
                  href={slide.secondaryHref}
                  className="inline-flex h-12 items-center rounded-full border border-charcoal/15 bg-white/90 px-6 text-sm font-medium text-charcoal/75 backdrop-blur-sm transition-colors hover:border-charcoal/25"
                >
                  {slide.secondaryCta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider controls — góc phải dưới */}
        <div className="mt-auto flex items-center justify-end gap-5 pb-2">
          <span className="font-heading text-sm tabular-nums text-charcoal/40">
            <span className="font-semibold text-charcoal/70">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="mx-3 tracking-[0.3em] text-charcoal/25">—</span>
            {String(total).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Slide trước"
              onClick={prev}
              className="flex size-9 items-center justify-center rounded-full border border-charcoal/10 bg-white/80 text-charcoal/50 backdrop-blur-sm transition-all hover:border-charcoal/20 hover:text-forest"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Slide tiếp"
              onClick={next}
              className="flex size-9 items-center justify-center rounded-full border border-charcoal/10 bg-white/80 text-charcoal/50 backdrop-blur-sm transition-all hover:border-charcoal/20 hover:text-forest"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
