import { CartProductType } from '@/app/product/[productId]/ProductDetails';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-hot-toast';

// Context CartProductType that add to the Cart (storage)
// 4 attribute
type CartContextType = {
  cartTotalQty: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
  handleCartQtyIncrease: (product: CartProductType) => void;
  handleCartQtyDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
  paymentIntent: string | null;
  handleSetPaymentIntent: (val: string | null) => void;
};

// creating Context
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

// ---------Export CartProvider-------------
export const CartContextProvider = (props: Props) => {
  // define state cart Quantity
  const [cartTotalQty, setCartTotalQty] = useState(0);

  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  // define state cartProduct
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

  // Persistent shopping cart session
  useEffect(() => {
    // cartItem = JSON string
    // The key of localStorage must be the same at the below (which is key of localStorage)
    const cartItem: any = localStorage.getItem('eShopCartItems');
    // define cProducts type then pass JSON string (cartItem)
    const cProducts: CartProductType[] | null = JSON.parse(cartItem);

    // saving paymentIntent to localStorage
    const eShopPaymentIntent: any = localStorage.getItem('eShopPaymentIntent');
    const paymentIntent: string | null = JSON.parse(eShopPaymentIntent);

    // update cartProducts of state
    setCartProducts(cProducts);
    // get paymentIntent from localStorage
    setPaymentIntent(paymentIntent);
  }, []);

  //---------------------------------------------
  // useEffect, calculate the total price in cart
  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        // item is each item of cartProducts
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.price * item.quantity;
            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          // object of accumulator (total price and total qty of all products in cart)
          {
            total: 0,
            qty: 0,
          }
        );

        setCartTotalQty(qty);
        setCartTotalAmount(total);
      }
    };

    getTotals();
  }, [cartProducts]);

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

  //----------------------------------------------
  //Function: remove existed product from cart
  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id != product.id;
        });

        // update cartProducts after remove a product
        setCartProducts(filteredProducts);

        // Using toast to annouce when success remove a product and update the localStorage
        toast.success('Product removed');
        localStorage.setItem(
          'eShopCartItems',
          JSON.stringify(filteredProducts)
        );
      }
    },
    [cartProducts]
  );

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity == 99) {
        return toast.error('Ooops! Maximum reached');
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        // existingIndex is our index of product that increase the quantity
        // If existingIndex is existed, return the index of product in cart
        const existingIndex = cartProducts.findIndex(
          (item) => item.id == product.id
        );

        // if product is not exist, return -1. So index > -1 it will be exist product.
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }

        // update the cartProducts state
        setCartProducts(updatedCart);
        // also update the cart in localStorage after modify the quantity of product
        localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  //------------------------------------------------
  // Same as handleCartQtyIncrease function above
  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity == 1) {
        return toast.error('Ooops! Minimum reached');
      }

      if (cartProducts) {
        updatedCart = [...cartProducts];

        const existingIndex = cartProducts.findIndex(
          (item) => item.id == product.id
        );

        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }

        // update the cartProducts state
        setCartProducts(updatedCart);
        // also update the cart in localStorage after modify the quantity of product
        localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  //----------------------------------------------
  // ClearCart function: set everything = null
  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQty(0);
    localStorage.setItem('eShopCartItems', JSON.stringify(null));

    toast.success('Your cart is clear, now.');
  }, [cartProducts]);

  const handleSetPaymentIntent = useCallback(
    (val: string | null) => {
      setPaymentIntent(val);
      //console.log('check handleSetPaymentIntent:', val);
      localStorage.setItem('eShopPaymentIntent', JSON.stringify(val));
    },
    [paymentIntent]
  );

  //-------------------------------------------
  // value is CartContext.Provider props
  const value = {
    cartTotalQty,
    cartTotalAmount,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
    handleClearCart,
    paymentIntent,
    handleSetPaymentIntent,
  };

  return <CartContext.Provider value={value} {...props} />;
};

//------------------------------------------------
// Export the useCartContext
export const useCart = () => {
  const context = useContext(CartContext);

  if (context == null) {
    throw new Error('useCart must be used within a CartContextProvider');
  }

  return context;
};
//------------------------------------------------
