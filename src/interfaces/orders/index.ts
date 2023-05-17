export interface OrdersInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
