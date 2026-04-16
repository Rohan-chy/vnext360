// domain/paymentMethods.schema.ts

export interface PaymentMethod {
  id: string; // Unique identifier for the card
  cardType: 'Visa' | 'MasterCard' | 'Amex' | 'Discover' | string; // Card brand
  cardNumber: string; // Masked card number, e.g., **** **** **** 4242
  cardHolderName: string; // Name printed on the card
  expiryDate?: string; // Expiry date in MM/YY format
  billingAddress?: string; // Optional billing address
  isDefault?: boolean; // Optional flag to indicate default card
  createdAt?: string; // Optional ISO timestamp for creation
  updatedAt?: string; // Optional ISO timestamp for last update
}
