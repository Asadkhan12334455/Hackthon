import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      {/* Background Image */}
      <div className="">
        <Image
          src="/HeroImage.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      {/* Content Box */}
      <div className="absolute z-10 bg-[#FFF3E3] max-w-[480px] p-8 md:p-12 rounded-lg shadow-lg ml-20">
        <h6 className="text-base text-[#333333] font-medium tracking-wider">
          New Arrival
        </h6>
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#B88E2F] leading-snug mt-3">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-sm md:text-base text-[#333333] mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 bg-[#B88E2F] text-white text-sm md:text-base font-semibold py-3 px-10 rounded shadow hover:bg-[#8A6246] transition duration-300 ease-in-out">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
