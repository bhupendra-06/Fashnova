import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Shah",
      quote: "Absolutely loved the product and fit. Will definitely order again!",
    },
    {
      name: "Ishita Mehra",
      quote: "The quality exceeded my expectations. Fast delivery too!",
    },
    {
      name: "Dev Patel",
      quote: "Great designs. Minimal but stylish — just what I wanted.",
    },
  ];

  return (
    <div className="bg-white pt-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-black mb-8">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-200 p-6 rounded-xl shadow-sm">
              <p className="text-black mb-4 italic">“{t.quote}”</p>
              <p className="text-pink-600 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;