import { client } from "@/sanity/lib/client";
import React from "react";
import { Image as IImage } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Container from "./Container";
import { Button } from "./ui/button";

const ProductDataFetching1 = async () => {
  const fetchData = await client.fetch(`*[_type == 'product'] [4..20] {
  dimensions,
    image,
    name,
    price,
    slug {
    current
  },
  _rev
}`);
  return fetchData;
};

interface Product {
  name: string,
  price: number,
  image: IImage
  slug: {
    current: string
  },
  rev: string
}

const ProductListing = async () => {
  const product: Product[] = await ProductDataFetching1();
  return (
    <Container>
      <div className="py-3 capitalize">
        <h1 className="text-4xl font-light text-center md:text-left">
          our popular products
        </h1>
      </div>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-4">
        {product.map((val, i) => {
          return (
            <div className="space-y-2 py-3 snap-center md:min-w-[305px] min-w-max " key={i}>
              <Link href={`/product/${val.slug.current}`} className="">
                <Image
                  src={urlFor(val.image).url()} 
                  alt={val.name}
                  width={305}
                  height={441}
                  className="w-full h-[320px]  sm:h-[375px] object-cover"
                  quality={80}
                />
              </Link>
              <h4 className="text-2xl font-light mt-6">{val.name}</h4>
              <p className="text-lg font-light">PKR:    {val.price}</p>
            </div>
          );
        })}
      </div>
      <Link href="/product">
        <div className="flex justify-center items-center mt-8">
          <Button className="bg-[#F9F9F9] hover:bg-gray-300 hoverEffect text-black md:px-8 px-24 py-6 rounded-none ">
            View collection
          </Button>
        </div>
      </Link>
    </Container>
  );
};

export default ProductListing;
