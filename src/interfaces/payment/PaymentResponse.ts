export interface PaymentResponse {
  success: boolean;
  orderId?: string;
  reference?: string;
  status?: "approved" | "declined" | "error";
  error?: string;
}