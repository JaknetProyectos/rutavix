import { CartItem } from "@/interfaces/cart/CartItem";

export function getCart(): CartItem[] {
    if (typeof window === "undefined") return [];

    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

export function addToCart(item: CartItem) {
    const cart = getCart();

    // evitar duplicados (opcional pero recomendado)
    const exists = cart.find(i => i.experience_slug === item.experience_slug);

    if (exists) {
        return; // o podrías actualizar cantidad
    }

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCart() {
    localStorage.removeItem("cart");
}

export function removeFromCart(id: string) {
    const cart = getCart().filter(item => item.experience_slug !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
}