import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function ExperienciaFotograficaPageES() {
  return (
    <ExperiencePage
      title="Experiencia Fotográfica Viajera en México"
      slug="experiencia-fotografica-viajera"
      subtitle="Convierte tus viajes en recuerdos eternos"
      heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1618151193636-acf8bed54982?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/flagged/photo-1578001646127-f97b867353b9?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      description={`Te ofrecemos una experiencia fotográfica profesional diseñada para capturar tu esencia en escenarios únicos de México. Ya sea en ciudades vibrantes, playas paradisíacas o encantadores Pueblos Mágicos, creamos imágenes que cuentan tu historia con estilo, naturalidad y emoción.

Trabajamos en distintas ciudades y destinos dentro de México, adaptando cada sesión al entorno, la luz y la arquitectura del lugar. Desde calles coloniales llenas de color hasta paisajes naturales impresionantes.`}
      infoLists={[
        {
          title: "Destinos Disponibles",
          icon: "map",
          items: [
            "Ciudad de México (Centro Histórico, Roma, Coyoacán, Xochimilco)",
            "Guadalajara",
            "Monterrey",
            "Puebla",
            "Querétaro",
            "Mérida",
          ],
          isOpen: true
        },
        {
          title: "Destinos de playa",
          icon: "star",
          items: [
            "Cancún",
            "Tulum",
            "Playa del Carmen",
            "Puerto Vallarta",
            "Los Cabos",
            "Mazatlán",
          ]
        },
        {
          title: "Pueblos Mágicos ideales para sesión",
          icon: "map",
          items: [
            "San Miguel de Allende",
            "Valle de Bravo",
            "Tepoztlán",
            "Bacalar",
            "Bernal",
            "Huasca de Ocampo",
          ]
        }
      ]}
      plans={[
        {
          slug: "mini-sesion-express",
          name: "Mini Sesión Express Viajera",
          price: 2500,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1618151193636-acf8bed54982?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "45 minutos",
          description: "Perfecta para recuerdos espontáneos, contenido natural para redes sociales o una sesión breve en un solo spot.",
          features: ["15 fotos editadas", "1 locación", "Entrega en 3 días"],
          includes: [
            "Sesión fotográfica de 45 minutos",
            "15 fotografías en alta resolución",
            "Edición digital básica (color y luz)",
            "Galería digital privada",
            "Uso de 1 outfit"
          ],
          notIncludes: [
            "Maquillaje y peinado",
            "Cambios de outfit ilimitados",
            "Transporte entre locaciones",
            "Impresiones físicas"
          ]
        },
        {
          slug: "sesion-viajera-media",
          name: "Sesión Fotográfica Viajera Media",
          price: 10500,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1732835448073-810cced8fbe5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 a 3 horas",
          description: "Una experiencia diseñada para capturar tu esencia en escenarios inolvidables, ideal para parejas o viajeros que buscan mayor variedad.",
          features: ["45 fotos editadas", "2 a 3 locaciones", "Asesoría de vestuario"],
          includes: [
            "Sesión de hasta 3 horas",
            "45 fotografías con edición avanzada",
            "Cambio de hasta 2 outfits",
            "Múltiples puntos dentro de una zona",
            "Asesoría previa de locaciones",
            "Entrega en 5 días hábiles"
          ],
          notIncludes: [
            "Viáticos fuera de CDMX o zona base",
            "Entradas a museos o recintos privados",
            "Video profesional (disponible como extra)"
          ]
        },
        {
          slug: "experiencia-premium",
          name: "Experiencia Fotográfica Viajera Premium",
          price: 15600,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1486149370945-b0e59dc9485b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "Media jornada (5 a 6 horas)",
          description: "Una producción completa para capturar tu historia con estilo cinematográfico y máxima variedad de escenarios.",
          features: ["90 fotos editadas", "Producción cinematográfica", "Edición fine art"],
          includes: [
            "Sesión de media jornada",
            "90 fotografías con retoque de alta gama",
            "Cambios de outfit ilimitados",
            "Storytelling fotográfico completo",
            "Asesoría integral de concepto visual",
            "Prioridad de entrega (48 horas)"
          ],
          notIncludes: [
            "Hospedaje del fotógrafo (si aplica)",
            "Renta de equipo especial (drones de cine)",
            "Maquillaje profesional (opcional)"
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1682092208129-661d154db875?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Cotización Personalizada – Fotografía",
        description: "Si tu destino no se encuentra en nuestra lista, indícanos la ciudad, playa o Pueblo Mágico de tu preferencia para enviarte una cotización personalizada.",
        lists: [
          {
            subtitle: "Factores de logística",
            items: [
              "Traslados y viáticos",
              "Permisos de locación",
              "Días de producción",
              "Número de personas"
            ]
          }
        ]
      }}
      idealSectionTitle="¿Qué hace diferente esta experiencia?"
      idealPara={[
        {
          title: " ",
          items: [
            "Planeación personalizada según el destino",
            "Asesoría de vestuario para armonizar con el entorno",
            "Dirección profesional durante toda la sesión",
            "Edición cuidada que resalta luz, color y detalles",
            "Entrega digital privada y segura",
          ],
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1732835448073-810cced8fbe5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
          title: " ",
          items: [
            "Cada sesión está pensada para parejas, viajeras, celebraciones especiales, cumpleaños, aniversarios, viajes con amigas o simplemente para regalarte un recuerdo inolvidable."
          ],
          image: getOptimizedUrl("https://images.unsplash.com/photo-1728151620781-133d2a9029fe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
          title: "No es solo una sesión de fotos.",
          items: [
            "Es una forma de capturar momentos irrepetibles en los lugares más especiales de México."
          ],
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1682092208129-661d154db875?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
          title: "Contáctanos",
          items: [
            "y diseñemos juntos tu experiencia fotográfica en el destino que tengas en mente."
          ],
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1674389991679-e1a7a0b3e0a7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        }
      ]}
    />
  );
}

function ExperienciaFotograficaEn() {
  return (
    <ExperiencePage
      title="Travel Photography Experience in Mexico"
      slug="travel-photography-experience"
      subtitle="Turn your travels into timeless memories"
      heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1535159530326-d7bf54bfb24e?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1732835448073-810cced8fbe5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      description={`We offer a professional photography experience designed to capture your essence in Mexico’s most unique settings. Whether in vibrant cities, paradise beaches, or charming Magical Towns, we create images that tell your story with style, authenticity, and emotion.

We work across multiple cities and destinations in Mexico, adapting each session to the environment, light, and architecture of the place. From colorful colonial streets to breathtaking natural landscapes.`}
      infoLists={[
        {
          title: "Available destinations",
          icon: "map",
          items: [
            "Mexico City (Historic Center, Roma, Coyoacán, Xochimilco)",
            "Guadalajara",
            "Monterrey",
            "Puebla",
            "Queretaro",
            "Merida",
          ],
          isOpen: true
        },
        {
          title: "Beach destinations",
          icon: "star",
          items: [
            "Cancun",
            "Tulum",
            "Playa del Carmen",
            "Puerto Vallarta",
            "Los Cabos",
            "Mazatlan",
          ]
        },
        {
          title: "Ideal Magical Towns",
          icon: "map",
          items: [
            "San Miguel de Allende",
            "Valle de Bravo",
            "Tepoztlán",
            "Bacalar",
            "Bernal",
            "Huasca de Ocampo",
          ]
        }
      ]}
      plans={[
        {
          slug: "mini-sesion-express",
          name: "Traveler Express Mini Session",
          price: 2500,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1551279880-03041531948f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "45 minutes",
          description: "Perfect for spontaneous memories, natural content, or a short session in a single location.",
          features: ["15 edited photos", "1 location", "3-day delivery"],
          includes: [
            "45-minute photo session",
            "15 high-resolution photographs",
            "Basic digital editing (color and light)",
            "Private digital gallery",
            "Use of 1 outfit"
          ],
          notIncludes: [
            "Hair and makeup",
            "Unlimited outfit changes",
            "Transportation between locations",
            "Physical prints"
          ]
        },
        {
          slug: "sesion-viajera-media",
          name: "Mid-Range Traveler Session",
          price: 10500,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1732835448073-810cced8fbe5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 to 3 hours",
          description: "Designed to capture your essence in unforgettable settings, ideal for couples or travelers seeking variety.",
          features: ["45 edited photos", "2 to 3 locations", "Wardrobe guidance"],
          includes: [
            "Up to 3-hour session",
            "45 photographs with advanced editing",
            "Up to 2 outfit changes",
            "Multiple spots within one area",
            "Location guidance before the session",
            "Delivery in 5 business days"
          ],
          notIncludes: [
            "Travel expenses outside CDMX or base zone",
            "Entrance fees to museums or private venues",
            "Professional video (available as an extra)"
          ]
        },
        {
          slug: "experiencia-premium",
          name: "Premium Traveler Photography Experience",
          price: 15600,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1486149370945-b0e59dc9485b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "Half day (5 to 6 hours)",
          description: "A complete production designed to tell your story with cinematic style and maximum variety of settings.",
          features: ["90 edited photos", "Cinematic production", "Fine art editing"],
          includes: [
            "Half-day session",
            "90 photographs with high-end retouching",
            "Unlimited outfit changes",
            "Complete photographic storytelling",
            "Comprehensive visual concept guidance",
            "Priority delivery (48 hours)"
          ],
          notIncludes: [
            "Photographer accommodation (if applicable)",
            "Special equipment rental (cinema drones)",
            "Professional makeup (optional)"
          ]
        }
      ]}
      idealSectionTitle="What makes this experience different?"
      idealPara={[
        {
          title: " ",
          items: [
            "Custom planning based on your destination",
            "Wardrobe guidance to harmonize with the environment",
            "Professional direction throughout the session",
            "Careful editing that highlights light, color, and detail",
            "Private and secure digital delivery",
          ],
          image: getOptimizedUrl("https://images.unsplash.com/photo-1551279880-03041531948f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
          title: " ",
          items: [
            "Each session is designed for couples, travelers, special celebrations, birthdays, anniversaries, trips with friends, or simply to gift yourself an unforgettable memory."
          ],
          image: getOptimizedUrl("https://images.unsplash.com/photo-1531166473306-c4c0827f3a89?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
          title: "It’s not just a photo session.",
          items: [
            "It’s a way to capture unrepeatable moments in the most special places in Mexico."
          ],
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1682092208129-661d154db875?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        },
        {
          title: "Contact us",
          items: [
            "and let’s design your photography experience together in the destination you have in mind."
          ],
          image: getOptimizedUrl("https://images.unsplash.com/photo-1564762332974-5bf63a654c9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1682092208129-661d154db875?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Custom Quote – Photography",
        description: "If your destination is not on our list, tell us the city, beach, or Magical Town you prefer and we will prepare a personalized quote.",
        lists: [
          {
            subtitle: "Logistics factors",
            items: [
              "Travel and expenses",
              "Location permits",
              "Production days",
              "Number of people"
            ]
          }
        ]
      }}
    />
  );
}

export default function ExperienciaFotograficaPage() {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <ExperienciaFotograficaEn />;
    case "es":
    default:
      return <ExperienciaFotograficaPageES />;
  }
}