
import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-2 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold"><img className='w-20 sm:w-26' src="/public/Black_and_White_Grunge_Vintage_Barber_Shop_Logo-removebg-preview.png" alt="" /></div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            {/* for the lines */}
            <div className={`${isOpen ? 'hidden' : 'block'}`}>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
              <div className="w-6 h-0.5 bg-white mb-1 rotate-45 transform origin-center"></div>
              <div className="w-6 h-0.5 bg-white -rotate-45 transform origin-center"></div>
            </div>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <span className=" hor block mt-4 lg:inline-block lg:mt-0 lg:font-bold text-lg  text-white  mr-4">
            Home
          </span>
          <span className=" hor block mt-4 lg:inline-block lg:mt-0 lg:font-bold text-lg  text-white  mr-4">
            About
          </span>
          <span className="hor block mt-4 lg:inline-block lg:mt-0 lg:font-bold text-lg  text-white ">
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
