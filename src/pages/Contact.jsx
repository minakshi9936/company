// src/components/Contact.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

export default function Contact() {
  return (
    <section
      className="relative bg-black text-white py-20 px-6 lg:px-20"
      style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-yellow-900/20"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wide">
            Contact <span className="text-white">Us</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? We’d love to hear from you. Reach out through any of
            the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-black/70 backdrop-blur-xl border border-yellow-400/30 p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                <p>
                  ABG GROUP Pvt. Ltd. <br />
                  Head Office - B114, Ground Floor, Sector 64, Noida - 201301
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-yellow-400 text-2xl" />
                <p>+91 7972867943</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-yellow-400 text-2xl" />
                <p>neha@abggroup.in</p>
              </div>
            </div>
          </div>

          {/* Google Form CTA */}
          <div className="bg-black/70 backdrop-blur-xl border border-yellow-400/30 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-300 mb-6">
              Fill out our Google Form and we’ll get back to you as soon as
              possible.
            </p>
            <a
              href="https://forms.gle/ReLtUsMF4XFysuUDA"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
            >
              Go to Form
              <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
