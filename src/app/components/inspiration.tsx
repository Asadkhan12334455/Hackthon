"use client";
import { TiArrowRightOutline } from "react-icons/ti";
import Image from "next/image";
const RoomInspiration = () => {
  return (
    <div className="bg-[#fdf7f1] py-12">
      <div className="flex items-center gap-8 ">
        {/* Left Content */}
        <div className="text-left pl-[100px] pr-[42px] flex flex-col gap-[25px]">
          <div className="flex flex-col gap-2">
            <h2 className="text-[40px] font-bold text-[#333333] leading-[42px]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-[16px] font-medium text-[#616161]">
              Our designer already made a lot of beautiful prototype of rooms
              that inspire you.
            </p>
          </div>
          <a href="/sofa">
          <button className="bg-primary text-white hover:text-primary hover:bg-white hover:border-[1px] hover:border-primary px-[36px] py-[12px] font-semibold text-[16px] w-fit">
            Explore More
          </button></a>
        </div>

        {/* Right Content */}
        <div className="w-full md:flex hidden items-center justify-center gap-8 ">
          {/* Main Image */}
          <div className="relative w-[404px] h-[582px] overflow-hidden ">
            
            <Image src="/image-9.png"
              alt="Inner Peace"
              className="w-full h-full object-cover"
              width={900} height={100}
              ></Image>
            <div className="absolute bottom-6 left-6 bg-white bg-opacity-70 p-8 ">
              <p className="text-[16px] font-medium text-[#616161]">
                01 —— Bed Room
              </p>
              <h3 className="text-[28px] font-semibold text-[#333333]">
                Inner Peace
              </h3>
            </div>
            <div className="p-[12px] bg-primary w-[48px] h-[48px] absolute bottom-6 right-24 cursor-pointer ">
            <a href="/sofa"><TiArrowRightOutline
                className="text-white w-6 h-6 "
              /></a>
            </div>
          </div>

          {/* Smaller Images */}
          <div className="flex flex-col justify-between h-[582px]">
            <div className="flex h-[486px] gap-[24px] ">
              <div className="w-[372px]  overflow-hidden">
                
                <Image src="/image-10.png"
                  alt="Modern Vibes"
                  className="object-cover"
                  width={900} height={100}></Image>
              </div>
              <div className="w-fit h-[450px] overflow-hidden">
                
                <Image src="/image-11.png"
                  alt="Modern Vibes"
                  className="object-contain"
                  width={60} height={100}></Image>
              </div>
            </div>
            <div className="flex gap-[20px] items-center mb-[30px]">
              <span className="w-[27px] h-[27px] rounded-full border border-primary cursor-pointer bg-transparent flex justify-center items-center">
                <div className="bg-primary w-[11px] h-[11px] rounded-full"></div>
              </span>
              <span className="bg-[#616161] w-[11px] h-[11px] rounded-full"></span>
              <span className="bg-[#616161] w-[11px] h-[11px] rounded-full"></span>
              <span className="bg-[#616161] w-[11px] h-[11px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;