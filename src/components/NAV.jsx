import React, {useState} from 'react'

const NAV = () => {
    const [display, setDisplay] = useState(false);
    const toggleNavbar = () => {
        setDisplay(!display);
      };
  return (
    <>
    <nav className='bg-black text-white p-3 '>
        <div>
        <div className='flex justify-between'>
            {/* <img src="/src/assets/Black and White Grunge Vintage Barber Shop Logo.png" alt="" />  */}logo
            <div className='lg:hidden'>
            <button onClick={toggleNavbar}>
            <div className={`${display ? 'hidden' : 'block'}`}>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
            </div>
            <div className={`${display ? 'block' : 'hidden'}`}>
              <div className="w-6 h-0.5 bg-white mb-1 rotate-45 transform origin-center"></div>
              <div className="w-6 h-0.5 bg-white -rotate-45 transform origin-center"></div>
            </div>
            </button>
            </div>
            <div className={`lg:flex ${display ? 'block' : 'hidden'} lg:block`}>
          <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Home
          </a>
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            About
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
            Contact
          </a>
        </div>
        </div>
        </div> 

    </nav>
    
    
    
    
    
    </>
  )
}

export default NAV