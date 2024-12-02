import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white pl-[125px] pr-[90px]">
      <div className="container mx-auto px-4 py-4 mt-[30px] flex justify-between items-center text-[#343434]">
        <h1 className="text-xl font-bold uppercase">Popstar Ventures</h1>
        <nav>
          <ul className="flex gap-5 text-[16px]">
            <li><a href="#brands">Our Brands</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="contact">Contact Us</a></li>
            <li>
              <a href="submit" className="bg-[#343434] text-white rounded-[11px] px-6 py-3 w-[135px] h-[40px] items-center justify-center">
                Submit Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
