"use client";

import { CartItem } from "@/interfaces/cart/CartItem";
import { CardInformation } from "@/interfaces/payment/CardInformation";
import { CustomerInformation } from "@/interfaces/payment/CustomerInformation";
import { PaymentRequest } from "@/interfaces/payment/PaymentRequest";
import { processKeycopPayment } from "@/lib/payment";
import { useEffect, useMemo, useState } from "react";

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    // Cargar carrito desde localStorage al montar
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Error cargando el carrito");
            }
        }
        setIsInitialized(true);
    }, []);

    // Guardar en localStorage cada vez que cambie
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("cart", JSON.stringify(items));
        }
    }, [items, isInitialized]);

    const addItem = (item: CartItem) => {
        setItems((prev) => [...prev, item]);
    };

    const removeItem = (index: number) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setItems([]);
        localStorage.removeItem("cart");
    };

    const cartCount = items.length;

    const cartTotal = useMemo(() => {
        return items.reduce((acc, item) => acc + (item.price || 0), 0);
    }, [items]);

    /**
     * Procesa el pago total del carrito
     */
    const checkout = async (cardData: CardInformation, customerData: CustomerInformation) => {
        if (items.length === 0) throw new Error("El carrito está vacío");

        setLoading(true);
        try {
            const paymentRequest: PaymentRequest = {
                amount: cartTotal,
                reference: `OD-WEB-${Date.now()}`, // Generamos referencia única
                customer: customerData,
                card: cardData,
                currency: "484"
            };

            const result = await processKeycopPayment(paymentRequest);

            if (result.success) {
                clearCart();
                return { success: true, orderId: result.orderId };
            } else {
                throw new Error(result.error || "Pago declinado");
            }
        } catch (error: any) {
            console.error("Checkout error:", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    return {
        items,
        addItem,
        removeItem,
        clearCart,
        cartCount,
        cartTotal,
        checkout,
        loading
    };
}