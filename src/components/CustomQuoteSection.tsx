"use client";

import { Send, Sparkles, Globe, Loader2, CheckCircle2 } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { useTranslations } from "next-intl";

interface CustomQuoteProps {
  data?: {
    background: string;
    title: string;
    description: string;
    lists: {
      subtitle: string;
      items: string[];
    }[];
  };
  visibleFields?: {
    name?: boolean;
    email?: boolean;
    date?: boolean;
    location?: boolean;
    groupType?: boolean;
    message?: boolean;
  };
}

export function CustomQuoteSection({ data, visibleFields }: CustomQuoteProps) {
  const t = useTranslations("CustomQuote");
  const { formData, loading, status, handleChange, handleSubmit } = useContactForm();

  const fields = {
    name: visibleFields?.name ?? true,
    email: visibleFields?.email ?? true,
    date: visibleFields?.date ?? true,
    location: visibleFields?.location ?? true,
    groupType: visibleFields?.groupType ?? true,
    message: visibleFields?.message ?? true,
  };

  const title = data?.title || t("default_data.title");
  const bgImage =
    data?.background ||
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const description = data?.description || t("default_data.description");

  return (
    <section className="relative py-24 overflow-hidden min-h-[860px] flex items-center">
      {/* Fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/68 to-black/58" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto bg-white/8 backdrop-blur-xl border border-white/10 rounded-[40px] p-4 md:p-6 xl:p-8 shadow-2xl shadow-black/30">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 xl:gap-8 items-stretch">
            {/* Columna informativa */}
            <div className="text-white rounded-[32px] p-6 md:p-8 xl:p-10 bg-transparent">
              <div className="max-w-2xl">
                <span className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-[0.2em] border border-white/10">
                  {t("tag")}
                </span>

                <h2 className="text-4xl md:text-6xl font-extrabold mt-6 leading-[0.95] tracking-tight">
                  {title}
                </h2>

                <p className="mt-6 text-lg md:text-xl font-medium text-gray-200 leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>

              {data?.lists?.length ? (
                <div className="grid gap-4 mt-10">
                  {data.lists.map((list, idx) => (
                    <div
                      key={idx}
                      className="bg-white/8 backdrop-blur-md p-6 md:p-7 rounded-[28px] border border-white/10 shadow-lg"
                    >
                      <p className="font-bold mb-4 uppercase tracking-[0.18em] text-orange-400 flex items-center gap-2 text-xs md:text-sm">
                        <Sparkles className="w-4 h-4" />
                        {list.subtitle}
                      </p>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {list.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-100 font-medium text-sm md:text-base"
                          >
                            <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-[32px] p-6 md:p-8 xl:p-10 border border-white/20 shadow-2xl shadow-black/20 self-stretch">
              {status === "success" ? (
                <div className="h-full min-h-[520px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-orange-500" />
                  </div>

                  <h3 className="text-3xl font-extrabold text-gray-900 uppercase">
                    {t("status.success_title")}
                  </h3>

                  <p className="text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
                    {t("status.success_message")}
                  </p>

                  <button
                    onClick={() => window.location.reload()}
                    className="text-gray-900 font-semibold underline underline-offset-4 hover:text-orange-500 transition-colors"
                  >
                    {t("status.retry_button")}
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8 md:mb-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-[18px] shadow-lg">
                        <Globe className="w-6 h-6 text-orange-400" />
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-tight">
                          {t("form_header.title")}
                        </h3>
                        <p className="text-gray-500 font-medium mt-1 leading-relaxed">
                          {t("form_header.subtitle")}
                        </p>
                      </div>
                    </div>

                    <div className="w-16 h-1.5 bg-orange-500 rounded-full" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fields.name && (
                        <input
                          required
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder={t("placeholders.name")}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[20px] focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 transition-all"
                        />
                      )}

                      {fields.email && (
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("placeholders.email")}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[20px] focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 transition-all"
                        />
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fields.date && (
                        <input
                          required
                          type="date"
                          name="fecha"
                          min={new Date().toISOString().split("T")[0]}
                          value={formData.fecha}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[20px] focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-500 transition-all"
                        />
                      )}

                      {fields.location && (
                        <input
                          type="text"
                          name="destino"
                          value={formData.destino}
                          onChange={handleChange}
                          placeholder={t("placeholders.location")}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[20px] focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 transition-all"
                        />
                      )}
                    </div>

                    {fields.groupType && (
                      <div className="relative">
                        <select
                          name="tipoGrupo"
                          value={formData.tipoGrupo}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[20px] focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-600 appearance-none transition-all"
                        >
                          <option value="">{t("options.group_type.label")}</option>
                          <option value="individual">{t("options.group_type.individual")}</option>
                          <option value="pareja">{t("options.group_type.couple")}</option>
                          <option value="grupo">{t("options.group_type.group")}</option>
                        </select>

                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                          <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45" />
                        </div>
                      </div>
                    )}

                    {fields.message && (
                      <textarea
                        required
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder={t("placeholders.message")}
                        rows={5}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-[24px] focus:ring-4 focus:ring-orange-400/15 focus:border-orange-400 outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none transition-all"
                      />
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full ${
                        loading ? "bg-gray-400" : "bg-gray-900 hover:bg-orange-500"
                      } text-white py-5 rounded-[22px] font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 group disabled:cursor-not-allowed shadow-lg shadow-gray-900/10`}
                    >
                      {loading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <>
                          {t("submit_button")}
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-red-500 text-center font-medium text-sm mt-2">
                        {t("status.error_message")}
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}