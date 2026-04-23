"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import {
    Trash2,
    CreditCard,
    User,
    Calendar,
    ShieldCheck,
    Loader2,
    ArrowRight,
    ShoppingBag,
    CheckCircle2,
    XCircle,
    Lock,
    Ticket
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function CartPage() {
    const t = useTranslations("CartPage");
    const { items, cartTotal, removeItem, clearCart, cartCount } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const locale = useLocale();

    const [modal, setModal] = useState<{
        show: boolean;
        type: 'success' | 'error';
        message: string;
        orderId?: string;
    }>({ show: false, type: 'success', message: '' });

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone1: "",
        city: "",
        address1: "",
        postalCode: "",
        state: "",
        country: "MX",
    });

    const [card, setCard] = useState({
        cardNumber: "",
        cardholderName: "",
        expirationYear: "",
        expirationMonth: "",
        cvv: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, section: 'customer' | 'card') => {
        const { name, value } = e.target;
        if (section === 'customer') {
            setCustomer(prev => ({ ...prev, [name]: value }));
        } else {
            setCard(prev => ({ ...prev, [name]: value }));
        }
    };

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/${locale ?? "es"}/api/checkout`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    customer,
                    card,
                    items,
                    total: cartTotal
                })
            });

            const result = await response.json();

            if (result.success) {
                setModal({
                    show: true,
                    type: 'success',
                    message: t("modal.success_message"),
                    orderId: result.orderId
                });
                clearCart();
            } else {
                throw new Error(result.error || t("modal.default_error"));
            }
        } catch (error: any) {
            setModal({
                show: true,
                type: 'error',
                message: error.message
            });
        } finally {
            setLoading(false);
        }
    };

    if (cartCount === 0 && !modal.show) {
        return (
            <>
                <Header />
                <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-gray-400" />
                    </div>
                    <h2 className="text-3xl font-black uppercase text-gray-900">{t("empty.title")}</h2>
                    <button
                        onClick={() => router.push("/")}
                        className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-orange-400 transition-colors"
                    >
                        {t("empty.button")}
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#F8FAFA] pt-32 pb-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                        {t.rich("title", {
                            span: (chunks) => <span className="text-orange-400">{chunks}</span>
                        })}
                    </h1>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* COLUMNA IZQUIERDA: ITEMS */}
                        <div className="lg:col-span-7 space-y-6">
                            {items.map((item, idx) => (
                                <div key={idx} className="bg-white rounded-[32px] p-8 flex flex-col md:flex-row gap-6 items-center border border-gray-100 shadow-sm">
                                    <div className="flex-1 w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 bg-orange-50 px-3 py-1 rounded-full">
                                                {item.experience_slug === 'custom-quote' ? t("items.tag_custom") : t("items.tag_plan")}
                                            </span>
                                            <button onClick={() => removeItem(idx)} className="text-gray-300 hover:text-red-500 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <h3 className="text-2xl font-black text-gray-900 uppercase leading-none mb-2">{item.experience_name}</h3>
                                        <p className="text-gray-500 font-bold text-sm mb-4">{item.plan_name} • {item.personas} {t("items.pax")}</p>
                                        <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400">
                                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {item.fecha}</div>
                                            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> {t("items.iva_included")}</div>
                                        </div>
                                    </div>
                                    <div className="text-right w-full md:w-auto">
                                        <p className="text-3xl font-black text-gray-900">
                                            ${new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US').format(item.price)}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-gray-900 rounded-[32px] p-10 text-white flex justify-between items-center">
                                <div>
                                    <p className="text-gray-400 font-black uppercase text-xs tracking-widest">{t("summary.total_label")}</p>
                                    <h2 className="text-4xl md:text-5xl font-black text-green-400">
                                        ${new Intl.NumberFormat(locale === 'es' ? 'es-MX' : 'en-US').format(cartTotal)}
                                    </h2>
                                </div>
                                <CreditCard className="w-12 h-12 text-white/20 hidden md:block" />
                            </div>
                        </div>

                        {/* COLUMNA DERECHA: FORMULARIO */}
                        <div className="lg:col-span-5">
                            <form onSubmit={handlePayment} className="space-y-6">
                                {/* Datos de contacto */}
                                <div className="bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-8 flex items-center gap-3 text-gray-900">
                                        <User className="w-5 h-5 text-gray-400" /> {t("form.contact_title")}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input required value={customer.firstName} name="firstName" placeholder={t("form.placeholders.first_name")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-1 input-odyssey" />
                                        <input required value={customer.lastName} name="lastName" placeholder={t("form.placeholders.last_name")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-1 input-odyssey" />
                                        <input required value={customer.email} name="email" type="email" placeholder={t("form.placeholders.email")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-2 input-odyssey" />
                                        <input required value={customer.phone1} name="phone1" placeholder={t("form.placeholders.phone")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-2 input-odyssey" />
                                        <input required value={customer.address1} name="address1" placeholder={t("form.placeholders.address")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-2 input-odyssey" />
                                        <input required value={customer.city} name="city" placeholder={t("form.placeholders.city")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-1 input-odyssey" />
                                        <input required value={customer.postalCode} name="postalCode" placeholder={t("form.placeholders.zip")} onChange={(e) => handleInputChange(e, 'customer')} className="col-span-1 input-odyssey" />
                                    </div>
                                </div>

                                {/* Método de Pago */}
                                <div className="bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3 text-gray-900">
                                            <CreditCard className="w-5 h-5 text-green-400" /> {t("form.payment_title")}
                                        </h3>
                                        <div className="h-6 w-20 relative opacity-70 transition-all">
                                            <Image src="/logo-keycop.webp" alt="Keycop" fill className="object-contain" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <input value={card.cardNumber} required name="cardNumber" placeholder={t("form.placeholders.card_number")} onChange={(e) => handleInputChange(e, 'card')} className="w-full input-odyssey" maxLength={16} />
                                        <input value={card.cardholderName} required name="cardholderName" placeholder={t("form.placeholders.card_holder")} onChange={(e) => handleInputChange(e, 'card')} className="w-full input-odyssey uppercase" />
                                        <div className="grid grid-cols-3 gap-4">
                                            <input required value={card.expirationMonth} name="expirationMonth" placeholder="MM" onChange={(e) => handleInputChange(e, 'card')} className="input-odyssey" maxLength={2} />
                                            <input required value={card.expirationYear} name="expirationYear" placeholder="YY" onChange={(e) => handleInputChange(e, 'card')} className="input-odyssey" maxLength={2} />
                                            <input required value={card.cvv} name="cvv" type="password" placeholder="CVV" onChange={(e) => handleInputChange(e, 'card')} className="input-odyssey" maxLength={4} />
                                        </div>
                                    </div>

                                    <button type="submit" disabled={loading} className="w-full bg-gray-900 text-white py-6 rounded-[20px] font-black text-lg uppercase tracking-widest mt-10 hover:bg-orange-400 transition-all flex items-center justify-center gap-3 disabled:bg-gray-400">
                                        {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <>{t("form.submit_button")} <ArrowRight className="w-5 h-5" /></>}
                                    </button>

                                    <div className="mt-8 flex flex-col items-center gap-2">
                                        <div className="flex items-center gap-4 opacity-60">
                                            <Image src="/visa-mastercard.jpg" width={80} height={30} alt="Visa Mastercard" className="object-contain" />
                                            <Image src="/secure-payment.png" width={100} height={40} alt="Secure Payment" className="object-contain" />
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                            <Lock className="w-3 h-3" /> {t("form.encryption_note")}
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <style jsx>{`
                .input-odyssey {
                    @apply w-full bg-gray-50 border-none rounded-xl py-5 px-6 font-bold text-gray-900 outline-none focus:ring-4 focus:ring-green-400/20 transition-all placeholder:text-gray-300;
                }
            `}</style>

            {/* MODAL DE RESULTADO */}
            {modal.show && (
                <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-500">
                    <div className="bg-white w-full max-w-lg rounded-[48px] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                        
                        {modal.type === 'success' && (
                            <div className="absolute top-0 left-0 w-full h-2 bg-green-400"></div>
                        )}

                        <div className={`w-24 h-24 mx-auto mb-8 rounded-[32px] flex items-center justify-center ${modal.type === 'success' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                            {modal.type === 'success' ? <CheckCircle2 className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-gray-900">
                            {modal.type === 'success' ? t("modal.success_title") : t("modal.error_title")}
                        </h2>

                        <p className="text-gray-500 font-bold text-lg mb-8 leading-tight">
                            {modal.message}
                        </p>

                        {modal.type === 'success' && modal.orderId && (
                            <div className="bg-gray-50 rounded-[32px] p-8 mb-10 border border-gray-100 text-left">
                                <div className="flex items-center justify-between mb-4 border-b border-dashed border-gray-200 pb-4">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{t("modal.reference")}</span>
                                    <span className="text-sm font-black text-gray-900">#{modal.orderId}</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                        <Ticket className="w-4 h-4 text-orange-400" />
                                        {t("modal.ticket_sent")}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        {t("modal.insurance_active")}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => {
                                    if (modal.type === 'success') {
                                        setModal({ ...modal, show: false });
                                        router.push('/');
                                    } else {
                                        setModal({ ...modal, show: false });
                                    }
                                }}
                                className={`w-full py-6 rounded-[24px] font-black uppercase tracking-widest transition-all shadow-xl ${
                                    modal.type === 'success' 
                                    ? 'bg-green-400 hover:bg-green-500 text-white shadow-green-100' 
                                    : 'bg-gray-900 text-white'
                                }`}
                            >
                                {modal.type === 'success' ? t("modal.button_success") : t("modal.button_error")}
                            </button>
                            
                            {modal.type === 'success' && (
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                                    {t("modal.thanks")}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}