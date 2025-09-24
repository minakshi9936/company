import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/bgv2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10"></div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center flex-1 px-6 md:px-12 lg:px-20 py-16 lg:py-0 relative z-20">
        {/* Left side text */}
        <div className="lg:w-1/2 max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            One Partner.{" "}
            <span className="text-yellow-400">Three Strengths.</span>{" "}
            Infinite <span className="text-yellow-500">Possibilities</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-gray-300">
            Where <span className="text-yellow-400">People</span> Meet
            Productivity & <br />
            <span className="text-yellow-500">Places</span> Meet Possibilities
          </h2>
        </div>

        {/* Right side buttons */}
        <div className="lg:w-1/2 flex flex-col space-y-6 mt-10 lg:mt-0 items-center lg:items-end">
          <Link
            to="./HR"
            className="px-6 md:px-8 py-4 w-full md:w-auto text-center font-semibold text-lg rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
          >
            HR Consulting / IT Recruitment
          </Link>
          <Link
            to="./Supply"
            className="px-6 md:px-8 py-4 w-full md:w-auto text-center font-semibold text-lg rounded-xl bg-yellow-500 text-black hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
          >
            Supply Services
          </Link>
          <a
            href="https://www.vishvamindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-4 w-full md:w-auto text-center font-semibold text-lg rounded-xl bg-yellow-600 text-black hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
          >
            Facility Management
          </a>
        </div>
      </div>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/917972867943"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-[9999]"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}
