import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa"; // Importing icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="mb-4">&copy; 2025 Fashnova. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.facebook.com"
          className="text-white hover:text-pink-600 transition"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          className="text-white hover:text-pink-600 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          className="text-white hover:text-pink-600 transition"
        >
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-sm">
        Follow us for updates on new arrivals and exclusive deals.
      </p>
    </div>
  </footer>
  )
}

export default Footer