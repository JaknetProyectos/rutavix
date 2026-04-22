// @/hooks/useContactForm.ts
import { useState } from "react";
import { useLocale } from "next-intl";

export function useContactForm() {
  const locale = useLocale(); // Detecta si es /es o /en
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    mensaje: "",
    destino: "",
    tipoGrupo: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      // Usamos el locale dinámico para evitar el 404
      const response = await fetch(`/${locale ?? "es"}/api/cotizacion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error en el envío");

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return { formData, setFormData, loading, status, handleChange, handleSubmit };
}