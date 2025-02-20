import React from "react";
import Container from "./Container";
import { Input } from "./ui/input";

const EmailSignup = () => {
  return (
    <section className="text-gray-600 body-font py-12 w-full bg-[#F9F9F9]">
      <div className="container mx-auto py-14 bg-white">
        <div className="flex flex-col w-full mb-12">
          <h1 className="sm:text-3xl text-2xl  text-center font-medium title-font mb-4">
            Join the club and get the benefits
          </h1>
          <p className="lg:w-2/3 mx-auto text-base text-center">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className=" bg-gray-100 bg-opacity-50 text-left text-gray-700 rounded-none w-[35%]"
          />

          <button className="text-white py-4 px-8 bg-[#2A254B]">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
