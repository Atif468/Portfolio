import React from "react";

const achievements = [
  {
    title: "Hackathon Winner",
    description: "First place in the regional hackathon competition.",
    imageUrl: "#", // Replace with actual image URL
  },
  {
    title: "Certifications",
    description: "Certified in Web Development and Cloud Computing.",
    imageUrl: "#", // Replace with actual image URL
  },
];

const Achievements = () => (
  <section className="relative bg-gray-900 text-white font-sans overflow-hidden min-h-screen flex items-center justify-center">
    <div className="max-w-7xl mx-auto p-4 sm:p-6 overflow-hidden flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full" data-aos="fade-right">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative shadow-lg text-white rounded-lg overflow-hidden group bg-gray-800 p-4 sm:p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={achievement.imageUrl}
              alt={achievement.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover mb-4 mx-auto rounded-full border-2 border-white shadow-md transition-transform transform group-hover:scale-110"
            />
            <h3 className="text-lg sm:text-2xl font-bold mb-2 text-center">
              {achievement.title}
            </h3>
            <p className="text-center mb-4 text-sm sm:text-base">
              {achievement.description}
            </p>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm sm:text-lg text-center p-4">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
