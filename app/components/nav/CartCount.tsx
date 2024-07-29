'use client';

import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import { CiShoppingCart } from 'react-icons/ci';

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();
  return (
    <div
      className="relavtive cursor-pointer"
      onClick={() => router.push('/cart')}
    >
      <div className="text-3xl">
        <CiShoppingCart />
        <span className="absolute top-[7px] right-[128px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
          {cartTotalQty}
        </span>
      </div>
    </div>
  );
};

export default CartCount;
