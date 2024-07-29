'use client';

import Button from '@/app/components/Button';
import ProductImage from '@/app/components/products/ProductIamge';
import SetColor from '@/app/components/products/SetColor';
import SetQuantity from '@/app/components/products/SetQuantity';
import { useCart } from '@/hooks/useCart';
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';

interface ProductDetailsProps {
  product: any;
}

// type of product - selectedImg: choose color of product among those colors
export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

// type of image (Array of image, each image have 3 attributes)
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

// Short line 30% width
const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  //// ----- working on ProductInCart
  // Hook handleAddProductToCart via useCart Function
  const { handleAddProductToCart, cartProducts } = useCart();
  // State: Is Product In Cart
  const [isProductInCart, setIsProductInCart] = useState(false);
  //// ----------------------------
  // State
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  // Navigation
  const router = useRouter();

  // ConsoleLog data
  console.log(`test render flow: ${cartProduct.quantity}`);
  // console.log(isProductInCart);
  // console.log(cartProducts);
  //console.log(cartProduct.quantity);

  //
  useEffect(() => {
    setIsProductInCart(false);
    console.log(cartProducts);
    // check this product is already in out cartProducts
    if (cartProducts) {
      // find id in cartProducts, if it doesnt find any, return existingIndex = -1
      const existingIndex = cartProducts.findIndex(
        (item) => item.id == product.id
      );
      // if existingIndex ! -1, setCart has products
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  // function cal ave of rating.
  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  // function: Handle Select Color
  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  // Using Callback to increase 1 quantity while click the btn+ , prev = previousCartProduct
  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity == 99) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity == 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
      {/* Images and list of color in the left hand side */}
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      {/* The product details in the right hand side */}
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify ">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
          {product.inStock ? 'In stock' : 'Out of stock'}
        </div>
        <Horizontal />

        {/* If Cart has products, then user click button "Add to cart", then button will convert to "View Cart" button, which navigate to the Url/Cart */}
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={20} />
              <span>Product added to cart</span>
            </p>
            <div className="w-[60%]">
              <Button
                label="View Cart"
                outline
                onClick={() => {
                  router.push('/cart');
                }}
              />
            </div>
          </>
        ) : (
          <>
            {/* Choose color and view it in the left hand side */}
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />
            <Horizontal />
            <div className="w-[60%]">
              <Button
                label="Add to Cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
