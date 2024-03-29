export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type Amount = "二兩" | "四兩" | "半斤" | "一斤";

export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  amount: Amount;
  quantity: number;
};

export type OrderStatus = "New" | "Preparing" | "Delivering" | "Delivered";

export type Order = {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;
  order_items?: OrderItem[];
};

export type OrderItem = {
  id: number;
  product_id: number;
  product: Product;
  order_id: number;
  amount: Amount;
  quantity: number;
};
