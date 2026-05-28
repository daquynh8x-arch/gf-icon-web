"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, color: string, size: string, qty?: number) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (productId: string, color: string, size: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("gficon-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        // ignore invalid data
      }
    }
    setLoaded(true);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("gficon-cart", JSON.stringify(items));
    }
  }, [items, loaded]);

  const addItem = (product: Product, color: string, size: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.product.id === product.id &&
          i.selectedColor === color &&
          i.selectedSize === size
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id &&
          i.selectedColor === color &&
          i.selectedSize === size
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }
      return [...prev, { product, quantity: qty, selectedColor: color, selectedSize: size }];
    });
  };

  const removeItem = (productId: string, color: string, size: string) => {
    setItems((prev) =>
      prev.filter(
        (i) =>
          !(i.product.id === productId &&
            i.selectedColor === color &&
            i.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, color: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeItem(productId, color, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId &&
        i.selectedColor === color &&
        i.selectedSize === size
          ? { ...i, quantity: qty }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
