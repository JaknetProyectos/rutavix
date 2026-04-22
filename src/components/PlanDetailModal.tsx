"use client";

import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  X,
  Clock,
  CheckCircle2,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  MessageCircle,
  ShieldAlert,
  CalendarDays
} from "lucide-react";
import { PagarCotizacion } from "./PagarCotizacion";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/interfaces/cart/CartItem";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface Plan {
  slug: string;
  name: string;
  price: number;
  description: string;
  backgroundImage: string;
  color: string;
  features?: string[];
  duration?: string;
  includes?: string[];
  notIncludes?: string[];
}

interface ExperienceDetails {
  slug: string;
  name: string;
}

interface PlanDetailModalProps {
  plan: Plan;
  exp: ExperienceDetails;
  onClose: () => void;
}

export const PlanDetailModal = ({ plan, exp, onClose }: PlanDetailModalProps) => {
  const t = useTranslations("PlanDetailModal");
  const locale = useLocale();
  const { addItem } = useCart();

  const [pax, setPax] = useState(2);
  const [fecha, setFecha] = useState("");
  const [added, setAdded] = useState(false);

  const router = useRouter();

  const handleAddToCart = () => {
    if (!fecha) {
      alert(t("alerts.select_date"));
      return;
    }

    const newItem: CartItem = {
      experience_slug: exp.slug,
      experience_name: exp.name,
      plan_name: plan.name,
      plan_duration: plan.duration || t("defaults.to_be_consulted"),
      fecha,
      personas: pax,
      price: plan.price,
    };

    addItem(newItem);
    setAdded(true);

    router.push("/cart");

    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-300">
      <Header />

      {/* Hero */}
      <section className="relative h-[48vh] min-h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${plan.backgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/65" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-28 right-6 md:right-12 p-4 bg-white/90 backdrop-blur-xl text-gray-900 rounded-full hover:bg-orange-500 hover:text-white transition-all z-30 shadow-xl border border-white/40 group"
        >
          <X className="w-7 h-7 group-hover:rotate-90 transition-transform" />
        </button>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-12">
          <div className="max-w-5xl w-full">
            <div className="bg-white/92 backdrop-blur-xl border border-white/40 rounded-[36px] p-8 md:p-10 xl:p-12 shadow-2xl shadow-black/20">
              <div className="w-16 h-2 bg-orange-500 rounded-full mb-5" />

              <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight leading-[0.92] mb-6">
                {plan.name}
              </h2>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-2xl text-xl md:text-2xl font-bold tracking-tight">
                  {new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
                    style: "currency",
                    currency: "MXN",
                    maximumFractionDigits: 0
                  }).format(plan.price)}
                  <span className="text-sm opacity-80 ml-2">{t("tax_included")}</span>
                </div>

                <div className="inline-flex items-center gap-3 bg-white/80 text-gray-700 px-5 py-3 rounded-2xl text-sm font-semibold uppercase tracking-[0.15em] border border-gray-200">
                  <Clock className="w-4 h-4 text-orange-500" />
                  {plan.duration || t("defaults.to_be_consulted")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 xl:gap-10 items-start">
            {/* Main */}
            <div className="min-w-0 space-y-8">
              {/* Descripción */}
              <section className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-500 w-12 h-2 rounded-full" />
                  <h3 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight">
                    {t("sections.description")}
                  </h3>
                </div>

                <p className="text-gray-600 font-medium leading-relaxed text-lg md:text-xl whitespace-pre-line">
                  {plan.description}
                </p>
              </section>

              {/* Incluye / No incluye */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
                  <div className="bg-orange-500 w-fit p-3 rounded-2xl mb-6">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
                    {t("sections.includes")}
                  </h4>

                  <ul className="space-y-4">
                    {plan.includes?.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 items-start text-gray-700 font-medium text-base md:text-lg leading-relaxed"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-sm">
                  <div className="bg-gray-900 w-fit p-3 rounded-2xl mb-6">
                    <ShieldAlert className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">
                    {t("sections.not_includes")}
                  </h4>

                  <ul className="space-y-4">
                    {plan.notIncludes?.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 items-start text-gray-500 font-medium text-base md:text-lg leading-relaxed"
                      >
                        <div className="mt-2 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Configuración */}
              <div className="bg-white rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-orange-500 w-12 h-2 rounded-full" />
                  <h3 className="text-3xl font-extrabold text-gray-900 uppercase tracking-tight">
                    {t("sections.config")}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-end">
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">
                      <CalendarDays className="w-4 h-4" /> {t("form.date_label")}
                    </label>

                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 p-5 rounded-2xl outline-none font-medium text-gray-900 focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">
                      {t("form.pax_label")}
                    </label>

                    <div className="flex items-center bg-gray-50 rounded-2xl p-2 h-[64px] border border-gray-200">
                      <button
                        onClick={() => setPax(Math.max(1, pax - 1))}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-xl hover:bg-orange-500 hover:text-white transition-colors border border-gray-200"
                      >
                        <Minus className="w-5 h-5" />
                      </button>

                      <span className="flex-1 text-center font-extrabold text-2xl text-gray-900">
                        {pax}
                      </span>

                      <button
                        onClick={() => setPax(pax + 1)}
                        className="w-12 h-12 flex items-center justify-center bg-white rounded-xl hover:bg-orange-500 hover:text-white transition-colors border border-gray-200"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={added}
                    className={`h-[64px] rounded-2xl font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-4 transition-all group shadow-lg ${
                      added
                        ? "bg-orange-500 text-white"
                        : "bg-gray-900 text-white hover:bg-orange-500"
                    }`}
                  >
                    {added ? (
                      <CheckCircle2 className="w-6 h-6 animate-bounce" />
                    ) : (
                      <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    )}
                    {added ? t("form.button_added") : t("form.button_reserve")}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-32">
              <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[36px] p-8 text-white border border-white/10 shadow-2xl">
                <div className="w-18 h-18 bg-white/10 backdrop-blur-sm rounded-[22px] flex items-center justify-center mb-8 border border-white/10">
                  <Star className="w-10 h-10 text-orange-400" fill="currentColor" />
                </div>

                <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-5 leading-none">
                  {t("sidebar.title")}
                </h3>

                <p className="text-gray-400 font-medium mb-8 text-base leading-relaxed">
                  {t("sidebar.description")}
                </p>

                <Link
                  href="/contacto"
                  onClick={onClose}
                  className="w-full bg-white text-gray-900 py-4 rounded-2xl font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-3 hover:bg-orange-500 hover:text-white transition-all group shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                  {t("sidebar.button")}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="py-20 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
        <PagarCotizacion />
      </div>

      <Footer />
    </div>
  );
};