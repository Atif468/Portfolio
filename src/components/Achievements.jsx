import React from "react";

const achievements = [
  {
    title: "College Hackathon",
    description: "Second place in the College hackathon competition.",
    imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
  },
  {
    title: "Web Development Certification",
    description: "Certified in Web Development (Front-end).",
    imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
  },
];

const Achievements = () => (
  <section className="relative text-white font-sans overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 overflow-hidden flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 transform transition duration-300 hover:scale-110">
        Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative shadow-xl text-white rounded-lg overflow-hidden group bg-gray-800 p-6 sm:p-8 transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative mb-4 mx-auto">
              <img
                src={achievement.imageUrl}
                alt={achievement.title}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 shadow-xl transition-all transform group-hover:scale-110 group-hover:shadow-2xl"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-2xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              {achievement.title}
            </h3>

            {/* Description */}
            <p className="text-center text-sm sm:text-base mb-4">{achievement.description}</p>

            {/* Hover Overlay Section */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-lg text-center p-4">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
