import React from "react";
import { GrDeliver } from "react-icons/gr";
import { CiCircleCheck } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const Features = ({ className }: Props) => {
  return (
    <>
      <section className="">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font  text-[#111111]">
              What makes our brand different
            </h1>
          </div>
          <Container className="flex flex-col md:flex-row justify-center items-center gap-7 max-w-screen-2xl px-4">
            <div className={cn("sm:w-1/4 w-11/12 py-2 px-6", className)}>
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-4">
                <GrDeliver className="w-6 h-6 my-3" /> Next day as standard
              </h2>
              <p className="leading-relaxed text-md mb-4">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
            <div className={cn("sm:w-1/4 w-11/12 py-2 px-6", className)}>
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-4">
                <CiCircleCheck className="w-6 h-6 my-3" /> Made by true artisans
              </h2>
              <p className="leading-relaxed text-md mb-4">
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
            <div className={cn("sm:w-1/4 w-11/12 py-2 px-6", className)}>
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-4">
                <CiWallet className="w-6 h-6 my-3" /> Unbeatable prices
              </h2>
              <p className="leading-relaxed text-md mb-4">
                For our materials and quality you won't find better prices
                anywhere
              </p>
            </div>
            <div className={cn("sm:w-1/4 w-11/12 py-2 px-6", className)}>
              <h2 className="text-lg sm:text-xl text-black font-medium title-font mb-4">
                <PiPlantThin className="w-6 h-6 my-3" /> Recycled packaging
              </h2>
              <p className="leading-relaxed text-md mb-4">
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Features;
