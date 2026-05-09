"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { CatalogDish, MIN_ORDER } from "@/lib/catalog";

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type Action =
  | { type: "ADD"; dish: CatalogDish }
  | { type: "REMOVE"; id: string }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "OPEN" }
  | { type: "CLOSE" };

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.dish.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.dish.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.dish.id,
            name: action.dish.name,
            image: action.dish.image,
            price: action.dish.price,
            quantity: 1,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartCtx {
  items: CartItem[];
  total: number;
  count: number;
  isOpen: boolean;
  meetsMinimum: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (dish: CatalogDish) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  getQuantity: (id: string) => number;
}

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  // Persiste en localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tw_cart");
      if (saved) {
        const items: CartItem[] = JSON.parse(saved);
        items.forEach((item) => {
          for (let i = 0; i < item.quantity; i++) {
            dispatch({
              type: "ADD",
              dish: {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                calories: 0,
                macros: { protein: 0, carbs: 0, fat: 0 },
                allergens: [],
                ingredients: "",
                type: "NORMAL",
              },
            });
          }
        });
      }
    } catch {
      // ignora errores de localStorage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("tw_cart", JSON.stringify(state.items));
    } catch {
      // ignora errores de localStorage
    }
  }, [state.items]);

  const total = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const count = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const meetsMinimum = total >= MIN_ORDER;

  const ctx: CartCtx = {
    items: state.items,
    total,
    count,
    isOpen: state.isOpen,
    meetsMinimum,
    openCart: () => dispatch({ type: "OPEN" }),
    closeCart: () => dispatch({ type: "CLOSE" }),
    addItem: (dish) => dispatch({ type: "ADD", dish }),
    removeItem: (id) => dispatch({ type: "REMOVE", id }),
    incrementItem: (id) => dispatch({ type: "INCREMENT", id }),
    decrementItem: (id) => dispatch({ type: "DECREMENT", id }),
    getQuantity: (id) =>
      state.items.find((i) => i.id === id)?.quantity ?? 0,
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
}

export function useCart(): CartCtx {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
