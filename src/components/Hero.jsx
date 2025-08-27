import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="relative min-h-[100vh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center flex-1 px-10 py-12 lg:py-0 relative z-10">
        {/* Left side text */}
        <div className="max-w-4xl text-center lg:text-left space-y-6 -mt-65">
          <h1 className="text-4xl md:text-4xl font-bold text-blue-900 leading-snug">
            One Partner. Two Strengths. Infinite{" "}
            <span className="text-orange-500">Possibilities</span>
          </h1>
          <h2 className="text-2xl md:text-xl font-semibold text-black-500">
            Where People Meet Productivity & Places Meet Possibilities
          </h2>
        </div>

        {/* Right side floating + animated box */}
        <motion.div
          animate={{
            y: [0, -15, 0], // floating
            rotate: [-1, 1, -1], // gentle tilt
            scale: [1, 1.02, 1], // pulse zoom
            boxShadow: [
              "0px 0px 25px rgba(59,130,246,0.4)", // blue glow
              "0px 0px 35px rgba(249,115,22,0.6)", // orange glow
              "0px 0px 25px rgba(59,130,246,0.4)", // back to blue
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            boxShadow: "0px 0px 50px rgba(249,115,22,0.8)", // strong orange glow
          }}
          className="relative bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm mt-10 lg:mt-0 min-h-[500px] flex flex-col justify-center transition-all duration-300"
        >
          {/* Glow border */}
          <div className="absolute inset-0 rounded-2xl border-4 border-orange-400 animate-pulse pointer-events-none"></div>

          <h2 className="text-gray-800 text-4xl font-bold text-center mb-4 relative z-10">
            OUR SERVICES
          </h2>
          <p className="text-md text-gray-500 text-center mb-8 relative z-10">
            End-to-End Services You Can Rely On
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 relative z-10">
  {/* Redirect to Service Page */}
  <Link
    to="/services"
    className="text-center border border-blue-500 text-blue-500 font-medium py-3 rounded-md hover:bg-orange-300 transition"
  >
    HR Consulting / IT Recruitment
  </Link>

  {/* PDF buttons remain unchanged */}
  <a
    href="/public/brochures/Supply Service Brochure.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-center border border-blue-500 text-blue-500 font-medium py-3 rounded-md hover:bg-orange-300 transition"
  >
    Supply Services
  </a>
  <a
    href="/public/brochures/Vishvam Profile.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-center border border-blue-500 text-blue-500 font-medium py-3 rounded-md hover:bg-orange-300 transition"
  >
    Facility Management
  </a>
</div>

        </motion.div>
      </div>
    </div>
  );
}
