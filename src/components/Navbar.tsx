"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { CgSearch } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const [openCategories, setOpenCategories] = useState<boolean>(false);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const categoriesRef = useRef<any | null>(null);
  const detailsRef = useRef<any | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node) &&
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        setOpenCategories(false);
        setOpenDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    signOut()
  };

  return (
    <div className="flex justify-around py-3 items-center">
      <h1 className="text-blue-600">
        <Link href="/">TechApp</Link>
      </h1>
      <ul className="flex gap-10 items-center cursor-pointer">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="relative">
          <div
            ref={categoriesRef}
            onClick={() => setOpenCategories((prev) => !prev)}
            className="flex gap-2 items-center"
          >
            Categories <MdOutlineKeyboardArrowDown />
          </div>
          {openCategories && (
            <ul className="absolute bg-gray-200 rounded-md mt-2 w-[150px] flex flex-col gap-2 py-2 z-50">
              <Link href={`category/${1}`}>
                <li className="py-1 px-2 hover:bg-gray-300 rounded w-full">
                  Sports
                </li>
              </Link>

              <li className="py-1 px-2 hover:bg-gray-300 rounded">
                Entertainment
              </li>
              <li className="py-1 px-2 hover:bg-gray-300 rounded">Education</li>
              <li className="py-1 px-2 hover:bg-gray-300 rounded">Tourism</li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/articles/saved">Saved</Link>
        </li>
        <li>
          <div className="relative border border-gray-500 px-5 rounded-lg focus-within:border-blue-600">
            <CgSearch className="absolute top-2 left-1 mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none py-1 pl-3 bg-[#F1F3F4]"
            />
          </div>
        </li>
        <li
          className="relative"
          ref={detailsRef}
          onClick={() => setOpenDetails((prev) => !prev)}
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKUPmZPihoODvOLEaynPON5UcTl9tEX34SQ&s"
            alt="user image"
            width={50}
            height={50}
            unoptimized
            className="rounded-[25px]"
          />
          {openDetails && (
            <ul className="absolute bg-gray-200 rounded-md mt-2 left-2 w-[180px] flex flex-col py-2 text-[14px] z-50">
              <li className="py-1 px-2 hover:bg-gray-300 rounded">
                Edmond Amofah Bokaye <br /> eddy@gmail.com
              </li>
              <Link href="/articles/saved">
                <li className="py-1 px-2 hover:bg-gray-300 rounded">Saved</li>
              </Link>
              <Link href="/profile/settings">
                <li className="py-1 px-2 hover:bg-gray-300 rounded">
                  Settings
                </li>
              </Link>
              <li
                className="py-1 px-2 hover:bg-gray-300 rounded"
                onClick={()=> handleSignOut()}
              >
                Sign out
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
