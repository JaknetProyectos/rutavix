import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function PicnicRomanticoES() {
  return (
    <ExperiencePage
      title="Experiencia Picnic Romántico / Boho en México"
      subtitle="Vive un momento íntimo, estético y cuidadosamente diseñado"
      heroImage={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1678914346808-c89ba6317b6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      idealSectionTitle="Ideal para:"
      description={`Creamos experiencias tipo picnic con decoración boho chic, detalles artesanales y una atmósfera pensada para sorprender, celebrar o simplemente disfrutar. Ideal en parques, jardines privados y destinos naturales, adaptando cada montaje al entorno para crear un ambiente mágico y relajado.`}
      infoLists={[
        {
          title: "Ciudades",
          icon: "map",
          isOpen: true,
          items: [
            "Ciudad de México (Chapultepec, jardines privados)",
            "Guadalajara",
            "Querétaro",
            "Puebla",
          ]
        },
        {
          title: "Destinos Naturales / Pueblos Mágicos",
          icon: "star",
          items: [
            "Valle de Bravo",
            "Tepoztlán",
            "San Miguel de Allende",
            "Bacalar",
          ]
        },
        {
          title: "Destinos de playa",
          icon: "star",
          items: [
            "Tulum",
            "Puerto Vallarta",
            "Los Cabos",
          ]
        }
      ]}
      idealPara={[
        {
          title: "Date romántico inolvidable",
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Cada historia de amor es distinta, y cada celebración merece un diseño único."
          ]
        },
        {
          title: "Ideal en",
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1678914346808-c89ba6317b6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Aniversarios",
            "Propuestas de matrimonio",
            "Cumpleaños especiales",
            "Celebraciones sorpresa",
            "Dates románticos inolvidables",
          ]
        },
        {
          title: "También podemos integrar elementos adicionales como:",
          image: getOptimizedUrl("https://images.unsplash.com/photo-1630371223444-708db033c7c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Decoración temática especial",
            "Letras gigantes o mensaje personalizado",
            "Flores premium o arreglos especiales",
            "Cena gourmet personalizada",
            "Mariachi o músico en vivo",
            "Experiencia sorpresa coordinada",
            "Producción para propuesta de matrimonio",
            "Transporte privado",
            "Extensión de tiempo",
            "Cobertura de foto y video ampliada",
          ]
        },
        {
          title: "Nuestro equipo diseña cada experiencia con base en:",
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Destino",
            "Número de personas",
            "Nivel de producción deseado",
            "Tipo de experiencia",
            "Preferencias gastronómicas",
            "Cobertura visual",
          ]
        }
      ]}
      plans={[
        {
          slug: "boho-esencial",
          name: "Picnic Boho Esencial",
          price: 7500,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 horas de experiencia (incluye montaje previo)",
          description: "Perfecta para una sorpresa romántica sencilla, estética y bien cuidada.",
          features: ["Montaje estándar", "Canasta gourmet", "Vino incluido"],
          includes: [
            "Montaje boho básico (alfombra, cojines, mesa baja decorada)",
            "Decoración floral sencilla",
            "Canasta gourmet para 2 personas",
            "Ambientación con velas y detalles artesanales",
            "1 hora de fotógrafo (10 fotos editadas)",
          ],
          notIncludes: [
            "Transporte (MXN $500 – $1,500 según destino)",
            "Chef en vivo",
            "Barra de postres",
          ]
        },
        {
          slug: "boho-signature",
          name: "Picnic Romántico Boho Signature",
          price: 12800,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 horas de montaje y 2 horas de picnic",
          description: "Nuestra experiencia más solicitada. Un equilibrio perfecto entre romanticismo, estética y producción cuidada.",
          features: ["Menú gourmet", "Decoración premium", "Espumoso incluido"],
          includes: [
            "Montaje completo con decoración boho premium",
            "Arreglo floral más elaborado",
            "Canasta gourmet para 2 personas",
            "Música ambiental",
            "Fotógrafo profesional por 2 horas",
            "15 fotografías editadas en alta resolución",
          ],
          notIncludes: [
            "Transporte (MXN $500 – $1,500 según destino)",
            "Chef en vivo (MXN $1,800)",
            "Barra de postres (MXN $1,200)",
          ]
        },
        {
          slug: "boho-luxury-proposal",
          name: "Experiencia Picnic Boho Luxury Proposal",
          price: 80000,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "4 horas de montaje personalizado y 3 horas de experiencia privada",
          description: "Una experiencia premium con producción completa, ideal para propuestas de matrimonio o celebraciones inolvidables.",
          features: ["Logística sorpresa", "Foto y video incluido", "Violinista en vivo"],
          includes: [
            "Diseño conceptual personalizado (moodboard previo)",
            "Montaje boho de lujo con mobiliario premium",
            "Decoración floral abundante y velas decorativas",
            "Iluminación especial tipo atardecer o fairy lights",
            "Mesa gourmet de alto nivel",
            "Chef en vivo preparando platillos selectos",
            "Barra de postres artesanal",
            "Botella de vino espumoso o mixología especial",
            "Fotógrafo profesional 3 horas",
            "20 fotografías editadas",
            "Video highlight tipo cinematic (1 min)",
          ],
          notIncludes: [
            "Transporte fuera de la zona establecida (cotización adicional si aplica)",
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Cotización Personalizada – Picnic Romántico",
        description: "Si deseas realizar tu experiencia en otra ciudad o destino, compártenos el lugar específico y te enviaremos una propuesta personalizada considerando permisos, mobiliario y traslado.",
        lists: [
          {
            subtitle: "Factores a considerar:",
            items: [
              "Destino o locación específica",
              "Número de personas",
              "Mobiliario requerido",
              "Nivel de decoración y producción",
              "Traslados y permisos especiales"
            ]
          }
        ]
      }}
    />
  );
}

function PicnicRomanticoEN() {
  return (
    <ExperiencePage
      title="Romantic / Boho Picnic Experience in Mexico"
      subtitle="Live an intimate, aesthetic, and carefully designed moment"
      heroImage={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1678914346808-c89ba6317b6d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      idealSectionTitle="Ideal for:"
      description={`We create picnic-style experiences with boho-chic decor, handcrafted details, and an atmosphere designed to surprise, celebrate, or simply enjoy. Ideal for parks, private gardens, and natural destinations, adapting each setup to the environment to create a magical and relaxed atmosphere.`}
      infoLists={[
        {
          title: "Cities",
          icon: "map",
          isOpen: true,
          items: [
            "Mexico City (Chapultepec, private gardens)",
            "Guadalajara",
            "Queretaro",
            "Puebla",
          ]
        },
        {
          title: "Natural Destinations / Magical Towns",
          icon: "star",
          items: [
            "Valle de Bravo",
            "Tepoztlan",
            "San Miguel de Allende",
            "Bacalar",
          ]
        },
        {
          title: "Beach Destinations",
          icon: "star",
          items: [
            "Tulum",
            "Puerto Vallarta",
            "Los Cabos",
          ]
        }
      ]}
      idealPara={[
        {
          title: "Unforgettable romantic date",
          image: getOptimizedUrl("https://images.unsplash.com/photo-1615199348139-00bf10980769?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Every love story is different, and every celebration deserves a unique design."
          ]
        },
        {
          title: "Perfect for",
          image: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1680706777258-553b9357eb04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Anniversaries",
            "Marriage proposals",
            "Special birthdays",
            "Surprise celebrations",
            "Unforgettable romantic dates",
          ]
        },
        {
          title: "We can also integrate additional elements such as:",
          image: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Special themed decoration",
            "Giant letters or personalized message",
            "Premium flowers or special arrangements",
            "Custom gourmet dinner",
            "Mariachi or live musician",
            "Coordinated surprise experience",
            "Marriage proposal production",
            "Private transportation",
            "Extra time",
            "Extended photo and video coverage",
          ]
        },
        {
          title: "Our team designs each experience based on:",
          image: getOptimizedUrl("https://images.unsplash.com/photo-1630276740239-5d9c23d49531?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          items: [
            "Destination",
            "Number of guests",
            "Desired production level",
            "Type of experience",
            "Gastronomic preferences",
            "Visual coverage",
          ]
        }
      ]}
      plans={[
        {
          slug: "boho-esencial",
          name: "Essential Boho Picnic",
          price: 7500,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 hours of experience (includes prior setup)",
          description: "Perfect for a simple yet elegant romantic surprise.",
          features: ["Standard setup", "Gourmet basket", "Wine included"],
          includes: [
            "Basic boho setup (rug, cushions, decorated low table)",
            "Simple floral decoration",
            "Gourmet basket for 2 people",
            "Ambience with candles and handcrafted details",
            "1 hour of photographer (10 edited photos)",
          ],
          notIncludes: [
            "Transportation (MXN $500 – $1,500 depending on destination)",
            "Live chef",
            "Dessert bar",
          ]
        },
        {
          slug: "boho-signature",
          name: "Signature Romantic Boho Picnic",
          price: 12800,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 hours setup and 2 hours picnic",
          description: "Our most requested experience. A perfect balance between romance, aesthetics, and careful production.",
          features: ["Gourmet menu", "Premium decoration", "Sparkling wine"],
          includes: [
            "Full setup with premium boho decoration",
            "More elaborate floral arrangement",
            "Gourmet basket for 2 people",
            "Ambient music",
            "Professional photographer for 2 hours",
            "15 edited high-resolution photographs",
          ],
          notIncludes: [
            "Transportation (MXN $500 – $1,500 depending on destination)",
            "Live chef (MXN $1,800)",
            "Dessert bar (MXN $1,200)",
          ]
        },
        {
          slug: "boho-luxury-proposal",
          name: "Luxury Proposal Boho Picnic Experience",
          price: 80000,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "4 hours custom setup and 3 hours private experience",
          description: "A premium experience with full production, ideal for marriage proposals or unforgettable celebrations.",
          features: ["Surprise logistics", "Photo & video included", "Live violinist"],
          includes: [
            "Personalized conceptual design (prior moodboard)",
            "Luxury boho setup with premium furniture",
            "Abundant floral decoration and decorative candles",
            "Special sunset lighting or fairy lights",
            "High-end gourmet table",
            "Live chef preparing select dishes",
            "Handcrafted dessert bar",
            "Bottle of sparkling wine or special mixology",
            "Professional photographer for 3 hours",
            "20 edited photographs",
            "Cinematic highlight video (1 min)",
          ],
          notIncludes: [
            "Transportation outside the established zone (additional quote if applicable)",
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1676667573119-40081df5d920?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Custom Quote – Romantic Picnic",
        description: "If you would like to create your experience in another city or destination, share the specific location with us and we will send you a personalized proposal considering permits, furniture, and transportation.",
        lists: [
          {
            subtitle: "Factors to consider:",
            items: [
              "Specific destination or location",
              "Number of guests",
              "Required furniture",
              "Decoration and production level",
              "Transfers and special permits"
            ]
          }
        ]
      }}
    />
  );
}

export default function PicnicRomanticoPage() {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <PicnicRomanticoEN />;
    case "es":
    default:
      return <PicnicRomanticoES />;
  }
}