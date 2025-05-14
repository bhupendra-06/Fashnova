import React from "react";
import { Link } from "react-scroll"; // Link component from react-scroll
import Logo from "../assets/logo.png"; // Importing logo image
import { useState } from "react"; // Importing useState hook from React

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
          <img alt="logo" src={Logo} className="h-14 sm:h-20" />
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none absolute right-4 top-4"
          >
            <svg
              className="w-6 h-6"
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
        <nav
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "block w-full absolute bg-white *:border top-14 left-0"
              : "hidden"
          } sm:flex text-center text-sm font-medium cursor-pointer`}
        >
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="p-4 hover:text-pink-600 hover:bg-pink-100 block sm:inline duration-100"
          >
            Home
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="p-4 hover:text-pink-600 hover:bg-pink-100 block sm:inline duration-100"
          >
            Products
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="p-4 hover:text-pink-600 hover:bg-pink-100 block sm:inline duration-100"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="p-4 hover:text-pink-600 hover:bg-pink-100 block sm:inline duration-100"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
