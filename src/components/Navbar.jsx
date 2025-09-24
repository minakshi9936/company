import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] w-full bg-black shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* ✅ Logo wrapped in Link for redirect + responsive */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo2.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 w-30 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-yellow-400 font-semibold text-lg">
          <Link to="/" className="hover:text-white transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/career" className="hover:text-white transition duration-300">
            Career
          </Link>
          <Link to="/contact" className="hover:text-white transition duration-300">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 hover:text-white transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-6 bg-black shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/career"
            onClick={() => setIsOpen(false)}
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Career
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-yellow-400 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
