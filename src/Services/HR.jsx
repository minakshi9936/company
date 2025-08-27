import React from "react";
import { FaLaptopCode, FaMobileAlt, FaSearch, FaCloud } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} className="text-indigo-500" />,
    title: "Web Development",
    description:
      "Build responsive, fast, and modern websites with latest technologies.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-green-500" />,
    title: "Mobile Apps",
    description:
      "Design and develop mobile applications for Android and iOS platforms.",
  },
  {
    icon: <FaSearch size={40} className="text-yellow-500" />,
    title: "SEO Optimization",
    description:
      "Improve your website ranking with effective SEO strategies.",
  },
  {
    icon: <FaCloud size={40} className="text-purple-500" />,
    title: "Cloud Services",
    description:
      "Deploy and manage your applications on the cloud for scalability.",
  },
];

export default function ServicePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We provide a wide range of digital solutions to help your business
          grow and succeed in the online world.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-indigo-600 text-white py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Contact us today to discuss your project and get a free consultation.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}