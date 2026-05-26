"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/landing-data";
import { SectionReveal } from "@/components/landing/section-reveal";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;
const DURATION = 1.05;
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/**
 * Vị trí 1 = trái (featured)
 * Vị trí 2 = phải trên
 * Vị trí 3 = phải dưới
 *
 * Mỗi lần chuyển: 1→2, 2→3, 3→1 (xoay theo chiều kim đồng hồ)
 */
const POSITIONS = {
  0: { left: 0, top: 0, width: 55, height: 100 },   // 1 — trái
  1: { left: 60, top: 0, width: 40, height: 46 },   // 2 — phải trên
  2: { left: 60, top: 54, width: 40, height: 46 }, // 3 — phải dưới
} as const;

type Position = 0 | 1 | 2;
type Slots = [number, number, number]; // testimonial index tại [vị trí1, vị trí2, vị trí3]

const INITIAL_SLOTS: Slots = [0, 1, 2];

function posStyle(pos: Position) {
  const p = POSITIONS[pos];
  return {
    left: `${p.left}%`,
    top: `${p.top}%`,
    width: `${p.width}%`,
    height: `${p.height}%`,
  };
}

/** Cạnh tam giác: 1→2, 2→3, 3→1 (và ngược chiều) */
function getEdgeKeyframes(from: Position, to: Position) {
  const a = POSITIONS[from];
  const b = POSITIONS[to];
  return {
    left: [`${a.left}%`, `${b.left}%`],
    top: [`${a.top}%`, `${b.top}%`],
    width: [`${a.width}%`, `${b.width}%`],
    height: [`${a.height}%`, `${b.height}%`],
  };
}

/** Xoay thuận: ai ở 1→2, 2→3, 3→1 */
function rotateSlotsForward(slots: Slots): Slots {
  return [slots[2], slots[0], slots[1]];
}

function rotateSlotsBackward(slots: Slots): Slots {
  return [slots[1], slots[2], slots[0]];
}

function getTestimonialPosition(testimonialIndex: number, slots: Slots): Position {
  return slots.indexOf(testimonialIndex) as Position;
}

const contentEase = { duration: 0.45, ease: EASE };

function FeaturedContent({
  item,
  isPaused,
  showProgress,
}: {
  item: (typeof testimonials)[number];
  isPaused: boolean;
  showProgress?: boolean;
}) {
  return (
    <>
      <span
        className="pointer-events-none absolute -left-2 -top-4 font-heading text-[8rem] leading-none text-gold/10"
        aria-hidden
      >
        &ldquo;
      </span>
      <p className="relative font-heading text-xl font-medium leading-relaxed text-charcoal lg:text-[1.65rem] lg:leading-relaxed">
        {item.quote}
      </p>
      <footer className="relative mt-auto flex flex-wrap items-center gap-4 border-t border-border/60 pt-6">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-forest font-heading text-sm font-semibold text-gold">
          {item.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-charcoal">{item.name}</p>
          <p className="text-sm text-charcoal/50">{item.role}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="size-4 fill-gold text-gold" />
          ))}
        </div>
      </footer>
      {showProgress && !isPaused && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gold/80"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
        />
      )}
    </>
  );
}

function CompactContent({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <>
      <div className="absolute bottom-5 left-0 top-5 w-1 rounded-full bg-gradient-to-b from-gold/80 to-gold/20" />
      <p className="line-clamp-3 flex-1 pl-2 text-sm leading-relaxed text-charcoal/70">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-4 flex items-center justify-between gap-3 pl-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-charcoal">{item.name}</p>
          <p className="truncate text-xs text-charcoal/45">{item.role}</p>
        </div>
        <div className="flex shrink-0 gap-0.5">
          {Array.from({ length: item.rating }).map((_, i) => (
            <Star key={i} className="size-3 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </>
  );
}

export function TestimonialsSection() {
  const [slots, setSlots] = useState<Slots>(INITIAL_SLOTS);
  const [isPaused, setIsPaused] = useState(false);
  const prevSlotsRef = useRef<Slots>(INITIAL_SLOTS);
  const chainTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featuredIndex = slots[0];

  const rotateForward = useCallback(() => {
    setSlots((current) => {
      prevSlotsRef.current = current;
      return rotateSlotsForward(current);
    });
  }, []);

  const rotateBackward = useCallback(() => {
    setSlots((current) => {
      prevSlotsRef.current = current;
      return rotateSlotsBackward(current);
    });
  }, []);

  const bringToFeatured = useCallback(
    (testimonialIndex: number) => {
      const pos = getTestimonialPosition(testimonialIndex, slots);
      if (pos === 0) return;

      if (chainTimerRef.current) clearTimeout(chainTimerRef.current);

      const runSteps = (remaining: number) => {
        rotateForward();
        if (remaining > 1) {
          chainTimerRef.current = setTimeout(() => runSteps(remaining - 1), DURATION * 1000 + 60);
        }
      };
      runSteps(pos);
    },
    [slots, rotateForward]
  );

  useEffect(() => {
    return () => {
      if (chainTimerRef.current) clearTimeout(chainTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(rotateForward, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, rotateForward]);

  useEffect(() => {
    const syncTimer = setTimeout(() => {
      prevSlotsRef.current = slots;
    }, DURATION * 1000 + 80);
    return () => clearTimeout(syncTimer);
  }, [slots]);

  return (
    <SectionReveal as="section" className="overflow-hidden bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Phản hồi
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Khách hàng nói về chúng tôi
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border/70 bg-white px-5 py-2.5 shadow-soft">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-charcoal">5.0</span>
            <span className="text-xs text-charcoal/45">· {testimonials.length} đánh giá</span>
          </div>
        </div>

        {/* Mobile */}
        <div
          className="lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <FeaturedContent
                  item={testimonials[featuredIndex]}
                  isPaused={isPaused}
                  showProgress
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => bringToFeatured(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === featuredIndex ? "w-8 bg-gold" : "w-1.5 bg-charcoal/20"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={rotateBackward} aria-label="Trước" className="flex size-9 items-center justify-center rounded-full border border-border bg-white">
                <ChevronLeft className="size-4" />
              </button>
              <button type="button" onClick={rotateForward} aria-label="Sau" className="flex size-9 items-center justify-center rounded-full border border-border bg-white">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop — xoay 1→2→3→1 */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Phản hồi khách hàng"
        >
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-[460px] w-full text-gold/15"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            {/* Cạnh 1→2, 2→3, 3→1 */}
            <polyline
              points="0,4 60,4 60,96 0,4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              strokeDasharray="1.5 2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative z-10 h-[460px] w-full">
            {testimonials.map((item, itemIndex) => {
              const toPos = getTestimonialPosition(itemIndex, slots);
              const fromPos = getTestimonialPosition(itemIndex, prevSlotsRef.current);
              const isMoving = fromPos !== toPos;
              const frames = getEdgeKeyframes(fromPos, toPos);
              const resting = posStyle(toPos);
              const isFeatured = toPos === 0;

              return (
                <motion.div
                  key={item.id}
                  role={isFeatured ? undefined : "button"}
                  tabIndex={isFeatured ? -1 : 0}
                  onClick={() => {
                    if (!isFeatured) bringToFeatured(itemIndex);
                  }}
                  onKeyDown={(e) => {
                    if (!isFeatured && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      bringToFeatured(itemIndex);
                    }
                  }}
                  initial={false}
                  animate={
                    isMoving
                      ? {
                          left: frames.left,
                          top: frames.top,
                          width: frames.width,
                          height: frames.height,
                        }
                      : {
                          left: resting.left,
                          top: resting.top,
                          width: resting.width,
                          height: resting.height,
                        }
                  }
                  transition={{
                    duration: isMoving ? DURATION : 0,
                    ease: EASE,
                  }}
                  style={{
                    position: "absolute",
                    zIndex: isFeatured ? 30 : isMoving ? 25 : 10 - toPos,
                  }}
                  className={cn(
                    "flex flex-col overflow-hidden rounded-3xl bg-white",
                    isFeatured
                      ? "cursor-default p-10 shadow-soft-lg ring-1 ring-border/20"
                      : "cursor-pointer border border-border/50 p-6 pl-8 shadow-soft hover:border-gold/35 hover:shadow-soft-lg"
                  )}
                >
                  <AnimatePresence mode="wait">
                    {isFeatured ? (
                      <motion.div
                        key="featured"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={contentEase}
                        className="flex h-full flex-col"
                      >
                        <FeaturedContent
                          item={item}
                          isPaused={isPaused}
                          showProgress
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="compact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={contentEase}
                        className="relative flex h-full flex-col"
                      >
                        <CompactContent item={item} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-20 mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Xem phản hồi của ${item.name}`}
                  aria-current={i === featuredIndex ? "true" : undefined}
                  onClick={() => bringToFeatured(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500 ease-out",
                    i === featuredIndex ? "w-8 bg-gold" : "w-1.5 bg-charcoal/20 hover:bg-charcoal/35"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Phản hồi trước"
                onClick={rotateBackward}
                className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-charcoal/60 transition-colors hover:border-gold/40 hover:text-forest"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Phản hồi tiếp theo"
                onClick={rotateForward}
                className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-charcoal/60 transition-colors hover:border-gold/40 hover:text-forest"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
