import React from "react";
import { FaTrophy, FaTasks, FaMedal, FaStar } from 'react-icons/fa';


const Achievements = () => (
  <section className="relative  text-white font-sans overflow-hidden min-h-screen flex items-center justify-center">
    {/* <div className="max-w-7xl mx-auto p-4 sm:p-6 overflow-hidden flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center hover:scale-150 duration-300">Achievements</h2>
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
    </div> */}
    <div className="bg-gradient-to-r from-black to-blue-600 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-center">
        Achievements
      </h2>

      <div className="space-y-6">
        {/* Achievement 1 */}
        <div className="flex items-start space-x-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-lg p-4 bg-black bg-opacity-70">
          <div className="bg-transparent  shadow-inner shadow-white p-3 rounded-full">
            <FaTrophy className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-300">
              Secured Second Rank in Hackathon
            </h3>
            <p className="text-gray-300">
              Achieved second rank in the hackathon organized by PSIT College of
              Higher Education.
            </p>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="flex items-start space-x-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-lg p-4 bg-black bg-opacity-70">
          <div className="bg-transparent  shadow-inner shadow-white p-3 rounded-full">
            <FaTasks className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-300">
              Solved 600+ DSA Problems
            </h3>
            <p className="text-gray-300">
              Successfully solved over 600 Data Structure & Algorithm problems,
              showcasing strong problem-solving skills.
            </p>
          </div>
        </div>

        {/* Achievement 3 */}
        <div className="flex items-start space-x-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-lg p-4 bg-black bg-opacity-70">
          <div className="bg-transparent  shadow-inner shadow-white p-3 rounded-full">
            <FaMedal className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-300">
              Achieved 918 Rank in ICPC
            </h3>
            <p className="text-gray-300">
              Secured 918th rank in the International Collegiate Programming
              Contest (ICPC), a testament to my competitive programming skills.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out rounded-lg p-4 bg-black bg-opacity-70">
          <div className="bg-transparent  shadow-inner shadow-white p-3 rounded-full">
            <FaStar className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-blue-300">
              Achieved 5 Stars in Problem Solving on HackerRank
            </h3>
            <p className="text-gray-300">
              Achieved a 5-star rating in Problem Solving on HackerRank,
              reflecting my proficiency in algorithms and coding challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
