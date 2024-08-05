import React from "react";
import Navbar from "./Navbar";
import bgimage from "../../public/andrea-donato-MNu0n-3BIKs-unsplash.jpg";
import Bgimage from "../../public/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  return (
    <>
    <Navbar/>
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${bgimage})` }}
          className="bg-cover bg-center h-screen w-full relative"
        >
          
          <div className="absolute inset-0 flex justify-center items-center flex-col gap-2 px-4 text-center">
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-border text-white font-bold text-2xl shadow-2xl bohver sm:text-4xl md:text-5xl lg:text-6xl"
            >
              "Where Style Meets Tradition
            </motion.span>
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-border text-white font-bold text-2xl shadow-2xl bohver sm:text-4xl md:text-5xl lg:text-6xl"
            >
              and Your Grooming Experts"
            </motion.span>

            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="t text-white font-bold text-base shadow-xl bohver sm:text-xl md:text-2xl"
            >
              Want to book an appointment? Click below!
            </motion.span>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 text-border p-2 rounded-md bg-[#f5eee7] font-semibold text-md shadow-2xl bohver sm:text-lg merriweather-bold"
              >
                Book Appointment
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Rest of the content remains unchanged */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-start items-center flex-col bg-[#f5eee7] gap-4 md:pt-3"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            id="about"
            className="mt-6 merriweather-bold font-bold text-xl bg-[#625c56] p-2 text-white rounded"
          >
            HISTORY
          </motion.span>

          <div className="flex flex-col gap-4 p-3 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <span className="merriweather-bold block md:text-xl p-4">
                Come experience a unique and edgy barbershop for all your hair
                and beard needs. ravida haretra nuam enim mi obortis eset uctus
                enec accumsan eu justo alisuame amet auctor orci donec vitae
                vehicula risus. Barber utate ons amet ravida haretra nuam the
                duru miss uctus the drana accumsan justo aliquam sit amet auctor
                orci done vitae risus duise nisan sapien silver on the accumsan
                id mauris apien.
                <motion.p whileHover={{ scale: 1.05 }}>💈non quod</motion.p>
                <motion.p whileHover={{ scale: 1.05 }}>💈ipsum</motion.p>
                <motion.p whileHover={{ scale: 1.05 }}>
                  💈optio molestias nulla fugit voluptatem
                </motion.p>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center flex-1"
            >
              <img
                className="h-80 md:h-auto md:w-80 lg:w-80 transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                src="/logan-weaver-lgnwvr-knziVjrvztA-unsplash.jpg"
                alt="Hair Dresser"
              />
            </motion.div>
          </div>

          {/* ... */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-cover bg-center h-96 flex justify-center items-center gap-3 flex-col text-white md:flex-row"
          style={{ backgroundImage: `url(${Bgimage})` }}
        >
          {["Cuts", "Fades", "Shaves"].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="w-80 flex flex-row bg-white bg-opacity-30 backdrop-blur-md gap-2 p-2 rounded-md hover:glow"
            >
              <div className="mt-2">
                <motion.img
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="w-24"
                  src={`/${
                    service === "Cuts"
                      ? "Barber Scissors"
                      : service === "Fades"
                      ? "Barber Clippers"
                      : "Razor"
                  }.png`}
                  alt={`${service} Icon`}
                />
              </div>
              <div className="flex flex-col text-black">
                <span className="merriweather-bold">{service}</span>
                <span className="merriweather-regular text-sm">
                  Cuts ut nisl quam nestibulum drana odio elementum sceisue the
                  can golden varius the dis monte.
                </span>
              </div>
            </motion.div>
          ))}

          {/* ... */}
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
