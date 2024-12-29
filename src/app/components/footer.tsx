import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full text-center">
      {/* Container */}
      <div className="w-full max-w-[1240px] mx-auto py-12 px-4 md:px-8 lg:px-0">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-12 lg:gap-20 sm:text-start">
          {/* Company Info */}
          <div className="w-full lg:w-[286px]">
            <h2 className="text-2xl font-bold text-black mb-4">Funiro.</h2>
            <p className="text-base text-gray-500 leading-6">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="w-full sm:w-auto">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Links</h3>
            <ul className="space-y-4 text-base text-black">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-full sm:w-auto">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">Help</h3>
            <ul className="space-y-4  text-base text-black">
              <li>
                <Link href="/contact" className="hover:underline">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:underline">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-[286px]">
            <h3 className="text-lg font-semibold text-gray-500 mb-4">
              Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full sm:flex-1 border-b border-black text-center text-sm placeholder-gray-400 focus:outline-none focus:border-[#B88E2F] transition-all duration-200"
              />
              <button
                type="submit"
                className="text-sm font-semibold text-black underline hover:text-[#B88E2F] transition duration-200"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
