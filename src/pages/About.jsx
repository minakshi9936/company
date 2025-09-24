// src/components/About.jsx
import React from "react";
import { FaBalanceScale, FaLightbulb, FaMedal } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

export default function About() {
  return (
    <section className="relative bg-black text-yellow-400 py-20 px-6 lg:px-20">
      {/* Overlay background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
            About <span className="text-yellow-500">ABG GROUP</span>
          </h1>
          <p className="text-lg text-gray-300 font-medium max-w-2xl mx-auto">
            Delivering world-class Facility Management, HR Consulting, and
            Specialized Supply Services across India.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Who We Are
            </h2>
              <div className="mb-20 text-left max-w-4xl mx-auto">
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          At <span className="font-semibold text-yellow-400">ABG Group</span>,
          we believe in being more than just a service provider — we are
          partners in growth. Established with a vision to simplify and
          strengthen business operations, ABG Group brings together expertise
          across three core domains: <br></br>
          <span className="italic text-yellow-300">
            HR Recruitment Services –{" "}
          </span>{" "}
          Connecting the right talent with the right opportunity. We specialize
          in end-to-end recruitment, bulk hiring, and RPO solutions, helping
          organizations build strong, future-ready teams.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          <span className="italic text-yellow-300"> Supply Services – </span>{" "}
          From eco-friendly cleaning chemicals to tissue papers and essential
          consumables, we ensure timely and reliable bulk supplies for
          corporates, industries, and residential societies.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          <span className="italic text-yellow-300">
            Facility Management Services –
          </span>{" "}
          Comprehensive management solutions to keep workplaces, housing
          societies, and industries running smoothly with efficiency, safety,
          and professionalism.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg">
          With a client-first approach, ABG Group is built on values of
          reliability, transparency, and excellence. Our goal is to provide
          seamless support, so businesses can focus on what they do best — while
          we take care of the rest.
        </p>
      </div>
          </div>
          <div>
            <img
              src="/images/v.jpg"
              alt="About ABG Group"
              className="rounded-2xl shadow-lg border-4 border-yellow-500 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#111]/90 backdrop-blur-xl border border-yellow-500 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/50 transition">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To provide comprehensive and reliable management services that
              enhance productivity, ensure compliance, and create sustainable
              workplaces for our clients.
            </p>
          </div>

          <div className="bg-[#111]/90 backdrop-blur-xl border border-yellow-500 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/50 transition">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To be the most trusted partner for Facility Management, HR, and
              Supply Services in India — known for excellence, innovation, and
              customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-yellow-500 mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#111]/90 border border-yellow-500 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/50 flex flex-col items-center transition">
              <FaBalanceScale className="text-yellow-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-300 text-center">
                Upholding the highest standards of honesty, ethics, and
                transparency in all our services.
              </p>
            </div>
            <div className="bg-[#111]/90 border border-yellow-500 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/50 flex flex-col items-center transition">
              <FaLightbulb className="text-yellow-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-300 text-center">
                Adopting modern practices and technology to deliver efficient
                and sustainable solutions.
              </p>
            </div>
            <div className="bg-[#111]/90 border border-yellow-500 p-8 rounded-2xl shadow-lg hover:shadow-yellow-500/50 flex flex-col items-center transition">
              <FaMedal className="text-yellow-400 text-5xl mb-4" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-300 text-center">
                Exceeding expectations with reliable and quality-driven
                services.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Let’s Grow Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to experience seamless management services and
            solutions tailored for your success.
          </p>
          <a
            href="/brochures/ABG HR Profile N.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all"
          >
            Download Brochure
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
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
