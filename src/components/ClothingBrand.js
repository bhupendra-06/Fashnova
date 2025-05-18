import React from "react";
import { FaStar, FaHeart } from "react-icons/fa"; // Importing icons from react-icons
import { useEffect } from "react"; // Importing useState hook from React
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Contact from "./Contact";
import TrustBadges from "./TrustBadges";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "₹499",
    category: "Tops",
    tag: "New",
    image:
      "https://img.freepik.com/premium-photo/white-t-shirt-hanging-hanger-against-brick-wall-copy-space_93675-84225.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "₹1,299",
    category: "Outerwear",
    tag: "Best Seller",
    image:
      "https://img.freepik.com/premium-photo/denim-jacket_488220-8483.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    name: "Summer Dress",
    price: "₹899",
    category: "Dresses",
    tag: "Trending",
    image:
      "https://img.freepik.com/free-photo/women-shoppers-with-purchases_23-2147688671.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
  },
  {
    id: 4,
    name: "Stylish Sunglasses",
    price: "₹699",
    category: "Accessories",
    tag: "New",
    image:
      "https://img.freepik.com/free-photo/sun-glasses-table_140725-7460.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
  },
  {
    id: 5,
    name: "Casual Sneakers",
    price: "₹1,099",
    category: "Shoes",
    tag: "Best Seller",
    image:
      "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
  },
  {
    id: 6,
    name: "Floral Scarf",
    price: "₹299",
    category: "Accessories",
    tag: "Trending",
    image:
      "https://img.freepik.com/premium-photo/flower-head_1048944-30841531.jpg?w=740",
  },
];

const ClothingBrand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This will trigger when the component is mounted

  const navigate = useNavigate(); // Hook to navigate

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 text-gray-800 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-[url('https://img.freepik.com/premium-photo/blur-clothing-store-wall-shopping-mall_293060-2610.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740')] bg-cover bg-center mt-12 sm:mt-20 h-[90vh] flex items-center justify-center px-6 text-white"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-600/50 to-transparent
         transition duration-300"
        ></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div> */}
        <div className="relative z-10 text-center  mx-auto p-6 md:p-10 rounded-xl">
          <h1 className="text-[2.5rem] sm:text-6xl md:text-8xl max-w-3xl font-bold mb-4 tracking-tighter leading-10">
            Discover Your Signature Style
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto text-gray-200">
            Curated collections designed to empower you with bold fashion
            statements.
          </p>
          <div className="mx-auto mt-16 max-w-fit flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <button
              onClick={() => navigate("/collections")}
              className="bg-pink-600 text-white px-6 md:px-8 py-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-pink-400/50 active:scale-95"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigate("/collections")}
              className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-900 hover:shadow-white/50 active:scale-95"
            >
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="pt-20 px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Picks for You
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <button className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/70 rounded-full p-2">
                  <FaHeart size={16} />
                </button>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                  <span className="text-sm text-gray-500">(100+)</span>
                </div>
                <p className="text-lg font-medium text-pink-600 mb-4">
                  {product.price}
                </p>
                <div className="flex justify-between">
                  <button className="bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition text-sm">
                    Quick View
                  </button>
                  <button className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 pb-12 px-4 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Fashnova brings you trendsetting clothing and accessories at
          affordable prices. We believe in self-expression through fashion and
          strive to provide styles that empower everyone.
        </p>
      </section>

      <TrustBadges />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default ClothingBrand;
