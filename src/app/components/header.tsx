import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-[1440px] h-[100px] px-[54px] bg-white">
      {/* Group 1: Logo and Title */}
      <div className="flex items-center gap-[16px]">
        <Image src="/logo.png" alt="Logo" width={50} height={32} />
        <h1 className="text-[34px] font-bold leading-[41.45px] text-black">Furniro</h1>
      </div>

      {/* Group 2: Navigation Links */}
      <div className="flex gap-[58px]">
        <a
          href="#"
          className="text-[16px] leading-[24px] text-black hover:underline transition-all duration-200"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[16px] leading-[24px] text-black hover:underline transition-all duration-200"
        >
          Shop
        </a>
        <a
          href="#"
          className="text-[16px] leading-[24px] text-black hover:underline transition-all duration-200"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-[16px] leading-[24px] text-black hover:underline transition-all duration-200"
        >
          Contact
        </a>
      </div>

      {/* Group 3: Icons */}
      <div className="flex items-center gap-[30px]">
        <Image src="/Vector3.png" alt="Cart" width={24} height={24} />
        <Image src="/Vector2.png" alt="Wishlist" width={24} height={24} />
        <Image src="/Vector1.png" alt="Search" width={24} height={24} />
        <Image src="/Vector.png" alt="Contact" width={24} height={24} />
      </div>
    </div>
  );
};

export default Header;
