"use client";

import {
  Award,
  Headset,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { trustItems } from "@/data/landing-data";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/landing/section-reveal";

const iconMap = {
  "shield-check": ShieldCheck,
  truck: Truck,
  "rotate-ccw": RotateCcw,
  award: Award,
  headset: Headset,
};

export function TrustBar() {
  return (
    <section className="border-y border-border/70 bg-cream">
      <StaggerContainer className="mx-auto flex max-w-7xl flex-col divide-y divide-border/70 px-4 sm:flex-row sm:divide-x sm:divide-y-0">
        {trustItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <StaggerItem
              key={item.title}
              className="flex flex-1 items-center gap-3 py-5 sm:flex-col sm:px-4 sm:py-8 sm:text-center lg:px-6"
            >
              <Icon className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-semibold text-charcoal sm:text-sm">
                  {item.title}
                </p>
                <p className="mt-0.5 hidden text-xs text-charcoal/50 sm:block">
                  {item.subtitle}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}
