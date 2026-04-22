"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Info,
  Star,
  Clock,
  Calendar,
  Plus,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { CustomQuoteSection } from "./CustomQuoteSection";
import { PagarCotizacion } from "./PagarCotizacion";
import { PlanDetailModal } from "./PlanDetailModal";

const IconMap = {
  map: MapPin,
  check: CheckCircle2,
  info: Info,
  star: Star,
  clock: Clock,
  calendar: Calendar,
};

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

interface ExperiencePageProps {
  title: string;
  slug?: string;
  subtitle?: string;
  description?: string;
  heroImage: string;
  image2?: string;
  infoLists?: {
    title: string;
    icon: keyof typeof IconMap;
    items: string[];
    isOpen?: boolean;
  }[];
  idealSectionTitle?: string;
  idealPara?: {
    image: string;
    title: string;
    items: string[];
  }[];
  plans: Plan[];
  cotizacion?: {
    background: string;
    title: string;
    description: string;
    lists: {
      subtitle: string;
      items: string[];
    }[];
  };
}

export function ExperiencePage({
  title,
  subtitle,
  description,
  heroImage,
  image2,
  slug,
  infoLists = [],
  idealPara = [],
  plans = [],
  cotizacion,
  idealSectionTitle
}: ExperiencePageProps) {
  const t = useTranslations("ExperiencePage");
  const locale = useLocale();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPlan]);

  const handleScroll = (id: string, distance: number) => {
    const el = document.getElementById(id);
    if (el) el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-16 h-full flex items-end">
          <div className="max-w-6xl w-full">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-end">
              <div className="bg-white/95 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 md:p-12 xl:p-16 shadow-2xl shadow-black/20">
                <div className="w-16 h-2 bg-orange-500 rounded-full mb-6" />
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 uppercase tracking-tight leading-[0.92]">
                  {title}
                </h1>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[32px] p-8 text-white shadow-2xl">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300 font-semibold mb-3">
                    {subtitle || title}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-100">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sección Informativa */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-900 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-gray-200">
                <Info className="w-4 h-4 text-orange-500" />
                {subtitle || title}
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[0.95] tracking-tight uppercase">
                  {subtitle || title}
                </h2>

                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed whitespace-pre-line max-w-2xl">
                  {description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {infoLists.map((list, index) => {
                const IconComponent = IconMap[list.icon] || Info;
                return (
                  <details
                    key={index}
                    className="group bg-white rounded-[28px] overflow-hidden transition-all border border-gray-100 shadow-sm open:shadow-xl"
                    open={list.isOpen}
                  >
                    <summary className="list-none flex justify-between items-center cursor-pointer p-6 md:p-8 font-bold text-gray-900 text-lg md:text-xl tracking-tight">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-50 p-3 rounded-2xl border border-gray-200 text-orange-500 shadow-sm">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {list.title}
                      </div>
                      <Plus className="group-open:rotate-45 transition-transform w-7 h-7 text-gray-400" />
                    </summary>

                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <ul className="grid grid-cols-1 gap-4">
                        {list.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100"
                          >
                            <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium text-sm md:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ideal Para - Slider */}
      {idealPara.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[56px] mx-4 my-12 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4 max-w-3xl">
                <span className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold uppercase text-xs tracking-[0.2em] border border-white/10">
                  {t("ideal_tag")}
                </span>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white uppercase leading-[0.95] tracking-tight">
                  {idealSectionTitle ?? t("ideal_title")}
                </h2>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleScroll("slider-ideal", -432)}
                  className="p-5 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/10"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  onClick={() => handleScroll("slider-ideal", 432)}
                  className="p-5 rounded-2xl bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/10"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>
            </div>

            <div
              id="slider-ideal"
              className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
              {idealPara.map((card, i) => (
                <div
                  key={i}
                  className="w-[320px] md:w-[460px] flex-shrink-0 bg-white rounded-[36px] overflow-hidden snap-center group border border-white/10 shadow-2xl"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                  </div>

                  <div className="p-8 md:p-10">
                    <div className="w-14 h-1.5 bg-orange-500 rounded-full mb-6" />
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-tight leading-none">
                      {card.title}
                    </h3>

                    <ul className="space-y-4">
                      {card.items.map((li, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 flex items-start gap-4 font-medium text-base md:text-lg leading-relaxed"
                        >
                          <Sparkles className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Planes */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-fixed bg-center"
            style={{ backgroundImage: `url('${image2 || heroImage}')` }}
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold uppercase text-xs tracking-[0.2em] border border-white/10 mb-5">
              <Star className="w-4 h-4 text-orange-400 mr-2" />
              {t("plans_title")}
            </span>

            <h2 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight leading-[0.95]">
              {t("plans_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="rounded-[36px] p-8 md:p-10 text-white flex flex-col items-start transition-all duration-300 hover:-translate-y-2 shadow-2xl border border-white/10 relative overflow-hidden"
                style={{ backgroundColor: plan.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/10 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full w-full">
                  <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-[20px] mb-8 border border-white/10 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight leading-none">
                    {plan.name}
                  </h3>

                  <p className="text-sm font-semibold tracking-[0.18em] opacity-90 mb-8 uppercase bg-black/10 px-4 py-2 rounded-xl self-start">
                    {plan.description}
                  </p>

                  <div className="mt-auto w-full">
                    <div className="text-5xl font-extrabold mb-2 tracking-tight">
                      <span className="text-2xl mr-1">$</span>
                      {new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US").format(plan.price)}
                    </div>

                    <p className="text-xs font-semibold tracking-[0.2em] opacity-80 mb-8 uppercase">
                      {t("price_suffix")}
                    </p>

                    <button
                      onClick={() => setSelectedPlan(plan)}
                      className="w-full bg-white text-gray-900 py-5 rounded-2xl font-semibold uppercase tracking-[0.16em] text-base hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
                    >
                      {t("details_button")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPlan && (
        <PlanDetailModal
          plan={selectedPlan}
          exp={{
            name: title,
            slug: slug ?? title
          }}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {cotizacion && <CustomQuoteSection data={cotizacion} />}

      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <PagarCotizacion />
      </div>

      <Footer />
    </main>
  );
}