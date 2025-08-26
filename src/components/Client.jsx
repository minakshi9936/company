import React from "react";
import { motion } from "framer-motion";

export default function Client() {
  // List of client logo images (from public/Clients/)
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
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

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

      {/* Grid of Clients */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center max-w-7xl mx-auto relative z-10">
        {clients.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-40 h-28 bg-white/40 backdrop-blur-md shadow-lg rounded-2xl p-4 
                       hover:scale-105 hover:shadow-2xl hover:bg-white/70 transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
