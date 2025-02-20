"use client";
import React, { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Banner = () => {
  const [Close, SetClose] = useState(true);

  const onClose = () => {
    SetClose(false);
  };

  return (
    <div
      className={
        Close
          ? "flex md:justify-end justify-center items-center py-1 bg-[#2A254B]"
          : "hidden"
      }
    >
        <div className="flex justify-between items-center">
          <p className="flex justify-start items-center text-md text-white">
            <CiDeliveryTruck className="w-5 h-5 mr-2" />
            Free delivery on all orders over £50 with code easter checkout
          </p>
          <div onClick={onClose} className="flex justify-end items-center cursor-pointer text-white">
            <RxCross1 className=" w-4 h-4 mr-2" />
          </div>
        </div>
    </div>
  );
};

export default Banner;
