import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import { HiCubeTransparent, HiCash } from "react-icons/hi";
import NavBarItemsPopOver from "./NavBarItemsPopOver";

function Navbar() {
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <div className="border flex justify-between px-2 sm:px-10 items-center py-1 mx-10  rounded-md border-indigo-100 bg-indigo-50 sticky top-0 z-50">
      <div className="border px-2 py-1 rounded-full text-indigo-700 text-lg tracking-widest shadow-md drop-shadow-lg bg-white">
        <Link href="/">LaraEstate</Link>
      </div>

      <Link href="/search" passHref>
        <div className="flex items-center">
          <BiSearchAlt className="bg-indigo-400 p-1 text-3xl rounded-full text-white cursor-pointer" />
        </div>
      </Link>

      <div className="flex items-center">
        <div className="block sm:hidden">
          <NavBarItemsPopOver />
        </div>

        <div className="hidden sm:flex gap-2">
          <Link href="/search?purpose=for-rent" passHref>
            <div className="flex items-center gap-1 border px-3 py-1 rounded-md hover:border-indigo-600 cursor-pointer">
              <HiCubeTransparent className="text-indigo-700" />
              <span className="text-gray-900">Rent</span>
            </div>
          </Link>

          <Link href="/search?purpose=for-sale" passHref>
            <div className="flex items-center gap-1 border px-3 py-1 rounded-md hover:border-indigo-600 cursor-pointer">
              <HiCash className="text-indigo-700" />
              <span className="text-gray-900">Buy</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
