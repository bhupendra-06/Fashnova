import React from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    title: "Casual T-Shirt",
    price: "₹499",
    image:
      "https://img.freepik.com/free-photo/young-handsome-man-posing-white-wall_176420-30137.jpg",
  },
  {
    id: 2,
    title: "Floral Dress",
    price: "₹999",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-posing-white-wall_176420-30136.jpg",
  },
  {
    id: 3,
    title: "Unisex Hoodie",
    price: "₹1299",
    image:
      "https://img.freepik.com/free-photo/young-man-wearing-hoodie-posing_176420-30135.jpg",
  },
  {
    id: 4,
    title: "Formal Shirt",
    price: "₹799",
    image:
      "https://img.freepik.com/free-photo/young-man-wearing-formal-shirt-posing_176420-30134.jpg",
  },
  {
    id: 5,
    title: "Jegging Pants",
    price: "₹699",
    image:
    "https://img.freepik.com/free-photo/young-handsome-man-posing-white-wall_176420-30137.jpg",
  },
  {
    id: 6,
    title: "Summer Shorts",
    price: "₹599",
    image:
    "https://img.freepik.com/free-photo/young-woman-wearing-jeggings-posing_176420-30133.jpg",
  },
];

const ProductsPage = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This will trigger when the component is mounted
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto">
        <h1 className="mt-5 text-3xl font-extrabold text-center text-gray-900 mb-6">
          ✨ Explore Our Signature Collection
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Men", "Women", "Unisex"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-pink-100 hover:text-pink-600 transition text-sm font-medium"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="sm:w-full aspect-[3/4] sm:aspect-auto object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-md font-semibold text-gray-900 mb-1">
                  {product.title}
                </h2>
                <p className="text-lg font-bold text-gray-800 mb-3">
                  {product.price}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-pink-600 text-white py-2 px-2 rounded-lg hover:bg-pink-700 transition">
                    Add to Cart
                  </button>
                  <button className="hidden md:block md:flex-1 bg-gray-200 text-gray-700 py-2 px-2 rounded-lg hover:bg-gray-300 transition text-sm">
                    Quick View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Contact & Footer */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
