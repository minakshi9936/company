// src/components/Contact.jsx
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 lg:px-20"
      style= {{ backgroundImage: "url('/images/about1.png')" }} // Add your bg image in public/images
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-85"></div> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions? We’d love to hear from you. Reach out to us through
            any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                <p className="text-gray-700">
                  Vishvam Management Services Pvt. Ltd. <br />
                  Registered Office: Noida, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-orange-500 text-2xl" />
                <p className="text-gray-700">+91 9876543210</p>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-orange-500 text-2xl" />
                <p className="text-gray-700">info@vishvamservices.com</p>
              </div>
            </div>
          </div>

          {/* Button to Google Form */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Fill out our Google Form and we’ll get back to you as soon as possible.
            </p>
            <a
              href="https://forms.gle/amcd6iD4dYxfMhTG8" // replace FORM_ID with your form ID
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Go to Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
