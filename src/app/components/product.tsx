"use client";
import { FaRegHeart } from "react-icons/fa";
import { VscArrowSwap } from "react-icons/vsc";
import { IoShareSocialSharp } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Syltherine",
    fullname: "Stylish cafe chair",
    discount: "-30%",
    price: "Rp 2.500.000",
    image: "/image-1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    fullname: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: "/image-2.png",
  },
  {
    id: 3,
    name: "Lolito",
    fullname: "Luxury big sofa",
    discount: "-50%",
    price: "Rp 7.000.000",
    image: "/image-3.png",
  },
  {
    id: 4,
    name: "Respira",
    fullname: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: "/image-4.png",
  },
  {
    id: 5,
    name: "Grifo",
    fullname: "Night lamp",
    price: "Rp 1.500.000",
    image: "/image-5.png",
  },
  {
    id: 6,
    name: "Muggo",
    fullname: "Small mug",
    price: "Rp 150.000",
    image: "/image-6.png",
  },
  {
    id: 7,
    name: "Pingky",
    fullname: "Cute bed set",
    discount: "-50%",
    price: "Rp 7.000.000",
    image: "/image-7.png",
  },
  {
    id: 8,
    name: "Potty",
    fullname: "Minimalist flower pot",
    price: "Rp 500.000",
    image: "/image-8.png",
  },
];

export default function OurProducts() {
  return (
    <div className="w-full border-b-2 py-16 flex flex-col justify-center bg-[#F4F5F7] px-4">
      <div className="flex flex-col gap-[32px] w-fit mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-[40px] font-bold text-secondary">Our Products</h1>
        </div>

        {/* Cards */}
        <div className="flex gap-[21px] overflow-x-auto no-scrollbar flex-wrap justify-center w-full">
          {/* Cards for Products */}
          {products.map((product, index) => (
            <div
              className={`bg-white relative overflow-hidden w-[285px] md:w-[285px] lg:w-[285px] ${
                product.id === 2 ? "active-product" : "group"
              }`}
              key={index}
            >
              {/* Image Container */}
              <div className="w-full h-[301px]">
                <div
                  className={`flex h-full w-full bg-no-repeat bg-center relative transition-transform duration-300 ${
                    product.id === 2 ? "scale-105" : "group-hover:scale-105"
                  }`}
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                >
                  {/* NEW Badge */}
                  {(index === 3 || index === 5 || index === 7) && (
                    <div className="h-[48px] w-[48px] bg-GreenAccents rounded-full flex items-center justify-center absolute top-6 right-6">
                      <p className="text-[16px] font-medium text-white">NEW</p>
                    </div>
                  )}
                </div>
                {/* Add to Cart Button */}
                <div
                  className={`h-full absolute bottom-0 w-full flex flex-col gap-[24px] items-center justify-center bg-opacity-0 ${
                    product.id === 2 ? "bg-opacity-70 opacity-100 bg-[#3A3A3A]" : "group-hover:bg-opacity-70 group-hover:opacity-100"
                  } opacity-0 transition-opacity duration-300 hover:bg-[#696969]`}
                ><a href="/cart">
                  <button className="text-[16px] font-medium text-primary bg-white px-[52px] py-[12px]">
                    Add to Cart
                  </button></a>
                  <a href="/cart">
                  <div className="flex gap-4 text-white text-sm mt-2">
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <IoShareSocialSharp />
                      Share
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <VscArrowSwap />
                      Compare
                    </button>
                    <button className="flex items-center gap-1 text-[16px] font-semibold">
                      <FaRegHeart />
                      Like
                    </button>
                  </div>
                  </a>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-fit pt-[16px] pb-[30px] pr-[20px] pl-[16px]">
                <h2 className="text-[24px] font-semibold text-secondary1">{product.name}</h2>
                <h4 className="text-[16px] font-medium text-secondary">{product.fullname}</h4>
                <div className="w-fit flex gap-[16px] items-center">
                  <p className="text-[20px] font-semibold text-secondary1">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <a href="/shop">
        <div className="w-full text-center mt-5">
          <button className="text-[16px] font-semibold bg-white py-[12px] px-[72px] hover:bg-primary hover:text-white text-primary border border-primary">
            Show More
          </button>
        </div>
        </a>
      </div>
    </div>
  );
}
