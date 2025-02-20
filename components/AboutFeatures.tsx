import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Button } from "./ui/button";
import Photo9 from "@/public/image/Photo9.png"
import Link from "next/link";

const AboutFeatures = () => {
  return (
    <Container className="py-5 px-5">
      <div className="flex flex-col md:flex-row justify-center gap-3">
        <div className="flex justify-center items-center text-white bg-[#2A254B] md:w-[50%] w-full md:h-[478px] h-[300px]">
          <div className=" md:space-y-44 w-full space-y-12 px-5 md:px-10">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl text-center md:text-left">
              It started with a small idea
              </h1>
              <p className="text-md md:text-lg text-center md:text-left">
              A global brand with local beginnings, our story begain in a small studio in South London in early 2014
              </p>
            </div>
            <div className="flex justify-center md:justify-start md:space-y-10">
              <Button className="bg-[#F9F9F941] md:px-8 px-32 py-6 shadow-none text-white  rounded-none ">
                <Link href="/about">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <Image
            src={Photo9}
            alt="ChairImage"
            className="h-[300px] md:h-[478px] object-cover w-full "
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutFeatures;
