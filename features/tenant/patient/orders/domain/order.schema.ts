export interface Order {
  id: string;
  date: string;
  item: string;
  quantity: number;
  rate: number;
  discount: number;
  taxes: number;
  amount: number;
  supplier: string;
}
