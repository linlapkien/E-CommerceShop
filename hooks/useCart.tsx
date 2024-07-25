import { CartProductType } from '@/app/product/[productid]/ProductDetails';
import { createContext, useCallback, useContext, useState } from 'react';

// Context CartProductType that add to the Cart (storage)
// 3 attribute
type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
};

// creating Context
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

// Export CartProvider
export const CartContextProvider = (props: Props) => {
  // define state cart Quantity
  const [cartTotalQty, setCartTotalQty] = useState(0);

  // define state cartProduct
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  // handleAddProductToCart fucntion
  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updateCart;

      // Add product to Cart
      if (prev) {
        updateCart = [...prev, product];
      } else {
        updateCart = [product];
      }

      // return the cart with product
      return updateCart;
    });
  }, []);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

// Export the useCartContext
export const useCart = () => {
  const context = useContext(CartContext);

  if (context == null) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
};
