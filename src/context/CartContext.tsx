"use client";

import { CartItem } from "@/interfaces/cart/CartItem";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: CartItem) => void;
  updateItem: (id: string, updates: Partial<CartItem>) => void;
  removeItem: (index: number) => void; // Cambiado a index para permitir duplicados de slug con distinta fecha
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // 1. Cargar datos inicialmente
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (e) {
        console.error("Error parsing cart", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // 2. Guardar datos solo después de la hidratación inicial
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      // OPCIÓN A: Permitir múltiples planes de la misma experiencia 
      // (Validamos por slug + nombre del plan para que no sean idénticos)
      const isDuplicate = prev.find(i => 
        i.experience_slug === item.experience_slug && 
        i.plan_name === item.plan_name &&
        i.fecha === item.fecha
      );

      if (isDuplicate) return prev; 
      
      return [...prev, item];
    });
  };

  const updateItem = (slug: string, updates: Partial<CartItem>) => {
    setCart(prev =>
      prev.map(item =>
        item.experience_slug === slug ? { ...item, ...updates } : item
      )
    );
  };

  // Es mejor remover por INDEX, ya que un usuario puede comprar 
  // la misma experiencia dos veces para diferentes fechas.
  const removeItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  // Helpers calculados automáticamente
  const cartCount = cart.length;
  const cartTotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      cartCount, 
      cartTotal, 
      addToCart, 
      updateItem, 
      removeItem, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("CartContext missing");
  return ctx;
};