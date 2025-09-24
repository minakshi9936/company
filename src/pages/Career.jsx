// src/components/Career.jsx
import React from "react";
import { FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

export default function Career() {
  return (
    <section className="relative bg-black text-yellow-400 py-16 px-6 lg:px-20">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 tracking-wide">
            Build Your <span className="text-yellow-500">Career</span> with Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join ABG GROUP and be part of a team
            driving excellence in HR Consulting, Supply
            Services and Facility Management across India.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#111] border border-yellow-500 p-6 rounded-xl shadow hover:shadow-yellow-500/50 flex flex-col items-center text-center transition">
            <FaUsers className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              People First
            </h3>
            <p className="text-gray-300">
              We value our employees and provide an inclusive, growth-oriented
              workplace.
            </p>
          </div>

          <div className="bg-[#111] border border-yellow-500 p-6 rounded-xl shadow hover:shadow-yellow-500/50 flex flex-col items-center text-center transition">
            <FaChartLine className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Growth Opportunities
            </h3>
            <p className="text-gray-300">
              Build a rewarding career with continuous learning and advancement.
            </p>
          </div>

          <div className="bg-[#111] border border-yellow-500 p-6 rounded-xl shadow hover:shadow-yellow-500/50 flex flex-col items-center text-center transition">
            <FaHandshake className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Strong Values
            </h3>
            <p className="text-gray-300">
              Work with integrity, innovation, and a passion for excellence.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Explore exciting career opportunities and become a part of our
            dynamic team. Let’s grow together!
          </p>
          <a
            href="https://forms.gle/ReLtUsMF4XFysuUDA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
          >
            Apply Now
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
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
    </section>
  );
}
