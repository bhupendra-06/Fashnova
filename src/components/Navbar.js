import React, { useState } from "react";
import { Link } from "react-scroll"; // Link component from react-scroll
import Logo from "../assets/logo.png"; // Importing logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-50 select-none">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl sm:text-3xl font-mono font-bold tracking-tight text-pink-600 cursor-pointer"
        >
          <img alt="logo" src={Logo} className="h-16 sm:h-20" />
        </Link>

        {/* Mobile menu toggle button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none hover:scale-105 transition-transform absolute right-4 top-4"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex items-center text-base font-medium">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="p-4 hover:text-pink-600 hover:bg-pink-100 "
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="p-4 hover:text-pink-600 hover:bg-pink-100"
          >
            Products
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="p-4 hover:text-pink-600 hover:bg-pink-100"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="ml-4 bg-pink-600 text-white px-6 py-4 rounded-full shadow-sm hover:bg-pink-700 transition-all duration-300 hover:scale-105 hover:drop-shadow-sm active:scale-95"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div className="sm:hidden w-full">
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col bg-white border-t *:border border-gray-200 text-sm font-medium text-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="p-4 hover:text-pink-600 hover:bg-pink-100"
            >
              Home
            </Link>
            <Link
              to="products"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="p-4 hover:text-pink-600 hover:bg-pink-100"
            >
              Products
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="p-4 hover:text-pink-600 hover:bg-pink-100"
            >
              About
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="p-4 hover:text-pink-600 hover:bg-pink-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
