'use client';

import { CartContextProvider } from '@/hooks/useCart';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Wrap this children with CartProvider in layout.tsx
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
