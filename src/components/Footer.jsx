import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Left Sections */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="/public/brochures/ABG HR Profile N.pdf" className="hover:text-gray-400">HR Consulting / IT Recruitment</a></li>
              <li><a href="/public/brochures/Supply Service Brochure.pdf" className="hover:text-gray-400">Supply Service</a></li>
              <li><a href="/public/brochures/Vishvam Profile.pdf" className="hover:text-gray-400">Facility Management</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Helpful Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="/career" className="hover:text-gray-400">Career</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#cookies" className="hover:text-gray-400">Cookies Policy</a></li>
            </ul>
          </div>
        </div>

                {/* Company Profile */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Company Profile</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong>Head Office:</strong> B114, Ground Floor, Sector 64, Noida - 201301 <br />
            <strong>Phone:</strong> 7972867943 <br />
            <strong>Email:</strong> info@vishvamindia.com <br /><br />
            <strong>Mumbai Branch:</strong> 301, Durgesh Park, Kalher, Bhiwandi - 421302 <br />
            <strong>Phone:</strong> 09718354082 <br />
            <strong>Email:</strong> info@vishvamindia.com
          </p>
        </div>

        {/* Right Side Logo + Social Media */}
        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
          {/* Logo */}
          <img src="/src/assets/logo.png" alt="Company Logo" className="w-38 mb-4" />

          {/* Social Icons */}
          <div className="flex space-x-10">
            <a href="https://www.facebook.com/abggroup.in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={22} />
            </a>
            <a href="https://instagram.com/abggroup2020?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.linkedin.com/company/abg-group2711/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedinIn size={22} />
            </a>
            <a href="https://wa.me/message/5SVJCZLDCEE7H1" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
