import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("py-8 px-0 sm:px-2 md:px-4 lg:px-6 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
