export interface CartItem {
  // Experience plan to cart
  experience_slug: string;
  experience_name: string;
  plan_name: string;
  plan_duration: string;
  fecha: string;
  personas: number;

  // Cotizacion personalizada contact
  nombre?: string;
  email?: string;
  cotization_folio?: string;
  
  // Propiedades comunes
  price: number;  
}