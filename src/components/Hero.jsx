import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="relative min-h-[100vh] flex flex-col overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center flex-1 px-10 py-12 lg:py-0 relative z-10">
        {/* Left side text */}
        <div className="max-w-2xl text-center lg:text-left space-y-6 -mt-65">
          <h1 className="text-5xl md:text-4xl font-bold text-blue-900 leading-snug">
            One Partner. Two Strengths. Infinite{" "}
            <span className="text-orange-500">Possibilities</span>
          </h1>
          <h2 className="text-2xl md:text-xl font-semibold text-black-500">
            Where People Meet Productivity & Places Meet Possibilities
          </h2>
        </div>

        {/* Right side floating box */}
        <motion.div
          animate={{ y: [0, -15, 0] }} // only up & down motion
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm mt-10 lg:mt-0"
        >
          <h2 className="text-gray-800 md:text-5xl text-center font-bold text-lg mb-4">
            OUR SERVICES
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            End-to-End Services You Can Rely On
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-3">
            <a
              href="/public/brochures/ABG HR Profile N.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-blue-500 text-blue-500 font-medium py-2 rounded-md hover:bg-orange-300"
            >
              HR Consulting / IT Recruitment
            </a>
            <a
              href="/public/brochures/Supply Service Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-blue-500 text-blue-500 font-medium py-2 rounded-md hover:bg-orange-300"
            >
              Supply Services
            </a>
            <a
              href="/public/brochures/Vishvam Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-blue-500 text-blue-500 font-medium py-2 rounded-md hover:bg-orange-300"
            >
              Facility Management
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
