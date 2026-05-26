"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/landing-data";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/landing/section-reveal";

export function ProductCategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <SectionReveal as="section" id="categories" className="border-y border-border/50 bg-white/40 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Danh mục
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold text-charcoal sm:text-3xl">
              Danh mục sản phẩm
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Cuộn trái"
              onClick={() => scroll("left")}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-cream text-charcoal/60 transition-colors hover:border-gold/40 hover:text-forest"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Cuộn phải"
              onClick={() => scroll("right")}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-cream text-charcoal/60 transition-colors hover:border-gold/40 hover:text-forest"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          <StaggerContainer className="flex gap-6 snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:gap-5 lg:snap-none">
          {categories.map((category) => (
            <StaggerItem
              key={category.id}
              className="w-[148px] shrink-0 snap-center sm:w-[168px] lg:w-auto"
            >
              <Link
                href={`#featured`}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/70 bg-secondary shadow-soft transition-all duration-300 group-hover:border-gold/40 group-hover:shadow-soft-lg sm:rounded-3xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 148px, 168px"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-charcoal transition-colors group-hover:text-forest">
                  {category.name}
                </h3>
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-gold">
                  Xem ngay
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
          </StaggerContainer>
        </div>
      </div>
    </SectionReveal>
  );
}
