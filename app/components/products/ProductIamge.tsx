'use client';

import {
  CartProductType,
  SelectedImgType,
} from '@/app/product/[productid]/ProductDetails';
import Image from 'next/image';

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px]">
      <div className="flex flex-col items-center justify-center gap-6 cursor-pointer border w-auto h-auto max-h-[500px] min-h-[300px] ">
        {product.images.map((image: SelectedImgType) => {
          console.log(image);
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`relative w-80% rounded border-teal-300
                ${
                  cartProduct.selectedImg.color == image.color
                    ? 'border-[1.5px]'
                    : 'border-none'
                }
                `}
            >
              <Image
                src={image.image}
                alt={image.color}
                width="40"
                height="0"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          width="400"
          height="0"
          className="w-full
          h-full
          object-contain
          "
        />
      </div>
    </div>
  );
};

export default ProductImage;
