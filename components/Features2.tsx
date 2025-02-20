import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Photo8 from "@/public/image/Photo8.png";

const Features2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex justify-center items-center text-black md:w-[50%] w-full md:h-[603px] h-[502px]">
        <div className=" md:space-y-44 w-full space-y-12 md:px-10">
          <div className="flex flex-col justify-center space-y-10">
            <h1 className="text-3xl text-center md:text-left">
              The furniture brand for the future, with timeless designs
            </h1>
            <p className="text-lg text-center md:text-left w-4/5">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-y-10">
              <Button className="bg-[#F9F9F9] md:px-8 px-32 py-6 shadow-none text-black rounded-none ">
                Get in touch
              </Button>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] w-full">
        <Image
          src={Photo8}
          alt="ChairImage"
          className="h-[358px] md:h-[603px] object-cover w-full "
          width={358}
          height={603}
        />
      </div>
    </div>
  );
};

export default Features2;
