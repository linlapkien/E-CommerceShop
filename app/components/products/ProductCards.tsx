'use client';

import { formatePrice } from '@/utils/formatPrice';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { truncateText } from '../../../utils/truncateText';

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  // the productRating has function responsible for avarage the rating base on the total rating / total amount of view
  // ForEx: 1 rating 3* and 1 rating 5* => productRating will be (3+5)/2 = 4*
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`, { scroll: false })}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-sky-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1 ">
        {/* image */}
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>

        {/* name */}
        <div>
          <div className="mt-4">{truncateText(data.name)}</div>
        </div>

        {/* rating */}
        <div>
          <Rating value={productRating} readOnly />
        </div>

        {/* review */}
        <div>{data.reviews.length} reviews</div>

        {/* price */}
        <div className="font-semibold">{formatePrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
