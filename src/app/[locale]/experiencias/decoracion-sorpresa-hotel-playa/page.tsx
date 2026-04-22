import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function DecorationSorpresaES() {
  return (
    <ExperiencePage
      title="Decoración Sorpresa Hotel / Playa"
      heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      subtitle="Contáctanos para diseñar tu propuesta completamente a tu medida."
      description="Transformamos habitaciones de hotel o villas privadas en escenarios románticos perfectos para sorprender en aniversarios, cumpleaños o escapadas especiales. Disponible en hoteles y destinos de playa en distintas ciudades de México, previa coordinación con el hotel."
      slug="decoracion-sorpresa-hotel-playa"
      infoLists={[
        {
          title: "Disponible en hoteles, villas privadas y suites en:",
          items: [
            "Cancún",
            "Tulum",
            "Playa del Carmen",
            "Los Cabos",
            "Puerto Vallarta",
            "Ciudad de México",
            "Guadalajara",
            "Mérida",
          ],
          icon: "map",
          isOpen: true,
        }
      ]}
      plans={[
        {
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          color: "#1F2937",
          description: "Una sorpresa romántica y bien cuidada para momentos especiales.",
          features: ["Montaje Romántico", "Coordinación Previa", "Detalle Especial"],
          name: "Sorpresa Esencial",
          price: 16100,
          duration: "2 horas de montaje y coordinación previa con hotel",
          includes: [
            "Decoración romántica básica (pétalos, globos, velas LED)",
            "Botella de vino espumoso",
            "Chocolates especiales",
            "Coordinación logística",
            "10 fotografías espontáneas",
          ],
          notIncludes: [
            "Hospedaje",
            "Cena romántica (MXN $1,500 – $3,000)",
            "Sesión profesional completa",
          ],
          slug: "sorpresa-esencial"
        },
        {
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          color: "#334155",
          description: "Pensado para celebraciones en hoteles boutique o villas privadas con una producción más completa.",
          features: ["Decoración Premium", "Producción Visual", "Cobertura Profesional"],
          name: "Sorpresa Signature",
          price: 28800,
          duration: "Montaje personalizado + coordinación estratégica",
          includes: [
            "Decoración premium abundante",
            "Flores naturales de alto nivel",
            "Iluminación ambiental profesional",
            "Espumoso premium o mixología",
            "Mesa romántica decorada",
            "Fotógrafo profesional",
            "30 fotografías editadas",
            "Video highlight romántico",
            "Coordinación completa con hotel",
          ],
          notIncludes: [
            "Hospedaje",
            "Cena gourmet privada (cotización adicional)"
          ],
          slug: "sorpresa-signature"
        },
        {
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          color: "#F97316",
          description: "Más producción visual, más impacto y una experiencia pensada para sorprender al máximo.",
          features: ["Mayor Impacto", "Decoración Expandida", "Atención Personalizada"],
          name: "Sorpresa Luxury Destination",
          price: 28800,
          duration: "Montaje personalizado + coordinación personalizada",
          includes: [
            "Decoración romántica ampliada (mensaje personalizado, más floral, iluminación especial)",
            "Espumoso",
            "Caja gourmet",
            "16 fotografías profesionales editadas",
            "Coordinación con hotel y concierge",
          ],
          notIncludes: [
            "Hospedaje",
            "Cena privada adicional"
          ],
          slug: "sorpresa-luxury"
        },
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Cotización Personalizada – Decoraciones",
        description: "Podemos realizar esta experiencia en distintos espacios y destinos dentro de México.",
        lists: [
          {
            subtitle: "Espacios disponibles:",
            items: [
              "Hoteles boutique",
              "Villas privadas en playa",
              "Cabañas románticas",
              "Suites ejecutivas",
              "Destinos especiales dentro de México",
            ]
          },
          {
            subtitle: "La inversión final dependerá de:",
            items: [
              "Ciudad o destino",
              "Nivel de producción",
              "Políticas del hotel",
              "Cobertura audiovisual",
              "Logística de traslado",
            ]
          }
        ]
      }}
    />
  );
}

function DecorationSorpresaEn() {
  return (
    <ExperiencePage
      title="Hotel / Beach Surprise Decoration"
      heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1562338093-2d61eada0721?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/photo-1629186812846-ac85f7d984d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      subtitle="Contact us to design your proposal completely to your measure."
      description="We transform hotel rooms or private villas into perfect romantic settings for anniversaries, birthdays, or special getaways. Available in hotels and beach destinations across various cities in Mexico, with prior coordination with the hotel."
      slug="hotel-beach-surprise-decoration"
      infoLists={[
        {
          title: "Available in hotels, private villas, and suites in:",
          items: [
            "Cancun",
            "Tulum",
            "Playa del Carmen",
            "Los Cabos",
            "Puerto Vallarta",
            "Mexico City",
            "Guadalajara",
            "Merida",
          ],
          icon: "map",
          isOpen: true,
        }
      ]}
      plans={[
        {
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1678977023660-28790da72185?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          color: "#1F2937",
          description: "A romantic and carefully designed surprise for special occasions.",
          features: ["Romantic Setup", "Pre-Event Coordination", "Special Details"],
          name: "Essential Surprise",
          price: 16100,
          duration: "2 hours of setup and prior coordination with hotel",
          includes: [
            "Basic romantic decoration (petals, balloons, LED candles)",
            "Bottle of sparkling wine",
            "Special chocolates",
            "Logistics coordination",
            "10 candid photographs",
          ],
          notIncludes: [
            "Accommodation",
            "Romantic dinner (MXN $1,500 – $3,000)",
            "Full professional session",
          ],
          slug: "sorpresa-esencial"
        },
        {
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1678977023660-28790da72185?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          color: "#334155",
          description: "Ideal for boutique hotels or private villas with a more complete production setup.",
          features: ["Premium Decor", "Visual Production", "Professional Coverage"],
          name: "Signature Surprise",
          price: 28800,
          duration: "Custom setup + strategic coordination",
          includes: [
            "Abundant premium decoration",
            "High-end natural flowers",
            "Professional ambient lighting",
            "Premium sparkling wine or mixology",
            "Decorated romantic table",
            "Professional photographer",
            "30 edited photographs",
            "Romantic highlight video",
            "Full coordination with hotel",
          ],
          notIncludes: [
            "Accommodation",
            "Private gourmet dinner (additional quote)"
          ],
          slug: "sorpresa-signature"
        },
        {
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1678977023660-28790da72185?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          color: "#F97316",
          description: "Higher visual production and a more impactful surprise experience.",
          features: ["Greater Impact", "Expanded Decor", "Personalized Coordination"],
          name: "Luxury Destination Surprise",
          price: 28800,
          duration: "Custom setup + personalized coordination",
          includes: [
            "Enhanced romantic decoration (custom message, more floral, special lighting)",
            "Sparkling wine",
            "Gourmet box",
            "16 edited professional photographs",
            "Coordination with hotel and concierge",
          ],
          notIncludes: [
            "Accommodation",
            "Additional private dinner"
          ],
          slug: "sorpresa-luxury"
        },
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1673448758890-bd81d34dae1c?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Custom Quote – Decorations",
        description: "We can create this experience across different spaces and destinations in Mexico.",
        lists: [
          {
            subtitle: "Available spaces:",
            items: [
              "Boutique hotels",
              "Private beach villas",
              "Romantic cabins",
              "Executive suites",
              "Special destinations within Mexico",
            ]
          },
          {
            subtitle: "Final investment depends on:",
            items: [
              "City or destination",
              "Production level",
              "Hotel policies",
              "Audiovisual coverage",
              "Transportation logistics",
            ]
          }
        ]
      }}
    />
  );
}

export default function DecorationSorpresaPage() {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <DecorationSorpresaEn />;
    case "es":
    default:
      return <DecorationSorpresaES />;
  }
}