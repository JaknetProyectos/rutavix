"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function CoverageSection() {
  const t = useTranslations("CoverageSection");

  const locations = t("locations").split("•").map((item) => item.trim()).filter(Boolean);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[44px] p-8 md:p-12 xl:p-16 shadow-2xl shadow-gray-200/40">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-16 items-start">
            {/* Columna izquierda */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-gray-200">
                <MapPin className="w-4 h-4 text-orange-500" />
                {t("badge")}
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[0.95] tracking-tight max-w-3xl">
                  {t.rich("title", {
                    br: () => <br />,
                    span: (chunks) => <span className="text-orange-500">{chunks}</span>
                  })}
                </h2>

                <p className="text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                  {t("subtitle")}
                </p>
              </div>

              {/* Chips de ciudades */}
              <div className="flex flex-wrap gap-3 pt-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>

            {/* Columna derecha */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-[24px] bg-orange-500/10 blur-2xl" />

              <div className="relative bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {t("subtitle")}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {t("description")}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                    {t("list_title")}
                  </h4>

                  <p className="text-gray-900 font-medium leading-relaxed">
                    {t("locations")}
                  </p>
                </div>

                <Link href={"/acerca"}>
                  <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 transition-all duration-300 group shadow-lg shadow-gray-900/10">
                    {t("button_text")}
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}