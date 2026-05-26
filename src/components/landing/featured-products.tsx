"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  formatPrice,
  productFilters,
  products,
  type ProductCategory,
} from "@/data/landing-data";
import { SectionReveal } from "@/components/landing/section-reveal";
import { cn } from "@/lib/utils";

function badgeStyle(badge: string) {
  if (badge.includes("GIẢM") || badge.includes("TIẾT")) return "bg-gold/90 text-white";
  if (badge === "HOT") return "bg-red-600/90 text-white";
  if (badge === "MỚI") return "bg-forest/90 text-cream";
  return "bg-charcoal/80 text-white";
}

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory>("all");

  const filtered = (
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter)
  ).slice(0, 6);

  return (
    <SectionReveal as="section" id="featured" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header + filters — một hàng như demo */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Bộ sưu tập nổi bật
          </h2>
          <div className="flex flex-wrap gap-2">
            {productFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all",
                  activeFilter === filter.id
                    ? "bg-forest text-cream"
                    : "bg-white text-charcoal/55 ring-1 ring-border hover:text-forest"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-column grid */}
        <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow hover:shadow-soft-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.badge && (
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide",
                        badgeStyle(product.badge)
                      )}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="relative p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold">
                    {product.categoryLabel}
                    <span className="text-charcoal/35"> · {product.origin}</span>
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-charcoal">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-3.5",
                          i < Math.floor(product.rating)
                            ? "fill-gold text-gold"
                            : "fill-border text-border"
                        )}
                      />
                    ))}
                    <span className="ml-1 text-xs text-charcoal/45">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <div>
                      <span className="text-lg font-bold text-forest">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-charcoal/35 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      aria-label="Thêm vào giỏ"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors hover:bg-gold hover:text-white"
                    >
                      <ShoppingBag className="size-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
