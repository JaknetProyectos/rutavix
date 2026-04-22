import { CustomerInformation } from "./CustomerInformation";
import { CardInformation } from "./CardInformation";


export interface PaymentRequest {
  amount: number;
  reference: string;
  currency?: "484"; // Pesos Mexicanos por defecto
  customer: CustomerInformation;
  card: CardInformation;
}