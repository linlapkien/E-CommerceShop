'use client';

import Link from 'next/link';
import Container from '../Container';
import Admin from '@/app/admin/page';
import AdminNavItem from './AdminNavItem';
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from 'react-icons/md';
import { usePathname } from 'next/navigation';

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          {/* summary tab */}
          <Link href="/admin">
            <AdminNavItem
              label="Summary"
              icon={MdDashboard}
              selected={pathname == '/admin'}
            />
          </Link>

          {/* AddProducts tab */}
          <Link href="/admin/add-products">
            <AdminNavItem
              label="AddProducts"
              icon={MdLibraryAdd}
              selected={pathname == '/admin/add-products'}
            />
          </Link>

          {/* ManageProducts tab */}
          <Link href="/admin/manage-products">
            <AdminNavItem
              label="ManageProducts"
              icon={MdDns}
              selected={pathname == '/admin/manage-products'}
            />
          </Link>

          {/* ManageOrders tab */}
          <Link href="/admin/manage-orders">
            <AdminNavItem
              label="ManageOrders"
              icon={MdFormatListBulleted}
              selected={pathname == '/admin/manage-orders'}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
