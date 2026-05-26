import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { footerLinks } from "@/data/landing-data";

const paymentMethods = ["Visa", "Mastercard", "JCB", "ZaloPay", "VNPay"];

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-forest text-cream/80">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-full border border-gold/40 bg-cream/10">
                <span className="font-heading text-sm font-semibold text-gold">
                  GK
                </span>
              </div>
              <p className="font-heading text-xl font-semibold text-cream">
                Giai Kỳ
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Ba thế hệ chế tác tinh hoa ngọc Việt — tôn vinh vẻ đẹp tự nhiên
              qua từng tác phẩm trang sức cao cấp.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {["FB", "IG", "YT"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-cream/15 text-[10px] font-bold tracking-wide transition-colors hover:border-gold/40 hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Khám phá
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Hỗ trợ
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Liên hệ
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href="tel:19001234" className="hover:text-gold">
                  1900 1234
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href="mailto:hello@giaiky.vn" className="hover:text-gold">
                  hello@giaiky.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Giai Kỳ. Bảo lưu mọi quyền.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-md border border-cream/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cream/50"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
