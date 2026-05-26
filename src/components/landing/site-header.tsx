"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Calendar,
  ChevronDown,
  Heart,
  Menu,
  Phone,
  Search,
  Share2,
  ShoppingBag,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/landing-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-forest text-cream/90 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
          <span className="font-medium tracking-wide">
            Miễn phí giao hàng toàn quốc — đơn từ 2 triệu
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:19001234"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone className="size-3" />
              1900 1234
            </a>
            <a href="#" aria-label="Mạng xã hội" className="hover:text-gold">
              <Share2 className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b border-border/60 bg-cream/95 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-soft"
        )}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-full border border-gold/40 bg-forest">
              <span className="font-heading text-sm font-semibold text-gold">
                GK
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-semibold leading-tight text-forest">
                Giai Kỳ
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                Tinh hoa ngọc Việt
              </p>
            </div>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden items-center justify-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-charcoal/75 transition-colors hover:text-forest"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="size-3" />}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Tìm kiếm"
              className="rounded-full p-2 text-charcoal/70 transition-colors hover:bg-secondary hover:text-forest"
            >
              <Search className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Yêu thích"
              className="hidden rounded-full p-2 text-charcoal/70 transition-colors hover:bg-secondary hover:text-forest sm:block"
            >
              <Heart className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Giỏ hàng"
              className="relative rounded-full p-2 text-charcoal/70 transition-colors hover:bg-secondary hover:text-forest"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                0
              </span>
            </button>
            <Button
              className="hidden h-10 rounded-full bg-forest px-4 text-xs font-medium uppercase tracking-wider text-cream hover:bg-forest/90 lg:flex"
            >
              <Calendar className="size-4" />
              Đặt lịch tư vấn
            </Button>
            <button
              type="button"
              aria-label="Menu"
              className="rounded-full p-2 text-charcoal/70 transition-colors hover:bg-secondary xl:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(320px,85vw)] flex-col bg-cream shadow-soft-lg xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-border p-4">
                <span className="font-heading text-lg font-semibold text-forest">
                  Giai Kỳ
                </span>
                <button
                  type="button"
                  aria-label="Đóng menu"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 hover:bg-secondary"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border p-4">
                <Button className="h-11 w-full rounded-full bg-forest text-cream hover:bg-forest/90">
                  <Calendar className="size-4" />
                  Đặt lịch tư vấn
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
