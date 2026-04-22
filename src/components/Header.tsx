"use client";

import { useState, useEffect } from "react";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { Menu, ShoppingCart, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { useTranslations, useLocale } from "next-intl";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { cartCount } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    { name: t("experiences.marriage_proposal"), href: "/experiencias/propuesta-de-matrimonio" },
    { name: t("experiences.photo_travel"), href: "/experiencias/experiencia-fotografica-viajera" },
    { name: t("experiences.romantic_picnic"), href: "/experiencias/experiencia-picnic-romantico-boho" },
    { name: t("experiences.private_boat"), href: "/experiencias/experiencias-paseo-privado-en-lancha" },
    { name: t("experiences.rooftop_dinner"), href: "/experiencias/cena-rooftop-secret-spot" },
    { name: t("experiences.hotel_decoration"), href: "/experiencias/decoracion-sorpresa-hotel-playa" },
  ];

  const toggleLanguage = (newLocale: "en" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="container mx-auto">
        <div className="bg-white/85 backdrop-blur-xl border border-white/60 shadow-xl shadow-gray-200/40 rounded-[28px] px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image width={145} height={48} src={"/logo-full.png"} alt={"Logo"} priority />
            </Link>

            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center bg-gray-50 border border-gray-200 rounded-full px-2 py-2 gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-900 font-medium hover:bg-white hover:text-orange-500 rounded-full transition-all"
              >
                {t("nav.home")}
              </Link>

              <Link
                href="/acerca"
                className="px-4 py-2 text-gray-900 font-medium hover:bg-white hover:text-orange-500 rounded-full transition-all"
              >
                {t("nav.about")}
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsExperienciasOpen(true)}
                onMouseLeave={() => setIsExperienciasOpen(false)}
              >
                <Link
                  href="/experiencias"
                  className={`flex items-center gap-1 px-4 py-2 font-medium rounded-full transition-all ${
                    isExperienciasOpen
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-white hover:text-orange-500"
                  }`}
                >
                  {t("nav.experiences")}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isExperienciasOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {isExperienciasOpen && (
                  <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[360px] bg-white/95 backdrop-blur-xl rounded-[28px] border border-gray-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-3">
                      <div className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {t("nav.mobile_exp_title")}
                      </div>

                      <div className="grid gap-1">
                        {experiences.map((exp) => (
                          <Link
                            key={exp.name}
                            href={exp.href as any}
                            className="block px-4 py-3 text-sm font-medium text-gray-800 rounded-2xl hover:bg-gray-50 hover:text-orange-500 transition-colors"
                          >
                            {exp.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contacto"
                className="px-4 py-2 text-gray-900 font-medium hover:bg-white hover:text-orange-500 rounded-full transition-all"
              >
                {t("nav.contact")}
              </Link>
            </nav>

            {/* Acciones */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden sm:flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                    locale === "en"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-orange-500"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => toggleLanguage("es")}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all ${
                    locale === "es"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-orange-500"
                  }`}
                >
                  ES
                </button>
              </div>

              <Link href="/cart">
                <button className="relative w-12 h-12 rounded-2xl bg-gray-900 text-white hover:bg-orange-500 transition-all duration-300 flex items-center justify-center shadow-lg shadow-gray-900/10">
                  <ShoppingCart className="w-5 h-5" />

                  {mounted && cartCount > 0 && (
                    <span
                      key={cartCount}
                      className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] min-w-[24px] h-6 px-1 rounded-full flex items-center justify-center font-bold border-2 border-white animate-in zoom-in duration-300 shadow-md"
                    >
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>

              <button
                className="lg:hidden w-12 h-12 rounded-2xl bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 border-t border-gray-100 pt-4 animate-in fade-in slide-in-from-top-3 duration-200">
              <div className="bg-gray-50 rounded-[28px] border border-gray-200 p-4 shadow-lg">
                <div className="flex flex-col gap-2">
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/"
                    className="p-3 font-medium text-gray-900 hover:bg-white hover:text-orange-500 rounded-2xl transition-colors"
                  >
                    {t("nav.home")}
                  </Link>

                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/acerca"
                    className="p-3 font-medium text-gray-900 hover:bg-white hover:text-orange-500 rounded-2xl transition-colors"
                  >
                    {t("nav.about")}
                  </Link>

                  <div className="bg-white rounded-[24px] p-4 border border-gray-200">
                    <p className="font-bold text-gray-400 mb-3 px-2 uppercase text-[11px] tracking-[0.2em]">
                      {t("nav.mobile_exp_title")}
                    </p>

                    <div className="grid gap-1">
                      {experiences.map((exp) => (
                        <Link
                          key={exp.name}
                          href={exp.href as any}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50 px-3 py-2 rounded-xl transition-colors"
                        >
                          {exp.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    href="/contacto"
                    className="p-3 font-medium text-gray-900 hover:bg-white hover:text-orange-500 rounded-2xl transition-colors"
                  >
                    {t("nav.contact")}
                  </Link>

                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200 mt-2">
                    <button
                      onClick={() => toggleLanguage("en")}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        locale === "en"
                          ? "bg-gray-900 text-white"
                          : "text-gray-500 hover:text-orange-500"
                      }`}
                    >
                      EN
                    </button>

                    <button
                      onClick={() => toggleLanguage("es")}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        locale === "es"
                          ? "bg-gray-900 text-white"
                          : "text-gray-500 hover:text-orange-500"
                      }`}
                    >
                      ES
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}