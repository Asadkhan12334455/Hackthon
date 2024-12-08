import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white w-full h-[505px] mt-[4330px] ">
      {/* Container */}
      <div className="w-[1240px] mx-auto py-12">
        {/* Top Section */}
        <div className="flex justify-between gap-20">
          {/* Company Info */}
          <div className="w-[286px]">
            <h2 className="text-[24px] font-bold text-black mb-8">Funiro.</h2>
            <p className="text-[16px] mbv-[40px] text-gray-500 leading-[24px]">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="w-[200px]">
            <h3 className="text-[18px] font-semibold text-[#9F9F9F] mb-8">Links</h3>
            <ul className="space-y-8 text-[16px] text-black">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div className="w-[200px]">
            <h3 className="text-[18px] font-semibold text-[#9F9F9F] mb-8">Help</h3>
            <ul className="space-y-8 text-[16px] text-black">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div className="w-[286px]">
            <h3 className="text-[18px] font-semibold text-[#9F9F9F] mb-4">Newsletter</h3>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-black text-[14px] placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="text-[14px] font-semibold text-black underline"
              >
                SUBCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 border-t border-gray-200 pt-6 ">
          <p className="text-[16px] text-black">2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
