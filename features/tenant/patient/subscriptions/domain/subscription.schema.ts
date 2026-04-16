export interface Subscription {
  id: string;
  planName: string;
  description: string;
  price: number;
  billingCycle: 'Monthly' | 'Yearly';
  nextBillingDate: string;
  status: 'Active' | 'Canceled' | 'Expired';
  features: string[];
}
