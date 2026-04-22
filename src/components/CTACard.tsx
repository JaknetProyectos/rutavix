"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, Heart, Star, Plane } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTACard() {
  const t = useTranslations("CTACard");

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[44px] p-8 md:p-12 xl:p-16 shadow-2xl shadow-gray-200/40">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-gray-200">
                <Star className="w-4 h-4 text-orange-500" />
                {t("top_text")}
              </div>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[0.95] tracking-tight max-w-3xl">
                {t.rich("title", {
                  span: (chunks) => <span className="text-orange-500">{chunks}</span>
                })}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/experiencias"}>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 transition-all duration-300 group shadow-lg shadow-gray-900/10">
                    {t("buttons.experiences")}
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>

                <Link href={"/acerca"}>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gray-50 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 hover:bg-white hover:border-orange-500 hover:text-orange-500 transition-all duration-300 group">
                    {t("buttons.services")}
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -right-4 w-24 h-24 rounded-[28px] bg-orange-500/10 blur-2xl" />

              <div className="relative bg-gray-50 border border-gray-100 rounded-[36px] p-8 md:p-10 shadow-lg">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="aspect-square rounded-[24px] bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <Plane className="text-orange-500 w-6 h-6" />
                  </div>
                  <div className="aspect-square rounded-[24px] bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <Heart className="text-orange-500 w-6 h-6" />
                  </div>
                  <div className="aspect-square rounded-[24px] bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    <Star className="text-orange-500 w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-2 bg-orange-500 rounded-full" />
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                    {t("top_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}