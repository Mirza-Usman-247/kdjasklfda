import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Photo10 from "@/public/image/Photo10.png";

const AboutFeatures2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="md:w-[50%] w-full">
        <Image
          src={Photo10}
          alt="ChairImage"
          className="h-[358px] md:h-[603px] object-cover w-full "
        />
      </div>
      <div className="flex justify-center items-center text-black md:w-[50%] w-full md:h-[603px] h-[502px]">
        <div className=" md:space-y-44 w-[90%] space-y-12 md:px-10">
          <div className="space-y-10">
            <h1 className="text-3xl text-center md:text-left">
            Our service isn't just personal, it's actually hyper personally exquisite            </h1>
            <p className="text-lg text-center font-light md:text-left">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-y-10">
            <Button className="bg-[#F9F9F9] md:px-8 px-32 py-6 shadow-none text-black rounded-none ">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFeatures2;
