"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyUsSection() {
  const t = useTranslations("WhyUsSection");

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.95fr] gap-10 xl:gap-16 items-center">
          {/* Lado izquierdo */}
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex items-center bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-gray-200">
                {t("badge")}
              </span>

              <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[0.95] tracking-tight">
                {t.rich("title", {
                  br: () => <br />,
                  span: (chunks) => <span className="text-orange-500">{chunks}</span>
                })}
              </h2>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-orange-500/10 rounded-bl-[120px]" />

              <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:items-start">
                <div className="w-14 h-14 rounded-[20px] bg-gray-900 flex items-center justify-center shadow-lg shadow-gray-900/10 flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-orange-400" />
                </div>

                <div className="space-y-3">
                  <div className="w-14 h-1.5 bg-orange-500 rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                    {t("feature.title")}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed text-base md:text-lg">
                    {t("feature.description")}
                  </p>
                </div>
              </div>
            </div>

            <Link href={"/contacto"}>
              <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 transition-all duration-300 group shadow-lg shadow-gray-900/10">
                {t("button_text")}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Lado derecho */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-white to-gray-100 border border-gray-100 shadow-2xl shadow-gray-200/40" />
              <div className="absolute inset-6 rounded-[36px] border border-gray-200/80 bg-white/70 backdrop-blur-sm" />

              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-[78%] h-[78%]" fill="none">
                  <circle cx="150" cy="150" r="130" fill="#fb923c" opacity="0.08" />
                  <path
                    d="M60 200 Q 100 120, 160 150 Q 200 170, 240 80"
                    stroke="#fb923c"
                    strokeWidth="4"
                    strokeDasharray="12,8"
                    strokeLinecap="round"
                  />
                  <g transform="translate(60, 200)">
                    <circle cx="0" cy="0" r="10" fill="#fb923c" />
                    <circle cx="0" cy="0" r="5" fill="white" />
                  </g>
                  <g transform="translate(160, 140) rotate(-20)">
                    <path d="M0 0 L15 8 L0 16 L4 8 Z" fill="#111827" />
                  </g>
                  <g transform="translate(235, 85) rotate(-50)">
                    <path d="M0 10 L30 0 L30 6 L10 10 L30 14 L30 20 Z" fill="#111827" />
                  </g>
                  <g transform="translate(245, 75)">
                    <circle cx="0" cy="0" r="12" fill="#fb923c" />
                    <circle cx="0" cy="0" r="6" fill="white" />
                  </g>
                </svg>
              </div>

              {/* Chips decorativos */}
              <div className="absolute top-6 left-6 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 shadow-sm">
                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}