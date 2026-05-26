"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/landing/section-reveal";

const stats = [
  { value: "52+", label: "Năm chế tác" },
  { value: "14K+", label: "Khách hàng" },
  { value: "100%", label: "Có kiểm định" },
];

const timeline = [
  { year: "1972", label: "Khởi nguồn xưởng chế tác tại Lục Yên" },
  { year: "1990", label: "Mở rộng bộ sưu tập Phỉ Thúy" },
  { year: "Hiện tại", label: "Thế hệ thứ ba nghệ nhân" },
];

export function BrandStory() {
  return (
    <SectionReveal as="section" id="brand-story" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        {/* Left — single dark image card + timeline */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-forest shadow-soft-lg sm:aspect-[3/4]">
            <Image
              src="/images/brand-artisan.jpg"
              alt="Nghệ nhân chế tác ngọc Giai Kỳ"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />

            <div className="absolute inset-x-0 top-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Di sản
              </p>
              <p className="mt-2 max-w-[200px] font-heading text-2xl font-semibold leading-tight text-cream">
                Ba thế hệ chế tác tinh hoa ngọc Việt
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-cream/10 bg-forest/80 p-5 backdrop-blur-sm sm:p-6">
              <div className="grid grid-cols-3 gap-3">
                {timeline.map((item) => (
                  <div key={item.year}>
                    <p className="font-heading text-sm font-bold text-gold">{item.year}</p>
                    <p className="mt-1 text-[10px] leading-snug text-cream/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — text on cream */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-heading text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
            Ba thế hệ chế tác
            <br />
            tinh hoa ngọc Việt
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-charcoal/65 sm:text-base">
            Từ xưởng chế tác nhỏ tại Lục Yên năm 1972, Giai Kỳ đã trải qua ba thế
            hệ nghệ nhân — giữ trọn tinh thần tôn vinh vẻ đẹp tự nhiên của từng
            viên ngọc.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65 sm:text-base">
            Mỗi tác phẩm là sự kết tinh giữa kinh nghiệm truyền thống và tiêu
            chuẩn kiểm định quốc tế GIA / NGTC, mang đến sự an tâm tuyệt đối
            cho người sở hữu.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-forest sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-charcoal/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Button className="mt-8 h-12 rounded-full bg-forest px-6 text-sm font-medium text-cream hover:bg-forest/90">
            Tìm hiểu thêm về Giai Kỳ
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
