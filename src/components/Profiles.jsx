import React from 'react';

const Profiles = () => (
  <section className="relative bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
    {/* Content */}
    <div className="max-w-lg mx-auto bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Profiles</h2>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-2xl text-orange-400 hover:text-blue-300">LinkedIn</a>
        <a href="#" className="text-2xl text-white-400 hover:text-gray-300">GitHub</a>
        <a href="#" className="text-2xl text-green-400 hover:text-green-300">LeetCode</a>
      </div>
    </div>
  </section>
);

export default Profiles;
