"use client";

import { FileBadge, Gem, Hammer, Shield } from "lucide-react";
import { commitments } from "@/data/landing-data";
import { SectionReveal } from "@/components/landing/section-reveal";
import { motion } from "framer-motion";

const iconMap = {
  gem: Gem,
  "file-badge": FileBadge,
  hammer: Hammer,
  shield: Shield,
};

export function CommitmentsSection() {
  return (
    <SectionReveal as="section" className="bg-forest py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16 xl:gap-20">
          {/* Left — editorial intro */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Cam kết
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-cream sm:text-4xl">
              Niềm tin
              <br />
              của Giai Kỳ
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              Mỗi viên ngọc đều mang theo lời hứa minh bạch — từ nguồn gốc đến
              bảo hành trọn đời.
            </p>
            <div className="mt-8 flex items-center gap-6 border-t border-cream/10 pt-8">
              <div>
                <p className="font-heading text-3xl font-semibold text-gold">100%</p>
                <p className="mt-1 text-xs text-cream/50">Ngọc tự nhiên</p>
              </div>
              <div className="h-10 w-px bg-cream/15" />
              <div>
                <p className="font-heading text-3xl font-semibold text-gold">GIA</p>
                <p className="mt-1 text-xs text-cream/50">Kiểm định chuẩn</p>
              </div>
            </div>
          </div>

          {/* Right — numbered list, no card grid */}
          <div className="divide-y divide-cream/10 border-y border-cream/10">
            {commitments.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group grid gap-5 py-7 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-8 md:grid-cols-[72px_48px_1fr] md:gap-8"
                >
                  <span className="font-heading text-2xl font-semibold text-gold/40 transition-colors group-hover:text-gold sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex size-12 items-center justify-center rounded-xl border border-cream/10 bg-cream/5 transition-colors group-hover:border-gold/30 group-hover:bg-gold/10 sm:size-12">
                    <Icon className="size-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="sm:col-span-2 md:col-span-1">
                    <h3 className="font-heading text-xl font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/55">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
