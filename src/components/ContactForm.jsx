import React, { useState } from "react";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa"; // Icons

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createMailtoLink = () => {
    const subject = "Mail from our Portfolio";
    const body = `Name: ${name}\nEmail: ${email}\n\n\n${message}`;
    return `mailto:email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section data-aos="flip-right" className="relative text-white font-sans min-h-screen flex items-center justify-center">
      <div
        data-aos="flip-right"
        className="w-full max-w-lg lg:max-w-3xl mx-auto bg-transparent sm:shadow-blue p-8 rounded-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide  transition-colors duration-300">
          Connect With Me
        </h2>
        <form className="space-y-6" data-aos="flip-right">
          {/* Name Field */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <div className="flex items-center space-x-3">
              <FaUser  />
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <div className="flex items-center space-x-3">
              <FaEnvelope   />
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* Message Field */}
          <div className="transform transition-all duration-500 hover:scale-105">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <div className="flex items-start space-x-3">
              <FaRegCommentDots   />
              <textarea
                id="message"
                name="message"
                rows="6"
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border text-white rounded-lg px-4 py-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <a
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 transform hover:scale-105"
              href={createMailtoLink()}
            >
              Send Message
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
