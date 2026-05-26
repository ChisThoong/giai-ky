"use client";

import { FileBadge, Gem, Hammer, Shield } from "lucide-react";
import { commitments } from "@/data/landing-data";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/landing/section-reveal";

const iconMap = {
  gem: Gem,
  "file-badge": FileBadge,
  hammer: Hammer,
  shield: Shield,
};

export function CommitmentsSection() {
  return (
    <SectionReveal as="section" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Cam kết
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Niềm tin của Giai Kỳ
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem
                key={item.title}
                className="group rounded-3xl border border-border/60 bg-white p-6 shadow-soft transition-all hover:border-gold/30 hover:shadow-soft-lg"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-forest/5 transition-colors group-hover:bg-forest/10">
                  <Icon className="size-6 text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
