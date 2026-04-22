"use client";

import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

const experiencesConfig = [
  {
    id: "1",
    slug: "experiencia-fotografica-viajera",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    slug: "experiencia-picnic-romantico-boho",
    image: "https://plus.unsplash.com/premium_photo-1661504674635-6e50646812a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    slug: "experiencias-paseo-privado-en-lancha",
    image: "https://plus.unsplash.com/premium_photo-1690372792452-6e7ee16bdeb9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    slug: "cena-rooftop-secret-spot",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "5",
    slug: "propuesta-de-matrimonio",
    image: "https://images.unsplash.com/photo-1704455303122-39974eebf58a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    slug: "decoracion-sorpresa-hotel-playa",
    image: "https://images.unsplash.com/photo-1669888541917-d53b0f89c728?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function ExperiencesSection() {
  const t = useTranslations("ExperiencesSection");

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-5">
          <span className="inline-flex items-center bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-gray-200">
            {t("badge")}
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {t.rich("title", {
              span: (chunks) => <span className="text-orange-500">{chunks}</span>
            })}
          </h2>

          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {experiencesConfig.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white rounded-[36px] overflow-hidden flex flex-col h-full border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={exp.image}
                  alt={t(`items.${exp.id}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl text-orange-500 shadow-lg border border-white/60">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <div className="w-12 h-1.5 bg-orange-500 rounded-full mb-5" />

                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                  {t(`items.${exp.id}.title`)}
                </h3>

                <p className="text-gray-600 font-medium text-base leading-relaxed mb-8">
                  {t(`items.${exp.id}.description`)}
                </p>

                {/* Botón */}
                <div className="mt-auto">
                  <Link href={`/experiencias/${exp.slug}`} className="block">
                    <button className="w-full py-4 bg-gray-50 text-gray-900 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      {t("button_text")}
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}