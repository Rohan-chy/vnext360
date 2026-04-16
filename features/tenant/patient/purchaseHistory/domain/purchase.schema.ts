export interface Purchase {
  id: string;
  medicineName: string;
  quantity: number;
  price: number;
  pharmacyName: string;
  purchaseDate: string;
  status: 'Delivered' | 'Processing' | 'Canceled';
  orderId: string;
}
