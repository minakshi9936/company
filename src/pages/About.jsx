// src/components/About.jsx
import React from "react";
import { FaBalanceScale, FaLightbulb, FaMedal } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 lg:px-20"
      style={{ backgroundImage: "url('/images/about1.png')" }} // <- Add your image in public/images folder
    >
      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            About <span className="text-orange-500">Vishvam</span>
          </h1>
          <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Delivering world-class Facility Management, HR Consulting, and
            Specialized Supply Services across India.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Vishvam Management Services Pvt. Ltd. is a professionally managed
              company delivering end-to-end Facility Management and Specialized
              Supply Services to corporates, institutions, residential societies,
              and industrial clients across India. With a focus on quality,
              efficiency, and sustainability, we help organizations streamline
              operations so they can focus on their core objectives.
            </p>
          </div>
          <div>
            <img
              src="/images/v.jpg"
              alt="About Vishvam"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-orange-500 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To provide comprehensive and reliable management services that
              enhance productivity, ensure compliance, and create safe and
              sustainable workplaces for our clients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-orange-500 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted partner for Facility Management, HR, and
              Supply Services in India — known for excellence, innovation, and
              customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center">
              <FaBalanceScale className="text-orange-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 text-center">
                We uphold the highest standards of honesty, ethics, and
                transparency in all our services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center">
              <FaLightbulb className="text-orange-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-center">
                We adopt modern practices and technology to deliver efficient
                and sustainable solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg flex flex-col items-center">
              <FaMedal className="text-orange-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-center">
                Our team is committed to exceeding expectations with reliable and
                quality-driven services.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Let’s Grow Together
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Partner with us to experience seamless management services and
            solutions tailored for your success.
          </p>
          <a
            href="/brochures/Vishvam Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}

