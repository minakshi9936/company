// src/components/Career.jsx
import React from "react";
import { FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

export default function Career() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 lg:px-20"
      style={{ backgroundImage: "url('/images/about1.png')" }} // <- Add your background image in public/images
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Build Your <span className="text-orange-500">Career</span> with Us
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join Vishvam Management Services Pvt. Ltd. and be part of a team
            driving excellence in Facility Management, HR Consulting, and Supply
            Services across India.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center text-center">
            <FaUsers className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-orange-500 mb-2">
              People First
            </h3>
            <p className="text-gray-600">
              We value our employees and provide an inclusive, growth-oriented
              workplace.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center text-center">
            <FaChartLine className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-orange-500 mb-2">
              Growth Opportunities
            </h3>
            <p className="text-gray-600">
              Build a rewarding career with continuous learning and advancement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center text-center">
            <FaHandshake className="text-orange-500 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-orange-500 mb-2">
              Strong Values
            </h3>
            <p className="text-gray-600">
              Work with integrity, innovation, and a passion for excellence.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Explore exciting career opportunities and become a part of our
            dynamic team. Let’s grow together!
          </p>
          <a
            href="https://forms.gle/amcd6iD4dYxfMhTG8" // <-- replace FORM_ID with your Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
