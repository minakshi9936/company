import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-yellow-500/30 pb-10">
        {/* Services */}
        <div>
          <h3 className="font-bold text-xl mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                to="./HR"
                className="hover:text-yellow-400 transition duration-300"
              >
                HR Consulting / IT Recruitment
              </Link>
            </li>
            <li>
              <Link
                to="./Supply"
                className="hover:text-yellow-400 transition duration-300"
              >
                Supply Service
              </Link>
            </li>
            <li>
              <a
                href="https://www.vishvamindia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facility Management
              </a>
            </li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="font-bold text-xl mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Helpful
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                to="./About"
                className="hover:text-yellow-400 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="./Contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="./Career"
                className="hover:text-yellow-400 transition duration-300"
              >
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-xl mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Legal
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#privacy"
                className="hover:text-yellow-400 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-yellow-400 transition duration-300"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#cookies"
                className="hover:text-yellow-400 transition duration-300"
              >
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Company Profile */}
        <div>
          <h3 className="font-bold text-xl mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Company Profile
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong>Head Office:</strong> B114, Ground Floor, Sector 64, Noida -
            201301 <br />
            <strong>Phone:</strong> 7972867943 <br />
            <strong>Email:</strong> neha@abggroup.in <br />
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <img
          src="/src/assets/logo2.png"
          alt="Company Logo"
          className="w-32 mb-4 md:mb-0"
        />

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/abggroup.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://instagram.com/abggroup2020?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/company/abg-group2711/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://wa.me/7972867943"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition duration-300"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm border-t border-yellow-500/20 pt-4">
        © {new Date().getFullYear()} ABG Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
