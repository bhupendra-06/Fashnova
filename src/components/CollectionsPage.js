import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CollectionsPage = () => {
  const featuredCollections = [
    {
      title: "Festive Vibes",
      image:
        "https://img.freepik.com/premium-photo/happy-indian-family-festival-shopping-concept-holding-paper-bags-showing-debit-credit-card_466689-9682.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
      slug: "festive-vibes",
    },
    {
      title: "Office Classics",
      image:
        "https://img.freepik.com/free-photo/indian-businesswoman-formal-attire_23-2148422454.jpg",
      slug: "office-classics",
    },
    {
      title: "Weekend Casuals",
      image:
        "https://img.freepik.com/free-photo/young-men-laying-hands-shoulders-woman-smiling_23-2148134014.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
      slug: "weekend-casuals",
    },
  ];

  const moreCollections = [
    {
      title: "Winter",
      image:
        "https://img.freepik.com/premium-photo/girls-wearing-knit-hat-scarf-sweater-gloves-posing-against-white-background_979672-2967.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
      slug: "winter",
    },
    {
      title: "Summer",
      image:
        "https://img.freepik.com/free-photo/beach-summer-concept-with-women_23-2147813495.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
      slug: "summer",
    },
    {
      title: "Dating Specials",
      image:
        "https://img.freepik.com/free-photo/indian-woman-denim-style_23-2148422458.jpg",
      slug: "denim",
    },
    {
      title: "Denim",
      image:
        "https://img.freepik.com/free-photo/indian-woman-partywear-dress_23-2148422460.jpg",

      slug: "denim",
    },
    {
      title: "Ethnic",
      image:
        "https://img.freepik.com/premium-photo/close-up-multi-colored-textiles-against-purple-background_1048944-20009196.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
      slug: "ethnic",
    },
    {
      title: "Partywear",
      image:
        "https://img.freepik.com/premium-photo/two-indian-men-wears-ethnic-traditional-cloths-male-fashion-models-with-sherwani-kurta-pyjama-sitting-posing-wing-chair-sofa-against-brown-grunge-background-selective-focus_466689-45463.jpg?ga=GA1.1.329723159.1744260162&semt=ais_hybrid&w=740",
      slug: "partywear",
    },
  ];

  const navigate = useNavigate();
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This will trigger when the component is mounted

  return (
    
    <div className="max-w-7xl mx-auto">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="hidden sm:flex text-white px-4 py-2 rounded-md mt-4 ml-4 bg-pink-500 font-semibold hover:bg-pink-600 transition duration-300  items-center absolute top-0 left-0"
      >
        <FaArrowLeft />
        <span className="ml-2">Go Back</span>
      </button>
      <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold mb-10 text-center text-gray-900 tracking-wide">
        Featured Collections
      </h1>

      <div className="p-2 grid grid-cols-12 gap-6 mb-16">
        {featuredCollections.map((item, index) => (
          <Link
            key={item.slug}
            to={`/products`}
            className={`group block overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 ${
              index === 0
                ? "col-span-12 md:col-span-6 row-span-2"
                : "col-span-6 md:col-span-3"
            }`}
          >
            <div className="relative h-full">
              <img
                src={item.image}
                alt={item.title}
                loading="eager"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl sm:text-4xl font-bold">{item.title}</h2>
                  <p className="text-sm mt-1 text-gray-200">
                    Explore our exclusive {item.title} collection.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 tracking-wide">
        More Collections
      </h2>

      <div className="mb-5 p-2 grid grid-cols-12 gap-4">
        {moreCollections.map((item, index) => (
          <Link
            key={item.slug}
            to={`/products`}
            className={`group block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 ${
              index % 3 === 0
                ? "col-span-12 md:col-span-8 row-span-2"
                : "col-span-6 md:col-span-4"
            }`}
          >
            <div className="relative h-full">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/75 opacity-100 transition duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-xl sm:text-3xl font-semibold">{item.title}</h2>
                  <p className="text-sm mt-1 text-gray-200">
                    Discover the best of {item.title} styles.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default CollectionsPage;
