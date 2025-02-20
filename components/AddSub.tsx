"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const AddSub = () => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="flex justify-center items-center gap-0 w-[102px]">
      <Button onClick={() => setAmount(amount-1)} className="bg-[#F9F9F9] w-1/3 text-lg py-3 shadow-none text-[#CAC6DA]  rounded-none ">
        -
      </Button>
      <p className="w-1/3 py-[6px] bg-[#F9F9F9] text-center">{amount}</p>
      <Button onClick={() => setAmount(amount+1)} className="bg-[#F9F9F9] w-1/3  text-lg shadow-none text-[#CAC6DA]  rounded-none ">
        +
      </Button>
    </div>
  );
};

export default AddSub;
