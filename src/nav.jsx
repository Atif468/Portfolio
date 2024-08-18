import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 z-10 sticky">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-4xl text-blue-500 font-signature">
          Signify
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
