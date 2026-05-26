"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/landing-data";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/landing/section-reveal";

export function BlogSection() {
  return (
    <SectionReveal as="section" id="blog" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
            Cẩm nang ngọc Việt
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/60 transition-colors hover:text-forest"
          >
            Xem tất cả bài viết
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#141414]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-forest px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                    {post.category}
                  </span>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-charcoal/45">
                    <time>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-charcoal transition-colors group-hover:text-forest">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-forest"
                  >
                    Đọc bài
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
}
