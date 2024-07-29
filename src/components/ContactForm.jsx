import React, { useState } from "react";

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
    <section className="relative  text-white font-sans min-h-screen flex items-center justify-center">
      <div
        className="w-full max-w-lg lg:max-w-3xl mx-auto bg-gray-800 overflow-hidden rounded-lg p-6 shadow-lg"
        data-aos="flip-right"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-900 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-900 rounded px-3 py-2 w-full resize-none focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <div className="text-center">
            <a
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
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
