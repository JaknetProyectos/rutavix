"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { useTranslations } from "next-intl";

export default function ContactoPage() {
  const t = useTranslations("ContactPage");
  const { formData, loading, status, handleChange, handleSubmit } = useContactForm();

  const extrasOpcionales = t.raw("extras.items") as string[];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[260px] md:h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-5xl w-full">
            <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-[28px] px-6 py-6 md:px-10 md:py-8 shadow-xl">
              <div className="w-16 h-2 bg-orange-500 rounded-full mb-5" />
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 uppercase tracking-tight leading-[0.92]">
                {t("hero_title")}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-900 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-10 items-start">
            {/* Formulario */}
            <div className="bg-white rounded-[36px] p-8 md:p-10 xl:p-12 border border-gray-100 shadow-xl shadow-gray-200/30">
              <div className="mb-10">
                <div className="w-16 h-2 bg-orange-500 rounded-full mb-5" />
                <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-2xl">
                  {t("intro_text")}
                </p>
              </div>

              {status === "success" ? (
                <div className="bg-orange-50 border border-orange-200 p-8 rounded-[28px] text-center space-y-4 animate-in fade-in zoom-in">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 uppercase">
                    {t("form.success_title")}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {t("form.success_message")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-2xl flex items-center gap-3 font-semibold mb-4">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {t("form.error_api")}
                    </div>
                  )}

                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder={t("form.placeholders.name")}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 transition-all"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("form.placeholders.email")}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 transition-all"
                    />
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder={t("form.placeholders.phone")}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 transition-all"
                    />
                  </div>

                  <input
                    type="date"
                    name="fecha"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-500 transition-all"
                  />

                  <textarea
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder={t("form.placeholders.message")}
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none transition-all"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${
                      loading ? "bg-gray-400" : "bg-gray-900 hover:bg-orange-500"
                    } text-white py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-gray-900/10`}
                  >
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        {t("form.button")}
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Información */}
            <div className="space-y-8">
              {/* Reservaciones */}
              <div className="bg-white rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-orange-500/10 rounded-bl-[120px]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-[18px] bg-gray-900 flex items-center justify-center shadow-lg shadow-gray-900/10">
                      <Calendar className="w-7 h-7 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
                      {t("reservations.title")}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {t("reservations.content")}
                  </p>
                </div>
              </div>

              {/* Extras */}
              <div className="bg-gray-50 rounded-[36px] p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[18px] bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
                    {t("extras.title")}
                  </h3>
                </div>

                <p className="text-gray-500 mb-6 font-medium">
                  {t("extras.subtitle")}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {extrasOpcionales.map((extra) => (
                    <li
                      key={extra}
                      className="flex items-center gap-3 font-medium text-gray-700 text-sm md:text-base"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      {extra}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}