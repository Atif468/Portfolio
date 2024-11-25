import React, { useState } from "react";
import { FaHome, FaTools, FaProjectDiagram, FaUserAlt, FaTrophy, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const NavBar = ({
  scrollToSection,
  introRef,
  skillsRef,
  projectsRef,
  contactRef,
  achievementsRef,
  educationRef,
  profilesRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  

  
  const menuItems = [
    { label: "Home", ref: introRef, href: "#introduction", icon: <FaHome /> },
    { label: "Skills", ref: skillsRef, href: "#skills", icon: <FaTools /> },
    { label: "Projects", ref: projectsRef, href: "#projects", icon: <FaProjectDiagram /> },
    { label: "Profiles", ref: profilesRef, href: "#profiles", icon: <FaUserAlt /> },
    { label: "Achievements", ref: achievementsRef, href: "#achievements", icon: <FaTrophy /> },
    { label: "Education", ref: educationRef, href: "#education", icon: <FaGraduationCap /> },
    { label: "Contact", ref: contactRef, href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="relative">
  {/* Navbar */}
  <nav className="fixed top-0 w-full backdrop-blur-md shadow-lg shadow-black p-4 flex justify-between items-center z-50 bg-transparent">
    {/* Logo */}
    <div className="text-blue-400 text-3xl font-bold font-qwitcher hover:scale-125 duration-300">
      Atif
    </div>

    <button
      onClick={toggleMenu}
      className="md:hidden text-blue-400 text-3xl focus:outline-none"
      aria-label="Toggle navigation menu"
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>

    <ul className="hidden md:flex space-x-8 text-lg text-gray-300">
      {menuItems.map((item, index) => (
        <li key={index} className="hover:scale-110 transition duration-300">
          <a
            href={item.href}
            onClick={() => scrollToSection(item.ref)}
            className="relative flex items-center space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-64 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0 backdrop-blur-md bg-black/60" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className={`absolute top-4 ${isOpen ? "right-4" : "right-0"} text-blue-400 text-2xl focus:outline-none`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "×" : "☰"}
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col p-6 space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">👻</h2>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => {
                    scrollToSection(item.ref); // Scroll and close sidebar
                    setIsOpen(false); // Close the sidebar
                  }}
                  className="p-4 rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition duration-300 flex items-center space-x-3"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay when Sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
