import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartStoreItem } from "@/types";

interface CartStore {
  items: CartStoreItem[];
  addItem: (item: Omit<CartStoreItem, "id">) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getVendorGroups: () => Record<string, CartStoreItem[]>;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (existing) =>
              existing.productId === item.productId &&
              existing.variantId === item.variantId
          );

          if (existingItem) {
            return {
              ...state,
              items: state.items.map((existing) =>
                existing.id === existingItem.id
                  ? { ...existing, quantity: existing.quantity + item.quantity }
                  : existing
              ),
            };
          }

          return {
            ...state,
            items: [...state.items, { ...item, id: crypto.randomUUID() }],
          };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          ...state,
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          ...state,
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set((state) => ({ ...state, items: [] }));
      },

      getCartTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          // This would need to be calculated with actual product prices
          // For now, we'll use a placeholder
          return total + item.quantity * 0;
        }, 0);
      },

      getVendorGroups: () => {
        const { items } = get();
        const groups: Record<string, CartStoreItem[]> = {};

        items.forEach((item) => {
          // This would need to be grouped by vendor ID
          // For now, we'll use a placeholder
          const vendorId = "vendor-placeholder";
          if (!groups[vendorId]) {
            groups[vendorId] = [];
          }
          groups[vendorId].push(item);
        });

        return groups;
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
