import { ExperiencePage } from "@/components/ExperiencePage";
import { getOptimizedUrl } from "@/lib/images";
import { useLocale } from "next-intl";

function PaseoPrivadoLanchaES() {
  return (
    <ExperiencePage
      title="Experiencias Paseo Privado en Lancha"
      subtitle="Vive un momento íntimo navegando en un entorno natural espectacular"
      heroImage={getOptimizedUrl("https://images.unsplash.com/photo-1704070530670-daf414e235ed?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/photo-1553505192-23b5329dcf06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      idealSectionTitle="Ideal para:"
      description={`Vive un momento íntimo navegando en un entorno natural espectacular.
      
Creamos experiencias privadas en lancha para parejas, aniversarios, propuestas o celebraciones especiales, en lagos y canales dentro de distintas ciudades y destinos de México. Cada experiencia está diseñada para que disfrutes privacidad, seguridad y una atmósfera romántica cuidadosamente planeada.`}
      infoLists={[
        {
          title: "Lagos y presas",
          icon: "map",
          isOpen: true,
          items: [
            "Valle de Bravo",
            "Tequesquitengo",
            "Chapala",
          ]
        },
        {
          title: "Canales",
          icon: "star",
          items: [
            "Xochimilco"
          ]
        },
        {
          title: "Mar",
          icon: "star",
          items: [
            "Cancún",
            "Los Cabos",
            "Puerto Vallarta",
          ]
        }
      ]}
      plans={[
        {
          slug: "paseo-esencial",
          name: "Paseo Privado Esencial",
          price: 3600,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 horas de navegación",
          description: "Una experiencia romántica sencilla, ideal para desconectarse y disfrutar del paisaje.",
          features: ["Navegación privada", "Bebida de bienvenida", "Música ambiental"],
          includes: [
            "Lancha privada con patrón certificado",
            "Seguro de pasajeros",
            "Botanas y bebidas básicas (agua, refrescos)",
            "5 fotografías espontáneas",
            "Coordinación previa de horario y punto de salida",
          ],
          notIncludes: [
            "Transporte al muelle (MXN $500 – $1,000 según ubicación)",
            "Cena a bordo",
            "Decoración especial",
          ]
        },
        {
          slug: "paseo-signature",
          name: "Paseo Privado Signature",
          price: 7600,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 horas de navegación más coordinación de acceso al muelle",
          description: "Nuestra experiencia equilibrada, con detalles que elevan el momento y una logística más cuidada.",
          features: ["Coordinación de acceso", "Tabla de snacks", "Vino espumoso"],
          includes: [
            "Lancha privada con patrón",
            "Seguro de pasajeros",
            "Snacks gourmet",
            "Bebidas (agua, refrescos y vino espumoso)",
            "10 fotografías espontáneas editadas",
            "Asistencia previa para planeación",
            "Playlist personalizada durante el recorrido",
          ],
          notIncludes: [
            "Transporte al muelle (MXN $500 – $1,000)",
            "Cena a bordo (MXN $1,500)",
            "Decoración especial (MXN $800)",
          ]
        },
        {
          slug: "paseo-luxury",
          name: "Paseo Privado Luxury Experience",
          price: 14500,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 horas de navegación privada más coordinación personalizada previa",
          description: "Diseñado para propuestas de matrimonio o celebraciones importantes, con producción visual y logística de mayor nivel.",
          features: ["Ideal para propuestas", "Decoración premium", "Brindis VIP"],
          includes: [
            "Lancha premium privada con patrón certificado",
            "Seguro de pasajeros",
            "Decoración romántica completa (flores naturales, velas LED, letrero personalizado)",
            "Cena gourmet a bordo para 2 personas",
            "Botella de vino premium o mixología especial",
            "Tabla de quesos y postres artesanales",
            "Fotógrafo profesional durante 2 horas",
            "40 fotografías editadas en alta resolución",
            "Video highlight tipo cinematic (1 minuto)",
            "Coordinación sorpresa (si es propuesta de matrimonio)",
          ],
          notIncludes: [
            "Transporte al muelle (cotización según ciudad)",
            "Extensión de tiempo (costo por hora adicional)",
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Cotización Personalizada",
        description: "Podemos realizar esta experiencia en distintos lagos y destinos dentro de México, adaptándonos al entorno y al nivel de producción que desees. Si tu destino preferido no aparece en la lista, indícanos la ciudad o marina específica para validar disponibilidad y enviarte una cotización personalizada.",
        lists: [
          {
            subtitle: "También podemos integrar:",
            items: [
              "Mariachi o saxofonista en vivo",
              "Fuegos fríos para propuesta",
              "Dron profesional",
              "Decoración temática especial",
              "Transporte privado ejecutivo",
              "Extensión de navegación",
            ],
          }
        ]
      }}
    />
  );
}

function PaseoPrivadoLanchaEN() {
  return (
    <ExperiencePage
      title="Private Boat Trip Experiences"
      subtitle="Live an intimate moment sailing through a spectacular natural setting"
      heroImage={getOptimizedUrl("https://plus.unsplash.com/premium_photo-1682623305315-806515db9c3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      image2={getOptimizedUrl("https://images.unsplash.com/photo-1553505192-23b5329dcf06?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}
      idealSectionTitle="Ideal for:"
      description={`Live an intimate moment sailing through a spectacular natural setting.
      
We create private boat experiences for couples, anniversaries, proposals, or special celebrations in lakes and canals across different cities and destinations in Mexico. Each experience is designed for you to enjoy privacy, safety, and a carefully planned romantic atmosphere.`}
      infoLists={[
        {
          title: "Lakes and reservoirs",
          icon: "map",
          isOpen: true,
          items: [
            "Valle de Bravo",
            "Tequesquitengo",
            "Chapala",
          ]
        },
        {
          title: "Canals",
          icon: "star",
          items: [
            "Xochimilco"
          ]
        },
        {
          title: "Sea",
          icon: "star",
          items: [
            "Cancun",
            "Los Cabos",
            "Puerto Vallarta",
          ]
        }
      ]}
      plans={[
        {
          slug: "paseo-esencial",
          name: "Essential Private Trip",
          price: 3600,
          color: "#1F2937",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 hours of sailing",
          description: "A simple romantic experience, ideal for disconnecting and enjoying the scenery.",
          features: ["Private sailing", "Welcome drink", "Ambient music"],
          includes: [
            "Private boat with certified skipper",
            "Passenger insurance",
            "Basic snacks and drinks (water, sodas)",
            "5 candid photographs",
            "Prior coordination of schedule and departure point",
          ],
          notIncludes: [
            "Transportation to the pier (MXN $500 – $1,000 depending on location)",
            "Dinner on board",
            "Special decoration",
          ]
        },
        {
          slug: "paseo-signature",
          name: "Signature Private Trip",
          price: 7600,
          color: "#334155",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "2 hours of sailing plus pier access coordination",
          description: "Our balanced experience, with elevated details and more refined logistics.",
          features: ["Access coordination", "Snack platter", "Sparkling wine"],
          includes: [
            "Private boat with skipper",
            "Passenger insurance",
            "Gourmet snacks",
            "Drinks (water, sodas, and sparkling wine)",
            "10 edited candid photographs",
            "Prior planning assistance",
            "Custom playlist during the trip",
          ],
          notIncludes: [
            "Transportation to the pier (MXN $500 – $1,000)",
            "Dinner on board (MXN $1,500)",
            "Special decoration (MXN $800)",
          ]
        },
        {
          slug: "paseo-luxury",
          name: "Luxury Private Experience",
          price: 14500,
          color: "#F97316",
          backgroundImage: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
          duration: "3 hours of private sailing plus personalized prior coordination",
          description: "Designed for proposals or milestone celebrations, including elevated logistics and visual production.",
          features: ["Ideal for proposals", "Premium decoration", "VIP toast"],
          includes: [
            "Premium private boat with certified skipper",
            "Passenger insurance",
            "Full romantic decoration (natural flowers, LED candles, custom sign)",
            "Gourmet dinner on board for 2 people",
            "Premium wine bottle or special mixology",
            "Cheese board and handcrafted desserts",
            "Professional photographer for 2 hours",
            "40 high-resolution edited photographs",
            "Cinematic highlight video (1 minute)",
            "Surprise coordination (if it is a proposal)",
          ],
          notIncludes: [
            "Transportation to the pier (quote according to city)",
            "Overtime extension (cost per additional hour)",
          ]
        }
      ]}
      cotizacion={{
        background: getOptimizedUrl("https://plus.unsplash.com/premium_photo-1677698305586-cc475cfb0962?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        title: "Custom Quote",
        description: "We can create this experience across different lakes and destinations in Mexico, adapting to the environment and the production level you want. If your preferred destination is not listed, let us know the specific city or marina to validate availability and prepare a personalized quote.",
        lists: [
          {
            subtitle: "We can also integrate:",
            items: [
              "Live mariachi or saxophonist",
              "Cold sparks for proposals",
              "Professional drone coverage",
              "Special themed decoration",
              "Executive private transportation",
              "Extended sailing time",
            ],
          }
        ]
      }}
    />
  );
}

export default function PaseoPrivadoLanchaPage() {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <PaseoPrivadoLanchaEN />;
    case "es":
    default:
      return <PaseoPrivadoLanchaES />;
  }
}