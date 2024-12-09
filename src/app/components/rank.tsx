import Image from "next/image";

export default function BrowseRange() {
  return (
    <div className="flex flex-col mt-[129px] gap-[30px] md:gap-[60px] pt-[30px] md:pt-0 items-center bg-[#F4F5F7] px-4">
      <div className="w-fit text-center text-[#666666]">
        <h2 className="text-Font font-bold text-[32px] text-[#333333]">Browse The Range</h2>
        <p className="text-secondary1 font-normal text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {/* Dining Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
          <div className="">
            <Image
              src="/image 100.png"
              alt="image1"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] text-[#333333] text-Font">Dining</p>
          </div>
        </div>

        {/* Living Section */}
        <div className="w-[100%] sm:w-[381px]  flex flex-col gap-[30px]">
          <div className="">
            <Image
              src="/image 106.png"
              alt="image2"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] text-[#333333] text-Font">Living</p>
          </div>
        </div>

        {/* Bedroom Section */}
        <div className="w-[100%] sm:w-[381px] flex flex-col gap-[30px]">
          <div className="">
            <Image
              src="/image 101.png"
              alt="image3"
              className="rounded-[4px] w-full"
              width={900}
              height={100}
            />
          </div>
          <div className="w-full text-center">
            <p className="font-semibold text-[24px] text-[#333333] text-Font">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
