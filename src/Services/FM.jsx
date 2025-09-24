import React from "react";
import {
  Building2,
  Shield,
  Wrench,
  Leaf,
  Users,
  ClipboardCheck,
  FileText,
 
  Download,
} from "lucide-react";

const facilityServices = [
  { title: "Housekeeping & Janitorial Services", description: "Comprehensive cleaning and upkeep ensuring a hygienic and professional workplace.", icon: <Building2 className="w-10 h-10 text-blue-600" /> },
  { title: "Pantry & Office Support Staff", description: "Trained staff to manage pantry, office assistance, and day-to-day operational support.", icon: <Users className="w-10 h-10 text-green-600" /> },
  { title: "Security & Surveillance Services", description: "End-to-end security personnel deployment, CCTV monitoring, and safety compliance.", icon: <Shield className="w-10 h-10 text-red-600" /> },
  { title: "Technical Maintenance", description: "Electrical, plumbing, HVAC, and other preventive & corrective technical maintenance.", icon: <Wrench className="w-10 h-10 text-yellow-600" /> },
  { title: "Gardening & Landscaping", description: "Green maintenance services including gardens, lawns, and landscaping projects.", icon: <Leaf className="w-10 h-10 text-green-700" /> },
  { title: "Pest Control & Waste Management", description: "Safe, eco-friendly pest management and waste disposal for sustainable operations.", icon: <ClipboardCheck className="w-10 h-10 text-purple-600" /> },
  { title: "Front Office & Helpdesk Operations", description: "Trained front-desk staff for customer handling, query resolution, and admin support.", icon: <FileText className="w-10 h-10 text-indigo-600" /> },
];





export default function Facility() {
  return (
    <div className="min-h-screen bg-gray-90">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Facility Management</h2>
        <p className="text-lg max-w-3xl mx-auto">
          End-to-end Integrated Facility Management and Specialized Supply Services designed to
          ensure productivity, safety, and sustainability.
        </p>

     
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-20">
        {/* IFMS Services */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Integrated Facility Management Services
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {facilityServices.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform"
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

       

      

        {/* Creative Brochure CTA at End */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Want to Know More?</h3>
          <p className="text-lg mb-6">Download our Facility Management brochure for full details.</p>
          <a
            href="/brochures/Vishvam_Profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition transform hover:scale-105"
          >
            <Download className="w-6 h-6 mr-2" /> Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
}
