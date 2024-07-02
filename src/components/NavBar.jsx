import React from 'react';

const NavBar = () => (
  <nav className="backdrop-blur-sm rounded-full w-[60%] m-auto shadow-sm shadow-white p-3 mb-4 flex justify-center sticky top-5 z-50" >
    <ul className="flex space-x-5">
      <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">Portfolio</a></li>
      <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
    </ul>
  </nav>
);

export default NavBar;
