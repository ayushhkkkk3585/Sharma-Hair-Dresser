import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#14100c] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white text-lg font-bold mb-4">FOOTER</h2>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem asperiores necessitatibus cumque accusantium corporis.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-4">CREATIVITY</h2>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Website Guidline & Ideas</li>
              <li className="mb-2">Tips & Tricks</li>
              <li>Photography</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-4">CREATIVITY</h2>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Guidline & Ideas</li>
              <li className="mb-2">Tips & Tricks</li>
              <li>Photography</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-bold mb-4">CREATIVITY</h2>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Email: youremail@gmail.com</li>
              <li className="mb-2">Phone: +1 113-456-7890</li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
