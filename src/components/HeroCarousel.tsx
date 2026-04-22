"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const slidesConfig = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=1920&q=80",
    slug: "decoracion-sorpresa-hotel-playa"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    slug: "propuesta-de-matrimonio"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    slug: "experiencia-picnic-romantico-boho"
  }
];

export function HeroCarousel() {
  const t = useTranslations("HeroCarousel");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesConfig.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesConfig.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesConfig.length) % slidesConfig.length);

  return (
    <section className="relative min-h-[680px] md:min-h-[760px] w-full overflow-hidden">
      {slidesConfig.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-end">
                  {/* Bloque principal */}
                  <div className="bg-black/45 backdrop-blur-xl border border-white/15 rounded-[40px] p-8 md:p-12 xl:p-14 shadow-2xl shadow-black/30">
                    <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-white/10 mb-6">
                      
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[0.95] tracking-tight mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]">
                      {t(`slides.${slide.id}.title`)}
                    </h2>

                    <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 leading-relaxed max-w-2xl [text-shadow:0_2px_16px_rgba(0,0,0,0.25)]">
                      {t(`slides.${slide.id}.subtitle`)}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                      <Link href={`/experiencias/${slide.slug}`}>
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg group">
                          {t("cta_button")}
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </Link>

                      <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                        <span className="w-10 h-[2px] bg-orange-500 rounded-full" />
                        0{currentSlide + 1} / 0{slidesConfig.length}
                      </div>
                    </div>
                  </div>

                  {/* Bloque lateral */}
                  <div className="hidden lg:block">
                    <div className="bg-black/35 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 text-white shadow-2xl shadow-black/25">
                      <p className="text-xs uppercase tracking-[0.2em] text-orange-300 font-semibold mb-4">
                        
                      </p>

                      <div className="space-y-4">
                        <p className="text-2xl font-bold leading-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.25)]">
                          {t(`slides.${slide.id}.title`)}
                        </p>

                        <p className="text-gray-200 leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.2)]">
                          {t(`slides.${slide.id}.subtitle`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Barra inferior de control */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex gap-3">
                    {slidesConfig.map((_, dotIndex) => (
                      <button
                        key={`dot-${dotIndex}`}
                        onClick={() => setCurrentSlide(dotIndex)}
                        className={`transition-all duration-300 rounded-full ${
                          dotIndex === currentSlide
                            ? "bg-orange-500 w-12 h-3"
                            : "bg-white/70 backdrop-blur-sm w-3 h-3 hover:bg-orange-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm text-gray-900 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg border border-white/40"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm text-gray-900 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg border border-white/40"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}