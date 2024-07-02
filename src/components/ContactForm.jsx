import React from 'react';

const ContactForm = () => (
  <section className="relative bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
    {/* Content */}
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Form</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="bg-gray-900 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div>
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="bg-gray-900 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div>
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="bg-gray-900 rounded px-3 py-2 w-full resize-none focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">Send Message</button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactForm;
