"use client";
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/interfaces/cart/CartItem';
import { CheckCircle2, DollarSign, User, Mail, Hash, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface PaymentFormData {
    nombre: string;
    email: string;
    folio: string;
    costoBase: number;
}

const PaymentForm = () => {
    const t = useTranslations("PaymentPage");
    const { addItem: addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<PaymentFormData>();
    
    const total = watch('costoBase') || 0;
    const router = useRouter()

    const onSubmit = (data: PaymentFormData) => {
        const customItem: CartItem = {
            experience_slug: "custom-quote",
            experience_name: t("cart_info.experience_name"),
            plan_name: `${t("cart_info.folio_label")}: ${data.folio}`,
            plan_duration: t("cart_info.duration"),
            fecha: new Date().toISOString().split('T')[0],
            personas: 1,
            nombre: data.nombre,
            email: data.email,
            cotization_folio: data.folio,
            price: Number(total)
        };

        addToCart(customItem);
        router.replace("/cart")

        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F8FAFA] pt-32 pb-20 px-4">
                <div className="max-w-xl mx-auto">
                    
                    {/* Header del Formulario */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-400 rounded-3xl mb-6 rotate-3 shadow-lg shadow-orange-200">
                            <Sparkles className="text-white w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-4">
                            {t.rich("title", {
                                span: (chunks) => <span className="text-orange-400">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-gray-500 font-bold max-w-sm mx-auto leading-tight">
                            {t("subtitle")}
                        </p>
                    </div>

                    <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8">
                            
                            <div className="space-y-6">
                                <div className="relative">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4 mb-2">
                                        <User className="w-3 h-3" /> {t("fields.name.label")}
                                    </label>
                                    <input
                                        {...register("nombre", { required: true })}
                                        className={`w-full px-6 py-5 bg-gray-50 border-none rounded-[20px] font-bold text-gray-900 outline-none transition-all focus:ring-4 focus:ring-orange-400/10 placeholder:text-gray-300 ${errors.nombre ? 'ring-2 ring-red-500' : ''}`}
                                        placeholder={t("fields.name.placeholder")}
                                    />
                                </div>

                                <div className="relative">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4 mb-2">
                                        <Mail className="w-3 h-3" /> {t("fields.email.label")}
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        className="w-full px-6 py-5 bg-gray-50 border-none rounded-[20px] font-bold text-gray-900 outline-none transition-all focus:ring-4 focus:ring-orange-400/10 placeholder:text-gray-300"
                                        placeholder={t("fields.email.placeholder")}
                                    />
                                </div>

                                <div className="relative">
                                    <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4 mb-2">
                                        <Hash className="w-3 h-3" /> {t("fields.folio.label")}
                                    </label>
                                    <input
                                        {...register("folio", { required: true })}
                                        className="w-full px-6 py-5 bg-gray-50 border-none rounded-[20px] font-bold text-gray-900 outline-none transition-all focus:ring-4 focus:ring-orange-400/10 placeholder:text-gray-300"
                                        placeholder="EXP-XXXXX"
                                    />
                                </div>
                            </div>

                            {/* Bloque de Precio */}
                            <div className="bg-gray-900 rounded-[30px] p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                    <DollarSign className="w-20 h-20" />
                                </div>
                                
                                <label className="block text-[10px] font-black text-orange-400 uppercase tracking-[0.2em] mb-4">
                                    {t("fields.amount.label")}
                                </label>
                                
                                <div className="relative flex items-center">
                                    <span className="text-4xl font-black text-white mr-2">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        {...register("costoBase", { required: true, min: 1 })}
                                        className="bg-transparent border-none p-0 text-5xl font-black text-white outline-none w-full placeholder:text-gray-700"
                                        placeholder="0.00"
                                    />
                                </div>
                                
                                <p className="mt-4 text-xs font-bold text-gray-400 italic">
                                    {t("fields.amount.disclaimer")}
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={isAdded}
                                className={`w-full py-6 rounded-[24px] font-black uppercase tracking-widest transition-all transform active:scale-95 flex items-center justify-center gap-3 shadow-xl ${
                                    isAdded 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-orange-400 hover:bg-orange-500 text-white shadow-orange-200'
                                }`}
                            >
                                {isAdded ? (
                                    <>
                                        <CheckCircle2 className="w-6 h-6 animate-bounce" />
                                        {t("buttons.success")}
                                    </>
                                ) : (
                                    <>
                                        {t("buttons.submit")}
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-4 pt-4">
                                <div className="h-px flex-1 bg-gray-100" />
                                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">
                                    {t("secure_payment")}
                                </span>
                                <div className="h-px flex-1 bg-gray-100" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PaymentForm;