export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export type Amount = "二兩" | "四兩" | "半斤" | "一斤";

export type CartItem = {
  id: string;
  product: Product;
  product_id: number;
  amount: Amount;
  quantity: number;
};
