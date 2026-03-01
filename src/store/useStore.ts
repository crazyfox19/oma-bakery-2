import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  details: string;
  description: string;
}

interface BakeryStore {
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;

  // UI State
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Product Modal
  selectedProduct: Product | null;
  isProductModalOpen: boolean;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
}

export const useStore = create<BakeryStore>((set, get) => ({
  // Cart
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isCartOpen: true,
        };
      }
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
        isCartOpen: true,
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart:
        quantity <= 0
          ? state.cart.filter((i) => i.id !== id)
          : state.cart.map((i) => (i.id === id ? { ...i, quantity } : i)),
    })),
  clearCart: () => set({ cart: [] }),
  cartTotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  // UI State
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  isCartOpen: false,
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  // Product Modal
  selectedProduct: null,
  isProductModalOpen: false,
  openProductModal: (product) =>
    set({ selectedProduct: product, isProductModalOpen: true }),
  closeProductModal: () =>
    set({ selectedProduct: null, isProductModalOpen: false }),
}));
