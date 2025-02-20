import React from "react";
import { Button } from "./ui/button";
import Container from "./Container";


const AboutUspageHeader = () => {
  return (
    <Container className="px-5">
      <div className="container py-16 mx-auto">
        <div className="flex flex-col sm:flex-row items-center w-full justify-center gap-10 mx-auto">
          <h1 className="md:w-[50%] w-full text-center text-2xl font-medium title-font text-[#2A254B]">
          A brand built on the love of craftmanship,
          quality and outstanding customer service
          </h1>
          <div className="flex justify-center items-center md:w-[50%] w-full">
            <Button className="bg-[#F9F9F9] text-[#2A254B] border shadow-none px-32 md:px-8 py-6 rounded-none ">View our products</Button>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUspageHeader;
