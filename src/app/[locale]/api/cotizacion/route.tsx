// @/app/api/cotizacion/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Colores de marca
const COLORS = {
  green: "#2b7b2b",
  orange: "#FB923C",
  white: "#FFFFFF",
  grayBg: "#F4F7F7",
  textMain: "#1F2937",
  textMuted: "#6B7280"
};

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, email, telefono, fecha, mensaje, destino, tipoGrupo } = data;
    const orderId = `REQ-${Date.now().toString().slice(-6)}`;

    // 1. EMAIL PARA EL CLIENTE
    await resend.emails.send({
      from: "Rutavix <contacto@rutavix.com>",
      to: email,
      subject: `Confirmación de Solicitud - ${nombre}`,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { background-color: ${COLORS.grayBg}; margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; }
        .wrapper { max-width: 600px; margin: 0 auto; padding: 30px 10px; }
        .card { background: ${COLORS.white}; border-radius: 24px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .header { background: ${COLORS.green}; padding: 35px; text-align: center; }
        .logo { font-size: 14px; font-weight: 900; letter-spacing: 6px; text-transform: uppercase; color: ${COLORS.white}; margin: 0; }
        .content { padding: 40px; }
        .status-badge { background: ${COLORS.orange}; color: white; padding: 6px 16px; border-radius: 100px; font-size: 10px; font-weight: 900; text-transform: uppercase; display: inline-block; margin-bottom: 20px; }
        .title { font-size: 24px; font-weight: 900; color: ${COLORS.textMain}; margin: 0 0 10px 0; text-transform: uppercase; }
        .subtitle { font-size: 15px; color: ${COLORS.textMuted}; line-height: 1.6; margin-bottom: 30px; }
        .data-grid { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
        .data-row { border-bottom: 1px solid #f3f4f6; }
        .data-label { padding: 12px 0; font-size: 10px; font-weight: 900; color: ${COLORS.green}; text-transform: uppercase; letter-spacing: 1px; width: 40%; }
        .data-value { padding: 12px 0; font-size: 14px; font-weight: 600; color: ${COLORS.textMain}; text-align: right; }
        .msg-container { background: #fffaf5; border: 1px solid ${COLORS.orange}40; padding: 25px; border-radius: 16px; }
        .msg-label { font-size: 10px; font-weight: 900; color: ${COLORS.orange}; text-transform: uppercase; margin-bottom: 10px; display: block; }
        .msg-text { font-size: 14px; color: ${COLORS.textMain}; line-height: 1.6; margin: 0; font-style: italic; }
        .footer { padding: 30px; background: #fafafa; border-top: 1px solid #eeeeee; text-align: center; }
        .footer-text { font-size: 11px; color: ${COLORS.textMuted}; line-height: 1.5; text-transform: uppercase; letter-spacing: 1px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="card">
          <div class="header"><p class="logo">Rutavix</p></div>
          <div class="content">
            <div class="status-badge">Recibida</div>
            <h1 class="title">Hola, ${nombre}</h1>
            <p class="subtitle">Hemos recibido tu solicitud. Nuestro equipo de Concierge revisará los detalles y te contactará en breve para diseñar tu experiencia.</p>
            
            <table class="data-grid">
              <tr class="data-row"><td class="data-label">Folio</td><td class="data-value">#${orderId}</td></tr>
              <tr class="data-row"><td class="data-label">Fecha del Evento</td><td class="data-value">${fecha}</td></tr>
              ${destino ? `<tr class="data-row"><td class="data-label">Destino</td><td class="data-value">${destino}</td></tr>` : ''}
              ${tipoGrupo ? `<tr class="data-row"><td class="data-label">Tipo de Viaje</td><td class="data-value">${tipoGrupo}</td></tr>` : ''}
              <tr class="data-row"><td class="data-label">Teléfono</td><td class="data-value">${telefono}</td></tr>
            </table>

            <div class="msg-container">
              <span class="msg-label">Tu Mensaje</span>
              <p class="msg-text">"${mensaje}"</p>
            </div>
          </div>
          <div class="footer">
            <p class="footer-text"><strong>Rutavix</strong><br>Luxury & Travel Services</p>
          </div>
        </div>
      </div>
    </body>
    </html>`,
    });

    // 2. EMAIL PARA EL ADMIN
    await resend.emails.send({
      from: "Rutavix <contacto@rutavix.com>",
      to: "contacto@rutavix.com",
      subject: `LEAD: ${nombre} - ${destino || 'Consulta'}`,
      html: `
      <div style="background: #f4f7f7; padding: 40px 20px; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; border: 2px solid ${COLORS.green}; overflow: hidden;">
          <div style="background: ${COLORS.green}; padding: 20px; color: white; text-align: center;">
            <h2 style="margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Nueva Solicitud Detectada</h2>
          </div>
          <div style="padding: 30px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
              <div style="background: #f9fafb; padding: 15px; border-radius: 12px;">
                <p style="font-size: 9px; color: ${COLORS.green}; font-weight: 900; text-transform: uppercase; margin: 0 0 5px 0;">Cliente</p>
                <p style="font-size: 14px; font-weight: 700; margin: 0;">${nombre}</p>
              </div>
              <div style="background: #f9fafb; padding: 15px; border-radius: 12px;">
                <p style="font-size: 9px; color: ${COLORS.green}; font-weight: 900; text-transform: uppercase; margin: 0 0 5px 0;">ID Solicitud</p>
                <p style="font-size: 14px; font-weight: 700; margin: 0;">#${orderId}</p>
              </div>
            </div>

            <table width="100%" style="border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 11px; color: #666;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; text-align: right;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 11px; color: #666;">Teléfono</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; text-align: right;">${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 11px; color: #666;">Fecha</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; text-align: right;">${fecha}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 11px; color: #666;">Destino</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; text-align: right; color: ${COLORS.orange};">${destino || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-size: 11px; color: #666;">Grupo</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; text-align: right;">${tipoGrupo || 'N/A'}</td>
              </tr>
            </table>

            <div style="background: #111827; padding: 25px; border-radius: 12px; color: white;">
              <p style="font-size: 9px; font-weight: 900; text-transform: uppercase; color: ${COLORS.orange}; margin: 0 0 10px 0;">Mensaje del Lead:</p>
              <p style="font-size: 14px; line-height: 1.6; margin: 0; font-style: italic;">${mensaje}</p>
            </div>
          </div>
        </div>
      </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: "Fail" }, { status: 500 });
  }
}