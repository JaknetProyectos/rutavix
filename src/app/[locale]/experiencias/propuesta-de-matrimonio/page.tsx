import { ExperiencePage } from "@/components/ExperiencePage";
import { useLocale } from "next-intl";

function MatrimonioES() {
  return (
    <ExperiencePage
      heroImage="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Experiencia Propuesta de Matrimonio"
      slug="propuesta-de-matrimonio"
      subtitle="Diseñamos propuestas únicas, románticas y perfectamente coordinadas para que ese “sí” sea inolvidable"
      description="Nos encargamos de la planeación estratégica, logística, decoración y producción visual, cuidando cada detalle para que tú solo te concentres en el momento. Disponible en distintas ciudades, playas, Pueblos Mágicos y destinos especiales dentro de México."
      infoLists={[
        {
          title: "Destinos Disponibles",
          items: [
            "Ciudad de México",
            "San Miguel de Allende",
            "Valle de Bravo",
            "Tulum",
            "Cancún",
            "Los Cabos",
            "Puerto Vallarta",
            "Querétaro",
          ],
          icon: "map",
          isOpen: true
        }
      ]}
      plans={[
        {
          color: "#1F2937",
          description: "Ideal para una propuesta íntima con producción cuidada.",
          name: "Propuesta Esencial",
          price: 20600,
          features: [],
          includes: [
            "Planeación y asesoría personalizada",
            "Decoración temática romántica",
            "Iluminación LED ambiental",
            "Coordinación el día del evento",
            "Fotógrafo profesional 2 horas",
            "10 fotografías editadas",
          ],
          notIncludes: [
            "Transporte fuera de la ciudad",
            "Videógrafo profesional (MXN $5,000)",
            "Dron (MXN $2,500)",
            "Alojamiento si aplica",
          ],
          duration: "4 horas de experiencia con hasta 2 semanas de planeación",
          slug: "matrimonio-essential",
          backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          color: "#334155",
          description: "Mayor producción visual y cobertura más completa del momento.",
          name: "Propuesta Signature",
          price: 28900,
          includes: [
            "Concepto creativo personalizado (moodboard previo)",
            "Decoración romántica ampliada (flores naturales, velas decorativas, letrero personalizado)",
            "Iluminación especial",
            "Coordinación sorpresa estratégica",
            "Fotógrafo profesional 2 horas",
            "16 fotografías editadas",
            "Video highlight (1 minuto)",
            "Asistencia completa durante el evento",
          ],
          notIncludes: [
            "Transporte y alojamiento fuera de ciudad",
            "Dron (cotización adicional si se requiere)",
          ],
          duration: "4 horas de experiencia con planeación personalizada",
          features: [],
          slug: "matrimonio-signature",
          backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          color: "#F97316",
          description: "Diseñada para destinos especiales y producciones de alto impacto.",
          name: "Luxury Experience",
          duration: "Experiencia personalizada (hasta 5 horas) con planeación estratégica extendida",
          includes: [
            "Diseño conceptual completo",
            "Decoración premium abundante (floral de alto nivel, iluminación escénica, montaje especial)",
            "Coordinación sorpresa integral",
            "Fotógrafo profesional 4 horas",
            "Videógrafo profesional",
            "Video cinematic editado",
            "Toma aérea con dron",
            "Asistencia logística completa",
            "Coordinación con hotel o venue",
          ],
          notIncludes: [
            "Transporte y hospedaje en destino (si aplica)"
          ],
          price: 45000,
          features: [],
          slug: "matrimonio-luxury",
          backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ]}
      cotizacion={{
        background: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Cotización Personalizada – Propuestas",
        description: "Si el destino donde deseas proponer matrimonio no se encuentra en nuestra lista, indícanos la ciudad, hotel o locación específica para enviarte una cotización personalizada considerando logística, producción y permisos.",
        lists: [
          {
            subtitle: "Podemos diseñar tu propuesta en distintas partes de México:",
            items: [
              "Playas",
              "Ciudades con rooftop",
              "Pueblos Mágicos",
              "Paseos en lancha",
              "Jardines privados",
            ]
          },
          {
            subtitle: "La cotización final puede variar según:",
            items: [
              "Destino",
              "Nivel de producción floral",
              "Cobertura audiovisual",
              "Venue u hospedaje",
              "Logística de traslado",
            ]
          }
        ]
      }}
    />
  );
}

function MatrimonioEn() {
  return (
    <ExperiencePage
      heroImage="https://images.unsplash.com/photo-1514432433435-ce2c7903dfba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Marriage Proposal Experience"
      subtitle="We design unique, romantic, and perfectly coordinated proposals to make that 'yes' unforgettable"
      description="We take care of strategic planning, logistics, decoration, and visual production, attending to every detail so you can focus solely on the moment. Available in various cities, beaches, Magical Towns, and special destinations throughout Mexico."
      slug="marriage-proposal-experience"
      infoLists={[
        {
          title: "Available Destinations",
          items: [
            "Mexico City",
            "San Miguel de Allende",
            "Valle de Bravo",
            "Tulum",
            "Cancun",
            "Los Cabos",
            "Puerto Vallarta",
            "Queretaro",
          ],
          icon: "map",
          isOpen: true
        }
      ]}
      plans={[
        {
          color: "#1F2937",
          description: "Ideal for an intimate proposal with careful production.",
          name: "Essential Proposal",
          price: 20600,
          features: [],
          includes: [
            "Personalized planning and advice",
            "Themed romantic decoration",
            "Ambient LED lighting",
            "Day-of-event coordination",
            "Professional photographer (2 hours)",
            "10 edited photographs",
          ],
          notIncludes: [
            "Transportation outside the city",
            "Professional videographer (MXN $5,000)",
            "Drone (MXN $2,500)",
            "Accommodation if applicable",
          ],
          duration: "4-hour experience with up to 2 weeks of planning",
          slug: "matrimonio-essential",
          backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop"
        },
        {
          color: "#334155",
          description: "Higher visual production and fuller coverage of the moment.",
          name: "Signature Proposal",
          price: 28900,
          includes: [
            "Custom creative concept (prior moodboard)",
            "Enhanced romantic decor (natural flowers, decorative candles, custom signage)",
            "Special lighting",
            "Strategic surprise coordination",
            "Professional photographer (2 hours)",
            "16 edited photographs",
            "Highlight video (1 minute)",
            "Full assistance during the event",
          ],
          notIncludes: [
            "Transportation and accommodation outside the city",
            "Drone (additional quote if required)",
          ],
          duration: "4-hour experience with personalized planning",
          features: [],
          slug: "matrimonio-signature",
          backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop"
        },
        {
          color: "#F97316",
          description: "Designed for special destinations and high-impact productions.",
          name: "Luxury Experience",
          duration: "Custom experience (up to 5 hours) with extended strategic planning",
          includes: [
            "Full conceptual design",
            "Abundant premium decoration (high-end floral, scenic lighting, special setup)",
            "Integral surprise coordination",
            "Professional photographer (4 hours)",
            "Professional videographer",
            "Edited cinematic video",
            "Aerial drone footage",
            "Full logistics assistance",
            "Coordination with hotel or venue",
          ],
          notIncludes: [
            "Transportation and accommodation at destination (if applicable)"
          ],
          price: 45000,
          features: [],
          slug: "matrimonio-luxury",
          backgroundImage: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop"
        }
      ]}
      cotizacion={{
        background: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=870&auto=format&fit=crop",
        title: "Custom Quote – Proposals",
        description: "If the destination where you wish to propose is not on our list, let us know the specific city, hotel, or location to send you a personalized quote considering logistics, production, and permits.",
        lists: [
          {
            subtitle: "We can design your proposal in various parts of Mexico:",
            items: [
              "Beaches",
              "Cities with rooftops",
              "Magical Towns",
              "Boat trips",
              "Private gardens",
            ]
          },
          {
            subtitle: "The final quote may vary according to:",
            items: [
              "Destination",
              "Floral production level",
              "Audiovisual coverage",
              "Venue or accommodation",
              "Transportation logistics",
            ]
          }
        ]
      }}
    />
  );
}

export default function MatrimonioPage() {
  const locale = useLocale();

  switch (locale) {
    case "en":
      return <MatrimonioEn />;
    case "es":
    default:
      return <MatrimonioES />;
  }
}