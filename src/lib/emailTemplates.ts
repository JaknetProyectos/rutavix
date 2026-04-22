export const getTicketEmailHTML = (orderData: any) => {
  const { customer, items, total, orderId, reference } = orderData;

  const itemsHtml = items.map((item: any) => `
    <tr>
      <td style="padding: 15px 0; border-bottom: 1px dashed #e5e7eb;">
        <p style="margin: 0; font-weight: 900; text-transform: uppercase; color: #111827; font-size: 14px;">${item.experience_name}</p>
        <p style="margin: 0; color: #6b7280; font-size: 12px;">${item.plan_name} • ${item.personas} PAX • ${item.fecha}</p>
      </td>
      <td style="padding: 15px 0; border-bottom: 1px dashed #e5e7eb; text-align: right; font-weight: 900; color: #111827;">
        $${new Intl.NumberFormat('es-MX').format(item.price)}
      </td>
    </tr>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 40px 0; }
        .ticket { background-color: #ffffff; max-width: 500px; margin: 0 auto; border-radius: 30px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .header { background-color: #111827; color: #ffffff; padding: 40px; text-align: center; }
        .content { padding: 40px; }
        .total-section { background-color: #f9fafb; padding: 20px 40px; border-top: 2px dashed #e5e7eb; }
        .footer { text-align: center; padding: 30px; font-size: 10px; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; }
      </style>
    </head>
    <body>
      <div class="ticket">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: -1px; text-transform: uppercase; font-weight: 900;">RUTAVIX</h1>
          <p style="margin: 10px 0 0; font-size: 12px; color: #9ca3af; font-weight: bold; letter-spacing: 2px;">CONFIRMACIÓN DE RESERVA</p>
        </div>
        
        <div class="content">
          <p style="font-size: 14px; font-weight: bold; color: #111827; margin-bottom: 25px;">HOLA, ${customer.firstName.toUpperCase()}:</p>
          <p style="font-size: 14px; color: #4b5563; line-height: 1.6;">Tu pago ha sido procesado exitosamente. Aquí tienes el detalle de tu próxima aventura:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 30px;">
            ${itemsHtml}
          </table>
        </div>

        <div class="total-section">
          <table style="width: 100%;">
            <tr>
              <td style="font-size: 12px; font-weight: 900; color: #9ca3af; text-transform: uppercase;">Total Pagado</td>
              <td style="font-size: 24px; font-weight: 900; color: #4ade80; text-align: right;">$${new Intl.NumberFormat('es-MX').format(total)}</td>
            </tr>
          </table>
          <p style="margin: 15px 0 0; font-size: 11px; color: #9ca3af;">ID DE ORDEN: <strong style="color: #111827;">${orderId}</strong></p>
          <p style="margin: 5px 0 0; font-size: 11px; color: #9ca3af;">REF: <strong style="color: #111827;">${reference}</strong></p>
        </div>

        <div class="footer">
          <p>ESTO ES UN COMPROBANTE DE PAGO SEGURO VIA KEYCOP</p>
          <p style="margin-top: 10px;">RUTAVIX &copy; 2026</p>
        </div>
      </div>
    </body>
    </html>
  `;
};