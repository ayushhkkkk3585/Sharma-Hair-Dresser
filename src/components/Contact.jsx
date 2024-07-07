import React, { useState } from "react";
import Navbar from "./Navbar";
// import Bgimage from "../../public/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import contactImg from "../../public/nathon-oski-fE42nRlBcG8-unsplash.jpg";
import ReactCardFlip from "react-card-flip";
import Logo from "../../public/eduardo-cano-photo-co-7OO7KJpzlHM-unsplash.jpg";

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  function cardFlip() {
    setIsFlipped(!isFlipped);
    //
    // const [flipped, setFlipped] = useState(false);

    //   const handleFlip = () => {
    //       setFlipped(!flipped);
    //
  }

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${contactImg})` }}
        className=" bg-cover bg-center h-72 flex justify-start items-center flex-col  gap-2 md:h-72 lg:h-96"
      >
        <div className="flex flex-col mt-20 justify-center items-center">
          <span className=" text-border text-white font-bold text-md shadow-2xl  sm:text-xl md:text-xl lg:text-xl ">
            Get in Touch
          </span>
          <span className=" text-border text-white font-bold text-2xl shadow-2xl  sm:text-4xl md:text-5xl lg:text-6xl ">
            Contact us!
          </span>
        </div>
      </div>

      {/*location and details*/}
      <div className="flex flex-col md:flex-row md:justify-between bg-[#f5eee7] p-10">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:ml-20">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-6">
            Sharma Hair Dresser is predominantly known for it's service. We
            provide quality service and our haircuts are done by trained
            professionals.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Address</h3>
            <p>0665 Broadway NY, 10001 USA</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Phone</h3>
            <p>855 100 4444</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">E-Mail</h3>
            <p>info@barber.com</p>
          </div>
        </div>
        <ReactCardFlip  flipDirection="horizontal" isFlipped={isFlipped}>
          <div
            className="back flex justify-center rounded-md md:mr-20"
            onClick={cardFlip}
          >
            <img
              className="w-26 h-96  rounded-md"
              src="/eduardo-cano-photo-co-7OO7KJpzlHM-unsplash.jpg"
              alt=""
            />
          </div>
          <div
            className="back flex justify-center rounded-md md:mr-20 bg-black"
            onClick={cardFlip}
          >
            <img
              className="w-26 h-96  rounded-md"
              src="/public/Black_and_White_Grunge_Vintage_Barber_Shop_Logo-removebg-preview.png"
              alt=""
            />
          </div>
        </ReactCardFlip>
      </div>
    </>
  );
};

export default Contact;
