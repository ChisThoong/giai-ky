"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/landing/section-reveal";

export function ConsultationCta() {
  return (
    <SectionReveal as="section" className="py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-4">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[360px]">
          <Image
            src="/images/jade-collection-flatlay.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-forest/75 backdrop-blur-[2px]" />

          <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
            >
              Tư vấn 1:1 miễn phí
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 max-w-2xl font-heading text-3xl font-semibold uppercase leading-tight tracking-wide text-cream sm:text-4xl md:text-[2.75rem]"
            >
              Sở hữu một báu vật
              <br />
              cho riêng bạn
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 max-w-md text-sm text-cream/70"
            >
              Đặt lịch tư vấn trực tiếp cùng nghệ nhân Giai Kỳ — phản hồi trong
              15 phút.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="mt-8"
            >
              <Button className="h-12 rounded-full bg-cream px-8 text-sm font-semibold text-forest hover:bg-cream/90">
                <Calendar className="size-5" />
                Đặt lịch ngay
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
