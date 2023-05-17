export interface FeedbacksInterface {
  id?: string;
  customer_id: string;
  restaurant_id: string;
  rating: number;
  comment?: string;
  created_at: Date;
  updated_at: Date;
}
