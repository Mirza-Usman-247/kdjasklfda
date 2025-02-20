"use client";
import React, { useCallback, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogClose,
} from "./ui/dialog";
import { RxCross2 } from "react-icons/rx";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Image as IImage } from "sanity";
import { BiLoaderAlt } from "react-icons/bi";
import Logo from "./Logo";

interface productType {
  name: string;
  price: number;
  image: IImage;
  slug: {
    current: string;
  };
}

const Serchbar = () => {
  const [isLaoding, setLoading] = useState(false);
  const [isProducts, setProducts] = useState<productType[]>([]);
  const [isSearch, setSearch] = useState("");
  const [isShowSearch, setShowSearch] = useState(false);

  const fetchData = useCallback(async () => {
    if (!isSearch) {
      return <div>Plz search something</div>;
    }
    setLoading(true);
    try {
      const query = `*[_type == "product" && name match $search]{
  slug{
    current
  },
  price,
  name,
  image
}`;
      const params = { search: `${isSearch}*` };
      const res = await client.fetch(query, params);
      setProducts(res);
    } catch (error) {
      console.log("Items not Found:", error);
    } finally {
      setLoading(false);
    }
  }, [isSearch]);
  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(debounce);
  }, [isSearch, fetchData]);
  return (
    <div>
      <Dialog
        open={isShowSearch}
        onOpenChange={() => setShowSearch(!isShowSearch)}
      >
        <DialogTrigger onClick={() => setShowSearch(!isShowSearch)}>
          <div className="flex justify-center items-center">
            <div className="hidden relative md:flex justify-start md:px-3 items-center md:w-44 md:h-10 md:bg-[#F5F5F5]">
              <Input
                className="absolute top-0 left-0 w-44 h-10 border-none shadow-none"
                placeholder="Search..."
                onClick={() => setSearch("")}
              />
              <BiSearch className="absolute top-3 right-2 w-5 h-5 hover:text-gray-800 font-medium hoverEffect" />
            </div>
            <BiSearch className="w-5 h-5 md:hidden hover:text-gray-800 mt-1 font-medium hoverEffect" />
          </div>
        </DialogTrigger>
        <DialogContent className="h-[70vh] flex flex-col overflow-hidden border-2">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <Logo className="hidden md:block">Avion</Logo>
              <div className="relative md:w-[60%] w-full">
                <Input
                  className="rounded-none bg-[#F5F5F5] w-full placeholder:text-lg placeholder:px-5 px-5 text-lg"
                  value={isSearch}
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="bg-[#111111] rounded-full">
                  <RxCross2
                    className="absolute top-1.5 right-3 w-6 h-6 cursor-pointer "
                    onClick={() => setSearch("")}
                  />
                </div>
              </div>
              <DialogClose asChild>
                <RxCross2 className="w-6 h-6 cursor-pointer hidden md:block" />
              </DialogClose>
            </DialogTitle>
          </DialogHeader>
          {isLaoding ? (
            <div className="flex justify-center items-center gap-2 font-medium">
              <BiLoaderAlt className="w-5 h-5 animate-spin" />
              Loading...
            </div>
          ) : (
            <div>
              {isProducts.length ? (
                <div className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-4">
                  {isProducts.map((product: productType) => (
                    <div
                      className="space-y-2 py-3 snap-center min-w-[260px] max-w-[260px]"
                      key={product.name}
                    >
                      <DialogClose asChild>
                        <Link
                          href={`/product/${product.slug.current}`}
                          className=""
                        >
                          <Image
                            src={
                              product.image
                                ? urlFor(product.image).url()
                                : "/fallback-image.jpg"
                            }
                            alt={product.name}
                            width={260}
                            height={260}
                            className="w-full min-h-[360px] max-h-[360px] object-cover"
                            quality={80}
                          />
                        </Link>
                      </DialogClose>
                      <h4 className="text-base font-medium text-[#111111]">
                        {product.name}
                      </h4>
                      <h1 className="text-base font-medium text-[#111111]">
                        PKR {product.price}
                      </h1>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center text-xl font-medium">
                  {isSearch ? (
                    <div>
                      Nothing match with{" "}
                      <span className="text-black font-medium">{isSearch}</span>
                      . try something else
                    </div>
                  ) : (
                    <div className="flex justify-center items-center capitalize">
                      <BiSearch className="w-6 h-6" />
                      Search or explore from nike
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Serchbar;
