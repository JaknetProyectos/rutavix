import { NextResponse } from 'next/server';
import { processKeycopPayment } from '@/lib/payment';
import { getTicketEmailHTML } from '@/lib/emailTemplates';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { customer, card, items, total } = body;

        // 1. Procesar el pago con Keycop
        const paymentResult = await processKeycopPayment({
            amount: total,
            reference: `OD-${Date.now()}`,
            customer: customer,
            card: card,
        });

        if (!paymentResult.success) {
            return NextResponse.json({ success: false, error: paymentResult.error }, { status: 400 });
        }

        const htmlContent = getTicketEmailHTML({
            customer,
            items,
            total,
            orderId: paymentResult.orderId,
            reference: `OD-${Date.now()}`
        });

        // 2. Enviar correos con Resend
        // Correo al Cliente
        await resend.emails.send({
            from: 'Rutavix <contacto@rutavix.com>', // Debe ser un dominio verificado en Resend
            to: customer.email,
            subject: `Tu Ticket de Aventura: ${paymentResult.orderId}`,
            html: htmlContent,
        });

        // Correo al Admin
        await resend.emails.send({
            from: 'Rutavix Admin <contacto@rutavix.com>',
            to: 'contacto@rutavix.com',
            subject: `💰 NUEVA VENTA: ${paymentResult.orderId}`,
            html: `
                <div style="font-family: sans-serif;">
                    <h2>Nueva reserva confirmada</h2>
                    <p><strong>Cliente:</strong> ${customer.firstName} ${customer.lastName}</p>
                    <p><strong>Email:</strong> ${customer.email}</p>
                    <hr/>
                    ${htmlContent}
                </div>
            `,
        });

        return NextResponse.json({ 
            success: true, 
            orderId: paymentResult.orderId 
        });

    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}