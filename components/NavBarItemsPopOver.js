import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiCubeTransparent, HiCash } from "react-icons/hi";

function NavBarItemsPopOver() {
  return (
    <div className="w-full">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "bg-indigo-600 text-white" : ""}
                text-gray-900 text-xl group px-3 py-1 inline-flex items-center hover:bg-indigo-600 rounded-full hover:text-white`}
            >
              <span>
                <HiMenuAlt3 className={`${open ? "text-white" : ""}`} />
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-56  max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    <Link href="/search?purpose=for-rent" passHref>
                      <div className="flex items-center gap-1 hover:bg-indigo-300 px-2 py-1 rounded-full cursor-pointer">
                        <HiCubeTransparent className="text-xl  text-indigo-700" />
                        <span className="text-gray-900 text-lg ">Rent</span>
                      </div>
                    </Link>

                    <Link href="/search?purpose=for-sale" passHref>
                      <div className="flex items-center gap-1 hover:bg-indigo-300 px-2 py-1 rounded-full cursor-pointer">
                        <HiCash className="text-xl  text-indigo-700" />
                        <span className="text-gray-900 text-lg ">Buy</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

export default NavBarItemsPopOver;
