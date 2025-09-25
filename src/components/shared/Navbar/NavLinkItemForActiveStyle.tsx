"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLinkItem = ({ href, children }: NavLinkProps) => {
  // -----------navbar e active link e style
  const pathname = usePathname();// current kon path/route e active ase seta get korar hook,etar upor bitti kore style add kora hobe
  // nextjs e jekuno hook shudo client component e use kora jai
// console.log(pathname)
  // -----------
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-blue-500 font-semibold underline" : "text-white"
      } hover:text-blue-500 hover:underline`}
    >
      {children}
    </Link>
  );
};

export default NavLinkItem;
