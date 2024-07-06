import React from "react";
import Navbar from "./Navbar";
import bgimage from "../../public/andrea-donato-MNu0n-3BIKs-unsplash.jpg";
import Bgimage from "../../public/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div
          style={{ backgroundImage: `url(${bgimage})` }}
          className=" bg-cover bg-center h-72 flex justify-center items-center flex-col gap-2 md:h-svh"
        >
          <span className=" text-border text-white font-bold text-2xl shadow-2xl bohver sm:text-4xl md:text-5xl lg:text-6xl ">
            "Where Style Meets Tradition
          </span>
          <span className=" text-border text-white font-bold text-2xl shadow-2xl bohver sm:text-4xl md:text-5xl lg:text-6xl ">
            and Your Grooming Experts"
          </span>

          <span className="t text-white font-bold text-base shadow-xl bohver sm:text-xl md:text-2xl">
            Want to book an appointment? Click below!
          </span>
          <button className="mt-2 text-border p-2 rounded-md bg-[#f5eee7] font-semibold text-md shadow-2xl bohver sm:text-lg merriweather-bold ">
            Book Appointment
          </button>
        </div>
        <div className="flex justify-start items-center flex-col bg-[#f5eee7] gap-4 md:pt-5 ">
          <span className="mt-6 merriweather-bold font-bold text-xl bg-[#625c56] p-2 text-white rounded ">
            HISTORY
          </span>
          {/* <span className="font-sans text-[#625c56] font-bold text-2xl ">Our History!!</span> */}

          <div className="flex flex-col gap-4 p-3 md:flex-row">
            <div className="flex-1">
              <span className="merriweather-bold block md:text-xl p-4">
                Come experience a unique and edgy barbershop for all your hair
                and beard needs. ravida haretra nuam enim mi obortis eset uctus
                enec accumsan eu justo alisuame amet auctor orci donec vitae
                vehicula risus. Barber utate ons amet ravida haretra nuam the
                duru miss uctus the drana accumsan justo aliquam sit amet auctor
                orci done vitae risus duise nisan sapien silver on the accumsan
                id mauris apien.
                <p>💈non quod</p>
                <p>💈ipsum</p>
                <p>💈optio molestias nulla fugit voluptatem</p>
              </span>
            </div>
            <div className="flex justify-center items-center flex-1">
              <img
                className="h-96 md:h-auto md:w-2/3 transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                src="/logan-weaver-lgnwvr-knziVjrvztA-unsplash.jpg"
                alt="Hair Dresser"
              />
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center h-96 flex justify-center items-center gap-3 flex-col text-white md:flex-row"
          style={{ backgroundImage: `url(${Bgimage})` }}
        >
          <div className="w-80 flex flex-row bg-white bg-opacity-30 backdrop-blur-md gap-2 p-2 rounded-md hover:glow">
            <div className="mt-2">
              <img
                className="w-24 transform transition-transform duration-300 ease-in-out hover:rotate-180 "
                src="/Barber Scissors.png"
                alt="Barber Scissors"
              />
            </div>
            <div className="flex flex-col text-black">
              <span className="merriweather-bold">Cuts</span>
              <span className="merriweather-regular text-sm">
                Cuts ut nisl quam nestibulum drana odio elementum sceisue the
                can golden varius the dis monte.
              </span>
            </div>
          </div>

          <div className="w-80 flex flex-row bg-white bg-opacity-30 backdrop-blur-md gap-2 p-2 rounded-md hover:glow ">
            <div className="mt-2">
              <img
                className="w-24 transform transition-transform duration-300 hover:rotate-180"
                src="/Barber Clippers.png"
                alt="Barber Scissors"
              />
            </div>
            <div className="flex flex-col text-black">
              <span className="merriweather-bold">Fades</span>
              <span className="merriweather-regular text-sm">
                Cuts ut nisl quam nestibulum drana odio elementum sceisue the
                can golden varius the dis monte.
              </span>
            </div>
          </div>

          <div className="w-80 flex flex-row bg-white bg-opacity-30 backdrop-blur-md gap-2 p-2 rounded-md hover:glow ">
            <div className="mt-2">
              <img
                className="w-24 transform transition-transform duration-300 hover:rotate-180"
                src="/Razor.png"
                alt="Barber Scissors"
              />
            </div>
            <div className="flex flex-col text-black">
              <span className="merriweather-bold">Shaves</span>
              <span className="merriweather-regular text-sm">
                Cuts ut nisl quam nestibulum drana odio elementum sceisue the
                can golden varius the dis monte.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MainPage;
