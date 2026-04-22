"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function PagarCotizacion() {
  const t = useTranslations("QuoteCTA");

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[40px] p-10 md:p-14 max-w-5xl mx-auto shadow-2xl shadow-gray-900/5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Texto */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-semibold mb-3">
                
              </p>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {t("title")}
              </h2>
            </div>

            {/* Botón */}
            <Link href="/pagar-envio" className="group">
              <button className="relative inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white font-semibold text-lg rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:bg-orange-500 hover:shadow-orange-500/30">

                {/* Glow interno hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500/20 to-transparent" />

                <span className="relative z-10 flex items-center gap-3">
                  {t("button")}
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>

              </button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}