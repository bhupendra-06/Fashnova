import React from 'react'

const Contact = () => {
  return (
    <section
    id="contact"
    className="bg-gray-900 text-white mt-4 py-16 md:pt-20 px-6 text-center"
  >
    <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
    <p className="max-w-xl mx-auto mb-8">
      Have questions, feedback, or just want to say hi? Reach out and we’ll
      get back to you within 24 hours.
    </p>
    <form className="max-w-xl mx-auto grid gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded bg-gray-800 placeholder-gray-400 text-white"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 rounded bg-gray-800 placeholder-gray-400 text-white"
      />
      <textarea
        rows="4"
        placeholder="Your Message"
        className="p-3 rounded bg-gray-800 placeholder-gray-400 text-white"
      ></textarea>
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 transition py-3 px-6 rounded text-white font-semibold"
      >
        Send Message
      </button>
    </form>
  </section>
  )
}

export default Contact