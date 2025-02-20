import AddSub from "./AddSub";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Container from "./Container";
import Banner from "./Banner";

const ProductDataFetching = async () => {
  const fetchData = await client.fetch(`*[_type == 'product'] {
  slug{
    current
  },
  description, 
  name,
  price,
  features [0..2],
  image,
  quantity,
  dimensions,
}`);
  return fetchData;
};

interface Product {
  name: string;
  price: number;
  image: IImage;
  slug: {
    current: string;
  };
  description: string;
  qauntity: number;
  features: [string, string, string];
  dimensions: {
    height: number;
    width: number;
    depth: number;
  };
}

interface Props {
  Pathname?: string;
}

const Productpage = async ({ Pathname }: Props) => {
  const product: Product[] = await ProductDataFetching();
  const slug = product.find((val, i) => val.slug.current === Pathname);
  if (!slug) {
    return <div>product not found</div>;
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-[50%] w-full">
        <Image
          src={urlFor(slug.image).url()}
          alt={slug.name}
          width={100000}
          height={100000}
          className="w-full h-[598px] object-cover"
        />
      </div>
      <div className="lg:w-[50%] w-full">
        <Container className="flex justify-center items-center px-8 md:px-20 py-8 md:h-[598px] ">
          <div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold capitalize ">{slug.name}</h1>
              <h2 className="flex gap-2 text-xl font-light"><div className="font-medium" >PKR</div> {slug.price}</h2>
            </div>
            <div className="space-y-4 mt-8">
              <h1 className="text-2xl font-medium">Description</h1>
              <p className="text-md font-light w-11/12">{slug.description}</p>
              <ul className="list-disc pl-6">
                <li className="text-md font-light">{slug.features[0]}</li>
                <li className="text-md font-light">{slug.features[1]}</li>
                <li className="text-md font-light">{slug.features[2]}</li>
              </ul>
            </div>
            <div className="w-full space-y-4 mt-8">
              <div className="text-2xl font-medium">Dimensions</div>
              <div className="flex md:justify-start justify-center items-center gap-5 ">
                <div className="space-y-3 font-light w-1/3 md:w-auto text-center md:text-left">
                  <h4 className="text-2xl font-medium">Height</h4>
                  <p>{slug.dimensions.height}</p>
                </div>
                <div className="space-y-3 font-light w-1/3 md:w-auto border-l border-l-gray-200 text-center md:text-left md:border-none">
                  <h4 className="text-2xl font-medium">Width</h4>
                  <p>{slug.dimensions.width}</p>
                </div>
                <div className="space-y-3 font-light w-1/3 md:w-auto border-l border-l-gray-200 text-center md:text-left md:border-none">
                  <h4 className="text-2xl font-medium">Depth</h4>
                  <p>{slug.dimensions.depth}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-center md:justify-between items-center mt-8">
              <div className="flex space-x-10 md:justify-start justify-between md:w-auto w-full items-center ">
                <p className="text-2xl font-medium text-left">Qauntity:</p>
                <AddSub />
              </div>
              <div className="px-6 py-6">
                <button className="text-white capitalize py-4 md:px-8 px-[154px] bg-[#2A254B]">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  
  );
};

export default Productpage;