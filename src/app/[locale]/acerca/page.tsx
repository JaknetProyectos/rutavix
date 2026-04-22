"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowUpRight,
  MapPin,
  Calendar,
  PlusCircle,
  Truck,
  Sparkles
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { CustomQuoteSection } from "@/components/CustomQuoteSection";
import { PagarCotizacion } from "@/components/PagarCotizacion";
import { useTranslations } from "next-intl";

export default function AcercaPage() {
  const t = useTranslations("AboutPage");

  const ciudades = t.raw("coverage.city_list") as string[];
  const extrasOpcionales = t.raw("extras.items") as string[];
  const transporteDetalles = t.raw("logistics.details") as string[];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[280px] md:h-[340px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-5xl w-full">
            <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-[28px] px-6 py-6 md:px-10 md:py-8 shadow-xl">
              <div className="w-16 h-2 bg-orange-500 rounded-full mb-5" />
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-[0.92]">
                {t("hero.title")}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-900 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-start">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Travelers"
                className="rounded-[36px] w-full object-cover shadow-xl shadow-gray-200/30"
              />

              <div className="absolute -bottom-5 -right-5 bg-gray-900 p-5 rounded-[24px] hidden md:flex shadow-xl">
                <MapPin className="w-8 h-8 text-orange-400" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-5">
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-gray-200">
                  {t("coverage.list_title")}
                </span>

                <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[0.95] tracking-tight">
                  {t.rich("coverage.title", {
                    br: () => <br />,
                    span: (chunks) => <span className="text-orange-500">{chunks}</span>
                  })}
                </h2>

                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
                  {t("coverage.description")}
                </p>
              </div>

              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-orange-500 p-3 rounded-2xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {t("coverage.list_title")}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {ciudades.map((ciudad) => (
                    <span
                      key={ciudad}
                      className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium"
                    >
                      {ciudad}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 shadow-sm">
                <div className="w-14 h-1.5 bg-orange-500 rounded-full mb-5" />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {t("coverage.personalize.title")}
                </h3>
                <p className="text-gray-600 font-medium mb-6 leading-relaxed">
                  {t("coverage.personalize.description")}
                </p>

                <Link href="/contacto">
                  <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-500 transition-all duration-300 group shadow-lg shadow-gray-900/10">
                    {t("coverage.personalize.button")}
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop&q=80"
                  alt="Couple"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="w-16 h-2 bg-orange-500 mx-auto mb-6 rounded-full" />

            <p className="text-2xl md:text-4xl font-extrabold text-white max-w-5xl mx-auto leading-tight italic">
              "{t("quote")}"
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Reservations */}
            <div className="bg-white rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-[18px] bg-gray-900 flex items-center justify-center mb-8 shadow-lg shadow-gray-900/10">
                <Calendar className="w-7 h-7 text-orange-400" />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">
                {t("reservations.title")}
              </h3>

              <p className="text-gray-600 font-semibold mb-5 leading-relaxed">
                {t("reservations.subtitle")}
              </p>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-auto">
                {t("reservations.description")}
              </p>
            </div>

            {/* Extras */}
            <div className="bg-gray-50 rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-[18px] bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                <PlusCircle className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">
                {t("extras.title")}
              </h3>

              <p className="text-gray-600 font-semibold mb-6 text-sm md:text-base">
                {t("extras.subtitle")}
              </p>

              <ul className="space-y-3">
                {extrasOpcionales.map((extra) => (
                  <li
                    key={extra}
                    className="flex items-center gap-3 font-medium text-gray-700 text-sm md:text-base"
                  >
                    <Sparkles className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    {extra}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport & Logistics */}
            <div className="bg-white rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col">
              <div className="w-14 h-14 rounded-[18px] bg-gray-900 flex items-center justify-center mb-8 shadow-lg shadow-gray-900/10">
                <Truck className="w-7 h-7 text-orange-400" />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">
                {t("logistics.title")}
              </h3>

              <p className="text-gray-600 font-semibold mb-5">
                {t("logistics.subtitle")}
              </p>

              <ul className="space-y-3 mb-8">
                {transporteDetalles.map((item) => (
                  <li
                    key={item}
                    className="bg-gray-50 p-4 rounded-2xl text-sm font-medium text-gray-600 flex items-center gap-3 border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                {t("logistics.footer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <CustomQuoteSection
        visibleFields={{
          date: true,
          email: true,
          groupType: true,
          location: true,
          message: true,
          name: true
        }}
        data={{
          title: t("custom_quote.title"),
          description: "",
          lists: [
            {
              subtitle: t("custom_quote.locations_subtitle"),
              items: t.raw("custom_quote.locations_items") as string[]
            },
            {
              subtitle: t("custom_quote.investment_subtitle"),
              items: t.raw("custom_quote.investment_items") as string[]
            }
          ],
          background: "",
        }}
      />

      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <PagarCotizacion />
      </div>

      <Footer />
    </main>
  );
}