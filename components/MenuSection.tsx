"use client";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Category, Nav } from "@/constant";
import Link from "next/link";

const MenuSection = () => {
  const [isMenu, setIsMenu] = useState(false);

  const HandleMenu = () => {
    setIsMenu(!isMenu);
  };
  const onclose = () => {
    setIsMenu(false);
  };

  return (
    <div className="flex justify-start items-center w-1/3">
      <div className="flex items-center justify-center" onClick={HandleMenu}>
        <HiOutlineMenuAlt2 className="w-6 h-6 cursor-pointer" />
      </div>
      <div
        className={
          isMenu
            ? "fixed right-0 top-0 w-[80%] h-screen bg-transparent py-5 px-5 ease-in duration-200"
            : "fixed right-[-50%] top-0 hoverEffect ease-in duration-200"
        }
        onClick={onclose}
      ></div>
      <div
        className={
          isMenu
            ? "fixed left-0 top-0 w-[276px] h-screen shadow-lg bg-[#F9F9F9] border rounded-lg py-5 px-5 ease-in duration-500"
            : "fixed left-[-100%] top-0 ease-in duration-500"
        }
      >
        <div
          className="flex items-center justify-end cursor-pointer"
          onClick={onclose}
        >
          <RxCross2 className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-2 pt-2">
          {Nav.map((val) => {
            return (
              <div key={val.title}>
                <Link
                  href={val.href}
                  className={`hover:text-gray-500 hoverEffect relative group cursor-pointer hoverEffect w-1/3`}
                  onClick={onclose}
                >
                  {val.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 pt-4 ">
          <h1 className="text-lg underline underline-offset-2 font-semibold mb-1">
            Category
          </h1>
          {Category.map((val) => {
            return (
              <div key={val.title}>
                <Link
                  href={`/${val.value}`}
                  className={`hover:text-gray-500 hoverEffect relative group cursor-pointer hoverEffect w-1/3`}
                  onClick={onclose}
                >
                  {val.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
