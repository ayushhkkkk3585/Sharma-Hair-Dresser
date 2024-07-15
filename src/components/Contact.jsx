import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
// import Bgimage from "../../public/allef-vinicius-IvQeAVeJULw-unsplash.jpg";
import contactImg from "../../public/nathon-oski-fE42nRlBcG8-unsplash.jpg";
import ReactCardFlip from "react-card-flip";
import Logo from "../../public/eduardo-cano-photo-co-7OO7KJpzlHM-unsplash.jpg";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isFlipped, setIsFlipped] = useState(false);
  function cardFlip() {
    setIsFlipped(!isFlipped);
    //
    // const [flipped, setFlipped] = useState(false);

    //   const handleFlip = () => {
    //       setFlipped(!flipped);
    //
  }
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.phone) formErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Invalid phone number";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Invalid email address";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, proceed with form submission
      console.log("Form submitted:", formData);
    }
    emailjs
      .sendForm("service_126k2pe", "template_tu5ehl9", form.current, {
        publicKey: "9_NRJKc6VWvofe9hK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
      <div className="bg-[#f5eee7] py-12 px-4 lg:px-24">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-sm text-[#625c56] font-semibold mb-2">
              CONTACT INFO
            </h2>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-700 mb-8">
              Barber utate ons amet ravida haretra nuam the drua miss uctus the
              drana accusman justo aliquam sit amet auctor orci done vitae.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 10.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7h-1a8.5 8.5 0 01-7.6-4.7 8.38 8.38 0 01-.9-3.8V8.2a3.25 3.25 0 013.25-3.25h13.5A3.25 3.25 0 0121 8.2v2.3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Address
                  </h4>
                  <p className="text-gray-700">0665 Broadway NY, 10001 USA</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l9 6 9-6-9-6-9 6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 16V8a2 2 0 00-1-1.732L12 1 4 6.268A2 2 0 003 8v8a2 2 0 001 1.732L12 23l8-4.268A2 2 0 0021 16z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700">855 100 4444</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12A4 4 0 118 12a4 4 0 018 0zM2.458 12C3.732 7.943 7.546 5 12 5c4.454 0 8.268 2.943 9.542 7-1.274 4.057-5.088 7-9.542 7-4.454 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    e-Mail
                  </h4>
                  <p className="text-gray-700">info@barber.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-900 p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Form</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="e-Mail"
                    className="p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs">{errors.subject}</p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full p-3 rounded-md bg-[#91765a] text-white font-semibold hover:bg-gray-600 transition duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className=" m-5 border-2 border-gray-200 rounded-lg p-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3230796866915!2d72.84419577466558!3d19.09347745142473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9adf44a6741%3A0x63f21ca5de54b733!2sPrema%20Apartment%2C%20Sant%20Chokha%20Mela%20Path%2C%20Neel%20Ashish%20Co-op%20Housing%20Society%2C%20Navpada%2C%20Vile%20Parle%20East%2C%20Vile%20Parle%2C%20Mumbai%2C%20Maharashtra%20400057!5e0!3m2!1sen!2sin!4v1720965758598!5m2!1sen!2sin"
          className="w-full h-96 rounded-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
