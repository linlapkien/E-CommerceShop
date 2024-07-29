import { formatePrice } from '@/utils/formatPrice';
import { CartProductType } from '../product/[productid]/ProductDetails';
import Link from 'next/link';
import { truncateText } from '../../utils/truncateText';
import Image from 'next/image';
import SetQuantity from '../components/products/SetQuantity';

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  // List products content
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-[1.5px] border-slate-200 py-4 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4 ml-4">
        {/* product Image here */}
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </Link>
        {/* product information here */}
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button className="text-slate-500 underline" onClick={() => {}}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatePrice(item.price)}</div>
      {/* set Quantity of products here */}
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {}}
          handleQtyDecrease={() => {}}
        />
      </div>
      <div className="justify-self-end font-semibold">
        {formatePrice(item.price * item.quantity)}
      </div>
    </div>
  );
};

export default ItemContent;
