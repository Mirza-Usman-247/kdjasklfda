
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Container from "./Container";
import { Button } from "./ui/button";
// import { useState } from "react";
import ProductTabbar from "./ProductTabbar";
import { Image as IImage } from "sanity";

const ProductDataFetching = async () => {
  const fetchData = await client.fetch(`*[_type == 'product'] {
    image,
    name,
    price
}`);
  return fetchData;
};

interface Product {
  name: string;
  price: number;
  image: IImage;
}

const ProductGrid = async () => {
  // const [selected, setSelected] = useState('')

  const product: Product[] = await ProductDataFetching();
  // console.log("Category",selected)
  return (
    <Container className="px-6 py-5">
      {/* <ProductTabbar selected={selected} Tabselect={setSelected} /> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {product.map((val, i) => {
          return (
            <div className=" space-y-2 py-3" key={i}>
              <Link href="/product" className="">
                <Image
                  src={urlFor(val.image).url()} // Adjust width and height as needed
                  alt={val.name}
                  width={305}
                  height={375}
                  className="md:max-h-[375px] md:min-h-[375px] object-cover min-h-[201px] max-h-[201px] w-[163px    ]"
                  // quality={80} // Adjust quality if needed
                />
              </Link>
              <h4 className="text-2xl font-light mt-6">{val.name}</h4>
              <p className="text-lg font-light">{val.price}</p>
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

export default ProductGrid;
