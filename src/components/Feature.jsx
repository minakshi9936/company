import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaClipboardCheck,
  FaCogs,
  FaLeaf,
  FaTruck,
  FaIndustry,
  FaShieldAlt,
  FaGlobeAsia,
  FaBalanceScale,
  FaChartLine,
  FaPhoneAlt,
  FaFileAlt,
  FaCheckCircle,
  FaBuilding,
  FaHotel,
  FaHospital,
  FaUniversity,
  FaShoppingBag,
  FaPlane,
  FaHome,
  FaUtensils,
} from "react-icons/fa";

export default function Feature() {
  const whyChooseUs = [
    { icon: <FaBalanceScale />, label: "Integrity" },
    { icon: <FaHandshake />, label: "Transparency" },
    { icon: <FaUsers />, label: "Experienced Team" },
    { icon: <FaGlobeAsia />, label: "PAN India" },
    { icon: <FaShieldAlt />, label: "Safety & Compliance" },
    { icon: <FaLeaf />, label: "Sustainability" },
    { icon: <FaUsers />, label: "Dedicated Managers" },
    { icon: <FaChartLine />, label: "Performance Reviews" },
    { icon: <FaPhoneAlt />, label: "24x7 Support" },
    { icon: <FaFileAlt />, label: "Transparent Reporting" },
  ];

  const industries = [
    { icon: <FaBuilding />, label: "Business Parks" },
    { icon: <FaHotel />, label: "Hospitality & Hotels" },
    { icon: <FaHospital />, label: "Healthcare & Hospitals" },
    { icon: <FaUniversity />, label: "Educational Institutions" },
    { icon: <FaShoppingBag />, label: "Retail & Shopping Malls" },
    { icon: <FaPlane />, label: "Airports & Aviation" },
    { icon: <FaHome />, label: "Residential Societies" },
    { icon: <FaUtensils />, label: "Food & Beverage Industry" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-24">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-16">
        Our Services & Presence
      </h1>

      {/* About Us */}
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
          About Us
        </h2>
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

      {/* Why Choose Us */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-8 flex items-center">
          <FaHandshake className="mr-2 text-yellow-400" /> Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-yellow-500/50 transition transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-yellow-400 text-4xl">{item.icon}</div>
              <p className="mt-3 text-gray-200 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Offerings */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-yellow-400 mb-10">
          Key Offerings
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-900 shadow-lg rounded-lg p-8 hover:shadow-yellow-500/50 transition hover:scale-105">
            <h3 className="font-bold text-white text-lg mb-4 flex items-center">
              <FaCogs className="mr-2 text-yellow-400" /> Integrated Facility
              Management
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Housekeeping
                & Janitorial Services
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Security &
                Surveillance Services
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Technical
                Maintenance (Electrical, Plumbing, HVAC)
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Gardening &
                Landscaping
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Pest Control
                & Waste Management
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Front Office
                & Helpdesk Operations
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 shadow-lg rounded-lg p-8 hover:shadow-yellow-500/50 transition hover:scale-105">
            <h3 className="font-bold text-white text-lg mb-4 flex items-center">
              <FaTruck className="mr-2 text-yellow-400" /> Supply Chain &
              Procurement
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Bio-enzyme &
                Eco-friendly Cleaning Solutions
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Stationery
                and Office Supplies
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Tissue Paper
                & Hygiene Products
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Electrical &
                Maintenance Consumables
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Corporate
                Gifting & Custom Packaging
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-yellow-400 mr-2" /> Green
                Products for Sustainability Initiatives
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-yellow-400 mb-10 flex justify-center items-center">
          <FaIndustry className="mr-2 text-yellow-400" /> Industries We Serve
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-yellow-500/50 transition hover:scale-105"
            >
              <div className="text-yellow-400 text-4xl">{item.icon}</div>
              <p className="mt-3 text-gray-200 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
