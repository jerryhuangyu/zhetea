import { createContext, useState, PropsWithChildren, useContext } from "react";
import { randomUUID } from "expo-crypto";

import { Product, CartItem, Amount } from "@/types";

type CartType = {
  items: CartItem[];
  addOrUpdateItem: (product: Product, amount: Amount) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

const CartContext = createContext<CartType>({
  items: [],
  addOrUpdateItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );
  const addOrUpdateItem = (product: Product, amount: Amount) => {
    const existingItem = items.find(
      (item) => item.product === product && item.amount === amount
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      amount,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    const updatedCartItems = [...items];
    const index = items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const newQuantity = updatedCartItems[index].quantity + amount;
      if (newQuantity > 0) {
        updatedCartItems[index] = {
          ...updatedCartItems[index],
          quantity: newQuantity,
        };
      } else {
        updatedCartItems.splice(index, 1);
      }
    }
    setItems(updatedCartItems);
  };
  return (
    <CartContext.Provider
      value={{ items, total, addOrUpdateItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
