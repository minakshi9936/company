import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/src/assets/logo.png" alt="Logo" className="w-20 h-12" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-white shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/career" onClick={() => setIsOpen(false)}>Career</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
