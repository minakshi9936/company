import React from "react";
import {
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaClipboardCheck,
  FaCogs,
  FaLeaf,
  FaTruck,
  FaIndustry,
} from "react-icons/fa";

export default function Feature() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 lg:px-24">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Our Services & Presence
      </h1>

      {/* About Us */}
      <div className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6">About Us</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Vishvam Management Services Pvt. Ltd. is a professionally managed
          company delivering end-to-end Facility Management and Specialized
          Supply Services to corporates, institutions, residential societies, and
          industrial clients across India. With a focus on quality, efficiency, and
          sustainability, we help organizations streamline operations so they can
          focus on their core objectives.
        </p>
      </div>

      {/* Why Us + Client Engagement */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-orange-500">
          <h2 className="text-xl font-semibold text-orange-600 mb-5 flex items-center">
            <FaHandshake className="mr-2 text-orange-500" /> Why Choose Us?
          </h2>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>✔ Integrity & Client-Centric Approach</li>
            <li>✔ Transparent Operations & Strong Vendor Network</li>
            <li>✔ Experienced Team with Deep Domain Expertise</li>
            <li>✔ PAN India Presence with Scalable Capacity</li>
            <li>✔ Commitment to Compliance, Safety & Hygiene</li>
            <li>✔ Green & Sustainable Practices</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-blue-600 mb-5 flex items-center">
            <FaClipboardCheck className="mr-2 text-blue-500" /> Client Engagement
          </h2>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>✔ Dedicated Account Managers</li>
            <li>✔ Monthly Performance Reviews</li>
            <li>✔ 24x7 Support and Emergency Response</li>
            <li>✔ Transparent Reporting & Documentation</li>
          </ul>
        </div>
      </div>

      {/* Key Offerings */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-orange-600 mb-10">
          Key Offerings
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
              <FaCogs className="mr-2 text-orange-500" /> Integrated Facility Management
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Housekeeping & Janitorial Services</li>
              <li>Security & Surveillance Services</li>
              <li>Technical Maintenance (Electrical, Plumbing, HVAC)</li>
              <li>Gardening & Landscaping</li>
              <li>Pest Control & Waste Management</li>
              <li>Front Office & Helpdesk Operations</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
              <FaTruck className="mr-2 text-blue-500" /> Supply Chain & Procurement
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>Bio-enzyme & Eco-friendly Cleaning Solutions</li>
              <li>Stationery and Office Supplies</li>
              <li>Tissue Paper & Hygiene Products</li>
              <li>Electrical & Maintenance Consumables</li>
              <li>Corporate Gifting & Custom Packaging</li>
              <li>Green Products for Sustainability Initiatives</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6 flex justify-center items-center">
          <FaIndustry className="mr-2 text-orange-500" /> Industries We Serve
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Business Parks, Hospitality & Hotels, Healthcare & Hospitals, 
          Educational Institutions, Retail & Shopping Malls, Airports & Aviation, 
          Residential Societies, Food & Beverage Industry
        </p>
      </div>
    </section>
  );
}
