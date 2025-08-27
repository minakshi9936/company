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
    { icon: <FaBalanceScale className="text-orange-500 text-3xl" />, label: "Integrity" },
    { icon: <FaHandshake className="text-blue-500 text-3xl" />, label: "Transparency" },
    { icon: <FaUsers className="text-green-500 text-3xl" />, label: "Experienced Team" },
    { icon: <FaGlobeAsia className="text-purple-500 text-3xl" />, label: "PAN India" },
    { icon: <FaShieldAlt className="text-red-500 text-3xl" />, label: "Safety & Compliance" },
    { icon: <FaLeaf className="text-green-600 text-3xl" />, label: "Sustainability" },
  ];

  const clientEngagement = [
    { icon: <FaUsers className="text-blue-500 text-3xl" />, label: "Dedicated Managers" },
    { icon: <FaChartLine className="text-orange-500 text-3xl" />, label: "Performance Reviews" },
    { icon: <FaPhoneAlt className="text-green-500 text-3xl" />, label: "24x7 Support" },
    { icon: <FaFileAlt className="text-purple-500 text-3xl" />, label: "Transparent Reporting" },
  ];

  const industries = [
    { icon: <FaBuilding className="text-orange-500 text-3xl" />, label: "Business Parks" },
    { icon: <FaHotel className="text-blue-500 text-3xl" />, label: "Hospitality & Hotels" },
    { icon: <FaHospital className="text-red-500 text-3xl" />, label: "Healthcare & Hospitals" },
    { icon: <FaUniversity className="text-purple-500 text-3xl" />, label: "Educational Institutions" },
    { icon: <FaShoppingBag className="text-green-500 text-3xl" />, label: "Retail & Shopping Malls" },
    { icon: <FaPlane className="text-indigo-500 text-3xl" />, label: "Airports & Aviation" },
    { icon: <FaHome className="text-pink-500 text-3xl" />, label: "Residential Societies" },
    { icon: <FaUtensils className="text-yellow-500 text-3xl" />, label: "Food & Beverage Industry" },
  ];

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 lg:px-24">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
        Our Services & Presence
      </h1>

      {/* About Us */}
<div className="mb-20 text-center max-w-4xl mx-auto">
  <h2 className="text-2xl font-semibold text-orange-600 mb-6">About Us</h2>
  <p className="text-gray-700 leading-relaxed text-lg mb-6">
    At <span className="font-semibold">ABG Group</span>, HR isn’t just a service—
    it’s the backbone of every business we support. We started this company
    with one clear thought: <span className="italic">Hiring shouldn’t be mechanical—it should feel human, personal, and aligned with real business needs.</span>
  </p>
 
  <p className="text-gray-700 leading-relaxed text-lg mb-6">
    We work like an extension of your team—quietly, consistently, and fully aligned with your pace.
    Sometimes hiring means urgency, sometimes it needs patience—and we’re equally
    comfortable with both.
  </p>
  <p className="text-gray-700 leading-relaxed text-lg">
    Our clients trust us because we stay involved from start to finish, communicate clearly
    and honestly, and take full ownership of every mandate. If something’s not working,
    we fix it fast. For us, this isn’t just business—it’s partnership. It’s about building
    something real and lasting, one hire at a time.
  </p>
</div>


     {/* Why Choose Us */}

<div className="mb-20 max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold text-orange-600 mb-8 flex items-center">
    <FaHandshake className="mr-2 text-orange-500" /> Why Choose Us?
  </h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
    {whyChooseUs.map((item, idx) => (
      <div
        key={idx}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition transform hover:-translate-y-1 w-full sm:w-72"
      >
        {item.icon}
        <p className="mt-3 text-gray-700 font-medium">{item.label}</p>
      </div>
    ))}
  </div>
</div>



      {/* Client Engagement */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-600 mb-8 flex items-center">
          <FaClipboardCheck className="mr-2 text-blue-500" /> Client Engagement
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientEngagement.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {item.icon}
              <p className="mt-3 text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Offerings */}
      <div className="mb-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-orange-600 mb-10">
          Key Offerings
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
              <FaCogs className="mr-2 text-orange-500" /> Integrated Facility Management
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Housekeeping & Janitorial Services</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Security & Surveillance Services</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Technical Maintenance (Electrical, Plumbing, HVAC)</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Gardening & Landscaping</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Pest Control & Waste Management</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Front Office & Helpdesk Operations</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition">
            <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
              <FaTruck className="mr-2 text-blue-500" /> Supply Chain & Procurement
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Bio-enzyme & Eco-friendly Cleaning Solutions</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Stationery and Office Supplies</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Tissue Paper & Hygiene Products</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Electrical & Maintenance Consumables</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Corporate Gifting & Custom Packaging</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Green Products for Sustainability Initiatives</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-orange-600 mb-10 flex justify-center items-center">
          <FaIndustry className="mr-2 text-orange-500" /> Industries We Serve
        </h2>
        <br/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {item.icon}
              <p className="mt-3 text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

