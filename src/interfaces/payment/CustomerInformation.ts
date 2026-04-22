export interface CustomerInformation {
  firstName: string;
  lastName: string;
  email: string;
  phone1: string;
  city: string;
  address1: string;
  postalCode: string;
  state: string;
  country: "MX" | string; // Por defecto MX
  ip?: string;
}