"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { collectionCards } from "@/data/landing-data";
import { SectionReveal } from "@/components/landing/section-reveal";

export function CategorySection() {
  return (
    <SectionReveal as="section" id="collections" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12 xl:gap-16">
          {/* Left — copy + CTAs */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Bộ sưu tập
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
              Mỗi viên —
              <br />
              một câu chuyện
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/60 sm:text-base">
              Từ Phỉ Thúy Myanmar đến Hòa Điền tím lam và ngọc Lục Yên — mỗi
              dòng ngọc mang một sắc thái, một giá trị riêng biệt.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#featured"
                className="inline-flex h-11 items-center gap-1.5 rounded-full bg-forest px-6 text-sm font-medium text-cream transition-colors hover:bg-forest/90"
              >
                Tất cả bộ sưu tập
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#blog"
                className="inline-flex h-11 items-center rounded-full border border-border bg-white px-6 text-sm font-medium text-charcoal transition-colors hover:bg-secondary"
              >
                Hướng dẫn chọn ngọc
              </Link>
            </div>
          </div>

          {/* Right — 3 dark vertical cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {collectionCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={card.href}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-forest shadow-soft-lg transition-shadow hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0a1f16]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="relative p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {card.region}
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-semibold text-cream">
                      {card.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-cream/60">
                      {card.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-cream/15 pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cream/70">
                        {card.count} sản phẩm
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors group-hover:bg-gold group-hover:text-white">
                        <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
