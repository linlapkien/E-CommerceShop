import Link from 'next/link';
import Container from '../Container';
import { Redressed } from 'next/font/google';
import CartCount from './CartCount';
import UserMenu from './UserMenu';
import { getCurrentUser } from '@/actions/getCurrentUser';

const redressed = Redressed({ subsets: ['latin'], weight: ['400'] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  console.log('user<<<', currentUser);
  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-slate-200
  z-30
  shadow-sm
  
  "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md-gap-0
          "
          >
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />

              {/* https://github.com/prisma/prisma/discussions/14371
              currentUser error: Type 'string' is not assignable to type 'Date'." #14371
              */}
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
