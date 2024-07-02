import React from 'react';

const achievements = [
  {
    title: 'Hackathon Winner',
    description: 'First place in the regional hackathon competition.',
    imageUrl: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    title: 'Certifications',
    description: 'Certified in Web Development and Cloud Computing.',
    imageUrl: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    title: 'Published Research',
    description: 'Published research paper on AI and Machine Learning.',
    imageUrl: 'https://via.placeholder.com/100', // Replace with actual image URL
  },

];

const Achievements = () => (
  <section className="relative bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative shadow-lg text-white rounded-lg overflow-hidden group bg-gray-800 p-6"
          >
            <img
              src={achievement.imageUrl}
              alt={achievement.title}
              className="w-16 h-16 object-cover mb-4 mx-auto"
            />
            <h3 className="text-2xl font-bold mb-2 text-center">{achievement.title}</h3>
            <p className="text-center">{achievement.description}</p>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-center">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
