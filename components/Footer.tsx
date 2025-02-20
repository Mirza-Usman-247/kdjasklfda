import React from "react";
import { Input } from "./ui/input";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { GrSkype } from "react-icons/gr";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-[#F9F9F9] bg-[#2A254B] body-font">
      <div className="flex flex-col justify-center md:flex-row py-16 mx-auto">
        <div className="flex justify-between text-left md:w-[50%] w-full">
          <div className=" md:w-1/3 w-full">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
            Menu
            </h2>
            <nav className="list-none font-light capitalize">
            <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer w-1/2">new arrivals</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >best sellers</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >recently viewed</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >popular this week</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer">all products</p>
              </Link>
            </nav>
          </div>
          <div className=" md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10 font-light capitalize">
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer">Crockery</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >Furniture</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >Homeware</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >Plant pots</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer">Chairs</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer">Crockery</p>
              </Link>
            </nav>
          </div>
          <div className="md:w-1/3 w-full px-4">
            <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
            Our company
            </h2>
            <nav className="list-none mb-10 font-light capitalize">
            <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer">about us</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >vacancies</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >contact us</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer" >privacy</p>
              </Link>
              <Link href="/product">
                <p className="underline-offset-4 hover:underline cursor-pointer">privacy policy</p>
              </Link>
            </nav>
          </div>
        </div>
        <div className="md:w-[50%] w-full px-4">
          <h2 className="title-font font-medium tracking-widest text-sm mb-3" >
            SUBSCRIBE
          </h2>
          <div className="flex justify-start items-center w-[100%]">
            
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              className=" bg-[#F9F9F941] bg-opacity-50 text-white text-left border-none rounded-none w-[70%]"
            />
          
          <button className="text-black py-4 px-8 bg-[#F9F9F9]">
            Button
          </button>
        </div>
        </div>
      </div>
      <div className="border-t border-t-[#4E4D93]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          
          <p className="text-sm  sm:ml-6 sm:mt-0 mt-4">
          Copyright 2022 Avion LTD
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center gap-x-4 sm:justify-start">
            <CiLinkedin className="w-5 h-5"/>
            <CiFacebook className="w-5 h-5"/>
            <CiInstagram className="w-5 h-5"/>
            <GrSkype className="w-5 h-5"/>
            <CiTwitter className="w-5 h-5"/>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
