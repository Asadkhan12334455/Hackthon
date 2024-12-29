'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 h-[100px]">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={50} height={32} />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Furniro
          </h1>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-[100px] left-0 w-full bg-white lg:static lg:w-auto lg:block lg:bg-transparent`}
        >
          <ul className="flex flex-col text-center lg:flex-row lg:items-center gap-8 lg:gap-12 px-4 lg:px-0 py-4 lg:py-0">
            <li>
              <Link
                href="/"
                className="text-sm md:text-base text-gray-800 hover:text-[#B88E2F] transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-sm md:text-base text-gray-800 hover:text-[#B88E2F] transition duration-200"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm md:text-base text-gray-800 hover:text-[#B88E2F] transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm md:text-base text-gray-800 hover:text-[#B88E2F] transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Image src="/Vector3.png" alt="Contact" width={24} height={24} />
          </Link>
          <Link href="/checkout">
            <Image src="/Vector2.png" alt="Wishlist" width={24} height={24} />
          </Link>
          <Link href="/shop">
            <Image src="/Vector1.png" alt="Search" width={24} height={24} />
          </Link>
          <Link href="/cart">
            <Image src="/Vector.png" alt="Cart" width={24} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
