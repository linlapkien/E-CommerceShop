'use client';

import { useCallback, useState } from 'react';
import Avatar from '../Avatar';
import { AiFillCaretDown } from 'react-icons/ai';
import MenuItem from './MenuItem';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import BackDrop from './BackDrop';
import { User } from '@prisma/client';
import { SafeUser } from '@/types';

interface UserMenuProps {
  // SafeUser, declaried in types/index
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  // toggleOpen of the usermenu
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
      p-2
      border-[1px]
      flex
      border-slate-700
      flex-row
      items-center
      gap-1
      rounded-full
      cursor-pointer
      hover:shadow-md
      trasition
    text-slate-700"
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="absolute
        rounded-md
        shadow-md
        w-[170px]
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        flex
        flex-col
        cursor-pointer"
          >
            {/* if currentUser (logged in), show the orders, admin dashboard and log out  */}
            {/* else, show log in or register */}
            {currentUser ? (
              <div>
                <Link href="/orders">
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href="/admin">
                  <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {/* usermenu is open, the screen color will drop */}
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
