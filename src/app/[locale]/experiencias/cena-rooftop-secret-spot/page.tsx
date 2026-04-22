import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function CenaRooftopES() {
  return (
    <ExperiencePage
      title="Cena Rooftop “Secret Spot”"
      subtitle="Una experiencia privada en una azotea exclusiva con vista panorámica"
      heroImage={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1661369738490-8f39d7d75e4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      idealSectionTitle="Ideal para:"
      description={`Diseñada para momentos íntimos, propuestas de matrimonio o celebraciones especiales.
      
Creamos una atmósfera elegante y romántica en rooftops seleccionados dentro de distintas ciudades de México, cuidando cada detalle: iluminación, montaje, menú y ambientación.

Disponible en ciudades con rooftops privados o vistas panorámicas.`}
      infoLists={[
        {
          title: "Ciudades Disponibles",
          icon: "map",
          isOpen: true,
          items: [
            "Ciudad de México",
            "Guadalajara",
            "Monterrey",
            "Puebla",
            "Querétaro",
            "Mérida",
            "Cancún (vista al mar)",
            "San Miguel de Allende",
          ]
        }
      ]}
      plans={[
        {
          slug: "rooftop-essential",
          name: "Rooftop Experience Essential",
          price: 24400,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1685777634980-f7f5c9ae6c27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 horas de cena más montaje previo",
          description: "Una cena íntima con vista privilegiada y producción cuidada.",
          features: ["Vista Privilegiada", "Cena Íntima", "Producción Cuidada"],
          includes: [
            "Renta de rooftop privado (según disponibilidad)",
            "Menú gourmet de 3 tiempos personalizado",
            "Mesero durante la experiencia",
            "Decoración romántica (velas LED, flores naturales sencillas, montaje de mesa elegante)",
            "Coordinación previa del evento",
          ],
          notIncludes: [
            "Transporte al rooftop (MXN $500 – $1,200 según ubicación)",
            "Música en vivo (MXN $1,800)",
            "Fotografía profesional (MXN $2,500)",
          ]
        },
        {
          slug: "rooftop-signature",
          name: "Rooftop Experience Signature",
          price: 40200,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1685777634980-f7f5c9ae6c27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 horas de cena privada con montaje personalizado",
          description: "Más producción, más detalle y una atmósfera más impactante.",
          features: ["Mayor Producción", "Detalles Exclusivos", "Atmósfera Impactante"],
          includes: [
            "Rooftop exclusivo con vista panorámica",
            "Chef privado",
            "Menú gourmet de 3 tiempos premium",
            "Mesero dedicado",
            "Decoración romántica ampliada (centro floral más elaborado, velas decorativas, iluminación ambiental especial)",
            "Botella de vino premium o mixología personalizada",
            "Tabla de quesos o postre especial de autor",
            "Música ambiental personalizada",
            "10 fotografías profesionales editadas",
            "Coordinación integral del evento",
          ],
          notIncludes: [
            "Transporte al rooftop",
            "Músico en vivo adicional (cotización según instrumento)",
          ]
        },
        {
          slug: "rooftop-luxury",
          name: "Rooftop Experience Luxury Proposal",
          price: 60100,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1685777634980-f7f5c9ae6c27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "4 horas totales (incluye montaje especial y experiencia privada)",
          description: "Diseñado para propuestas de matrimonio o celebraciones que requieren producción completa.",
          features: ["Ideal para Propuestas", "Producción Completa", "Máxima Exclusividad"],
          includes: [
            "Rooftop premium con vista privilegiada",
            "Diseño conceptual previo (moodboard personalizado)",
            "Chef privado con menú degustación de 4 tiempos",
            "Mesero exclusivo durante todo el evento",
            "Decoración romántica de alto nivel (arreglo floral abundante, velas, iluminación cálida, letrero personalizado o mensaje luminoso)",
            "Música en vivo (saxofón, violín o guitarra)",
            "Fotógrafo profesional 2 horas",
            "40 fotografías editadas",
            "Video highlight tipo cinematic (1–2 minutos)",
            "Coordinación sorpresa para propuesta",
            "Asistencia personalizada antes y durante el evento",
          ],
          notIncludes: [
            "Transporte privado ejecutivo (cotización adicional si se requiere)",
            "Extensión de horario (costo por hora extra)",
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://images.unsplash.com/photo-1627941433145-3ca08bb930f5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Cotización Personalizada – Rooftop",
        description: "Cada ciudad, rooftop y nivel de producción es diferente. Podemos diseñar esta experiencia en distintas ciudades de México, adaptándonos a tus necesidades específicas.",
        lists: [
          {
            subtitle: "Factores a considerar:",
            items: [
              "Tipo de vista (skyline, centro histórico, mar o montaña)",
              "Número de personas",
              "Tipo de menú (vegetariano, internacional o degustación)",
              "Ambientación musical deseada",
              "Nivel de producción floral y decorativa"
            ]
          },
          {
            subtitle: "También podemos integrar:",
            items: [
              "Fotografía y video profesional",
              "Música en vivo",
              "Mixología personalizada",
              "Transporte privado",
              "Montajes especiales para propuesta"
            ]
          }
        ]
      }}
    />
  );
}

function CenaRooftopEn() {
  return (
    <ExperiencePage
      title="“Secret Spot” Rooftop Dinner"
      subtitle="A private experience on an exclusive rooftop with panoramic views"
      heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      idealSectionTitle="Ideal for:"
      description={`Designed for intimate moments, marriage proposals, or special celebrations.
      
We create an elegant and romantic atmosphere in selected rooftops across various cities in Mexico, taking care of every detail: lighting, setup, menu, and ambiance.

Available in cities with private rooftops or panoramic views.`}
      infoLists={[
        {
          title: "Available Cities",
          icon: "map",
          isOpen: true,
          items: [
            "Mexico City",
            "Guadalajara",
            "Monterrey",
            "Puebla",
            "Queretaro",
            "Merida",
            "Cancun (ocean view)",
            "San Miguel de Allende",
          ]
        }
      ]}
      plans={[
        {
          slug: "rooftop-essential",
          name: "Rooftop Experience Essential",
          price: 24400,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 hours of dinner plus setup",
          description: "An intimate dinner with a privileged view and careful production.",
          includes: [
            "Private rooftop rental (subject to availability)",
            "Personalized 3-course gourmet menu",
            "Waiter service during the experience",
            "Romantic decor (LED candles, simple natural flowers, elegant table setup)",
            "Pre-event coordination",
          ],
          notIncludes: [
            "Rooftop transportation (MXN $500 – $1,200 depending on location)",
            "Live music (MXN $1,800)",
            "Professional photography (MXN $2,500)",
          ]
        },
        {
          slug: "rooftop-signature",
          name: "Rooftop Experience Signature",
          price: 40200,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 hours of private dinner with custom setup",
          description: "Higher production, more detail, and a more striking atmosphere.",
          includes: [
            "Exclusive rooftop with panoramic view",
            "Private chef",
            "Premium 3-course gourmet menu",
            "Dedicated waiter",
            "Enhanced romantic decor (elaborate floral centerpieces, ambient lighting)",
            "Premium wine bottle or custom mixology",
            "Cheese board or signature dessert",
            "Custom ambient music",
            "10 edited professional photos",
            "Full event coordination",
          ],
          notIncludes: [
            "Rooftop transportation",
            "Additional live musician",
          ]
        },
        {
          slug: "rooftop-luxury",
          name: "Rooftop Experience Luxury Proposal",
          price: 60100,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "4 total hours (includes special setup and private experience)",
          description: "Designed for proposals or celebrations requiring full production.",
          includes: [
            "Premium rooftop with privileged view",
            "Conceptual design (personalized moodboard)",
            "Private chef with 4-course tasting menu",
            "Exclusive waiter during the entire event",
            "High-level romantic decor (abundant floral arrangements, custom signage)",
            "Live music (saxophone, violin, or guitar)",
            "Professional photographer for 2 hours",
            "40 edited photos",
            "Cinematic highlight video",
            "Surprise proposal coordination",
          ],
          notIncludes: [
            "Executive private transportation",
            "Overtime extension",
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Custom Quote – Rooftop",
        description: "Every city, rooftop, and production level is different. We can design this experience specifically for your needs.",
        lists: [
          {
            subtitle: "Factors to consider:",
            items: [
              "View type (skyline, historic center, ocean, or mountain)",
              "Number of guests",
              "Menu type",
              "Musical atmosphere",
              "Floral and decorative production level"
            ]
          },
          {
            subtitle: "Optional add-ons:",
            items: [
              "Professional photography and video",
              "Live musicians",
              "Custom mixology",
              "Private transportation",
              "Special proposal setup"
            ]
          }
        ]
      }}
    />
  );
}

export default function CenaRooftopPage() {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <CenaRooftopEn />;
    case "es":
    default:
      return <CenaRooftopES />;
  }
}