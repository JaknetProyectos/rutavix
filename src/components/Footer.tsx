"use client";

import { Phone, Mail, ShieldCheck, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      
      {/* TOP BRAND BLOCK */}
      <div className="container mx-auto px-6 pt-20 pb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {t("copyright.motto")}
        </h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
      </div>

      {/* MAIN GRID */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* CONTACTO */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">
              Contact
            </h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 mt-1" />
              <p className="text-gray-300 text-sm leading-relaxed">
                {t("contact.address.street")} <br />
                {t("contact.address.city")}
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="tel:+5215555464355"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +52 1 55 5546 4355
              </Link>

              <Link
                href="mailto:contacto@rutavix.com"
                className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contacto@rutavix.com
              </Link>
            </div>
          </div>

          {/* LOGO / BRAND */}
          

          {/* PAGOS */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">
              Payment
            </h3>

            <div className="bg-white rounded-2xl p-6 text-center shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                <p className="text-gray-900 text-xs font-bold uppercase tracking-[0.15em]">
                  {t("payment.secure_title")}
                </p>
              </div>

              <div className="flex gap-3 justify-center mb-4">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Image src="/visa.png" alt="Visa" width={50} height={25} />
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <Image src="/mastercard.png" alt="Mastercard" width={45} height={25} />
                </div>
              </div>

              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
                {t("payment.cards_accepted")}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LINKS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {[
              { name: t("legal.privacy"), href: "/legal/privacidad" },
              { name: t("legal.terms"), href: "/legal/terminos" },
              { name: t("legal.refunds"), href: "/legal/reembolsos" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href as any}
                className="text-gray-500 hover:text-orange-400 text-xs uppercase tracking-[0.15em] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-600 text-[10px] sm:text-xs font-medium tracking-tight uppercase text-center md:text-right">
            © 2026 <span className="text-orange-400">RUTAVIX</span> · {t("copyright.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}