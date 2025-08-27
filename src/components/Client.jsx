import React from "react";
import { motion } from "framer-motion";

export default function Client() {
  const clients = [
    "/src/assets/Clients/1.png",
    "/src/assets/Clients/2.jpg",
    "/src/assets/Clients/3.png",
    "/src/assets/Clients/4.png",
    "/src/assets/Clients/5.jpg",
    "/src/assets/Clients/6.png",
    "/src/assets/Clients/7.jpg",
    "/src/assets/Clients/8.png",
    "/src/assets/Clients/9.jpg",
    "/src/assets/Clients/10.png",
    "/src/assets/Clients/11.png",
    "/src/assets/Clients/12.png",
    "/src/assets/Clients/13.png",
    "/src/assets/Clients/14.png",
    "/src/assets/Clients/15.png",
    "/src/assets/Clients/16.png",
    "/src/assets/Clients/17.jpg",
    "/src/assets/Clients/18.png",
    "/src/assets/Clients/19.png",
    "/src/assets/Clients/20.jpg",
    "/src/assets/Clients/21.jpg",
    "/src/assets/Clients/22.png",
    "/src/assets/Clients/23.png",
    "/src/assets/Clients/24.png",
    "/src/assets/Clients/25.jpg",
    "/src/assets/Clients/26.png",
    "/src/assets/Clients/27.jpg",
    "/src/assets/Clients/28.jpg",
    "/src/assets/Clients/29.png",
  ];

  // Duplicate the logos for infinite scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative bg-gradient-to-b from-orange-50 via-white to-orange-100 py-20 px-6 lg:px-24 overflow-hidden">
      {/* Background Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
        Our <span className="text-orange-500">Clients</span>
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        We are proud to have collaborated with amazing clients. Here are some of
        the brands and companies we’ve worked with.
      </p>

      {/* Infinite Scrolling Carousel */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }} // slide left continuously
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {duplicatedClients.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-28 bg-white/40 backdrop-blur-md shadow-lg rounded-2xl p-4"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
