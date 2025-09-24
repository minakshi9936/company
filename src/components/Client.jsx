import React from "react";
import { motion } from "framer-motion";


export default function Client() {
  const clients = [
    "/Clients/1.png",
    "/Clients/2.jpg",
    "/Clients/3.png",
    "/Clients/4.png",
    "/Clients/5.jpg",
    "/Clients/6.png",
    "/Clients/7.jpg",
    "/Clients/8.png",
    "/Clients/9.jpg",
    "/Clients/10.png",
    "/Clients/11.png",
    "/Clients/12.png",
    "/Clients/13.png",
    "/Clients/14.png",
    "/Clients/15.png",
    "/Clients/16.png",
    "/Clients/17.jpg",
    "/Clients/18.png",
    "/Clients/19.png",
    "/Clients/20.jpg",
    "/Clients/21.jpg",
    "/Clients/22.png",
    "/Clients/23.png",
    "/Clients/24.png",
    "/Clients/25.jpg",
    "/Clients/26.png",
    "/Clients/27.jpg",
    "/Clients/28.jpg",
    "/Clients/29.png",
    "/Clients/30.jpg",
    "/Clients/31.png",
  ];

  // Duplicate the logos for infinite scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative bg-black py-20 px-6 lg:px-24 overflow-hidden">
      {/* Background Glowing Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-6 tracking-wide drop-shadow-lg">
        Our <span className="text-white">Clients</span>
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
        We are proud to have collaborated with leading brands and companies across industries.
      </p>

      {/* Infinite Scrolling Carousel */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {duplicatedClients.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-28 bg-yellow-400/10 border border-yellow-500/30 backdrop-blur-sm shadow-lg rounded-2xl p-4 hover:scale-105 hover:shadow-yellow-400/50 transition duration-300"
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
