'use server';
import axios from 'axios';

import { CardInformation } from '@/interfaces/payment/CardInformation';
import { PaymentRequest } from '@/interfaces/payment/PaymentRequest';
import { PaymentResponse } from '@/interfaces/payment/PaymentResponse';
import { CustomerInformation } from '@/interfaces/payment/CustomerInformation';


const API_URL = "https://pagos.keycop.com.mx/api/v1"


async function getAuthToken() {
  const { data } = await axios.post(`${API_URL}/signin`, {
    email: process.env.KEYCOP_EMAIL,
    password: process.env.KEYCOP_PASSWORD
  });

  return data.authToken;
}


async function tokenizeCard(token: string, card: Omit<CardInformation, 'cvv'>) {
  const { data } = await axios.post(`${API_URL}/card/tokenizer`, {
    cardData: {
      cardNumber: card.cardNumber.replace(/\s/g, ''), // Limpiar espacios
      cardholderName: card.cardholderName,
      expirationYear: card.expirationYear,
      expirationMonth: card.expirationMonth
    }
  }, {
    headers: { Authorization: `Bearer ${token}` }
  });

  console.log(data)
  return data.cardNumberToken;
}


export async function processKeycopPayment(input: PaymentRequest): Promise<PaymentResponse> {
  try {
    // 1. Autenticación
    const authToken = await getAuthToken();

    // 2. Tokenización (Sin el CVV)
    const cardToken = await tokenizeCard(authToken, input.card);

    // 3. Ejecución de la Venta
    const salePayload = {
      amount: input.amount,
      currency: input.currency || "484",
      reference: input.reference,
      customerInformation: {
        ...input.customer,
        ip: input.customer.ip || "127.0.0.1" // Fallback IP
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: input.card.cvv
      }
    };

    const { data } = await axios.post(`${API_URL}/sale`, salePayload, {
      headers: { Authorization: `Bearer ${authToken}` }
    });

    console.log(data)

    return {
      success: data.status == "APPROVED",
      orderId: data.orderId,
      reference: data.reference,
      status: data.status
    };

  } catch (error: any) {
    console.log(error.response)
    console.error("Keycop Payment Error:", error.response?.data || error.message);
    return {
      success: false,
      status: "error",
      error: error.response?.data?.message || "Error procesando el pago"
    };
  }
}