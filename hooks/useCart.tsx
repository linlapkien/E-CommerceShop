import { CartProductType } from '@/app/product/[productid]/ProductDetails';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-hot-toast';

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

  // Persistent shopping cart session
  useEffect(() => {
    // cartItem = JSON string
    // The key of localStorage must be the same at the below (which is key of localStorage)
    const cartItem: any = localStorage.getItem('eShopCartItems');
    // define cProducts type then pass JSON string (cartItem)
    const cProducts: CartProductType[] | null = JSON.parse(cartItem);

    // update cartProducts of state
    setCartProducts(cProducts);
  }, []);

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

      // Using toast to annouce when onClick 'addtoCart' button
      toast.success('Product added to cart');

      // When AddProductToCart, we updated 'eShopCartItems' to updateCart
      // eShopCartItems is localStorage
      localStorage.setItem('eShopCartItems', JSON.stringify(updateCart));

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
