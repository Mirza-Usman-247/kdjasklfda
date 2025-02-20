import React from "react";
import Container from "./Container";
import Image from "next/image";
import Rightimage from "@/public/image/RightImage.png";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Container className="">
      <div className="flex items-center  bg-[#2A254B] w-full md:h-[644] h-[502px]">
        <div className="flex flex-col md:space-y-44 md:w-[60%] w-full space-y-12 md:px-10">
          <div className="space-y-10">
            <h1 className="text-3xl text-white text-center md:text-left">
              The furniture brand for the future, with timeless designs
            </h1>
            <Button className="bg-opacity-100 bg-[#F9F9F941] px-7 py-3 hidden md:block rounded-none font-medium text-lg text-white">
              <Link href="/product">View collection</Link>
            </Button>
          </div>
          <div className="space-y-10">
            <p className="text-lg text-[white] text-center md:text-left">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <div className=" flex justify-center items-center">
              <Button className="bg-[#F9F9F941] px-32 py-6 font-medium text-lg text-white md:hidden rounded-none ">
                <Link href="/product">View collection</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[40%] ">
          <Image src={Rightimage} alt="ChairImage" className="h-[644px] w-full" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
