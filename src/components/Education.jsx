import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const educationData = [
  {
    id: 1,
    title: '10th Grade',
    board: 'UP Board',
    year: '2020',
    percentage: '75.6%',
    description: 'Achieved good results in 10th grade.',
  },
  {
    id: 2,
    title: '12th Grade',
    board: 'UP Board',
    year: '2022',
    percentage: '65.6%',
    description: 'Completed Intermediate school education with PCM.',
  },
  {
    id: 3,
    title: 'BCA Degree',
    college: 'PSIT',
    university: 'CSJM',
    year: '2025',
    cgpa: '8.14',
    description: 'Bachelor of Computer Applications degree.',
  },
];

const Education = () => (
  <section className=" text-white font-sans min-h-screen flex items-center justify-center">
    <div className="max-w-4xl mx-auto p-6 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-6">
        {educationData.map((item) => (
          <div key={item.id} className="flex items-center mb-8" data-aos="fade-left">
            <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center bg-gray-800 rounded-full">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-sm sm:text-lg" />
            </div>
            <div className="ml-4">
              <p className="text-lg sm:text-xl font-bold">{item.title}</p>
              {item.board && <p className="text-gray-300 text-sm sm:text-base">Board: {item.board}</p>}
              {item.college && <p className="text-gray-300 text-sm sm:text-base">College: {item.college}</p>}
              {item.university && <p className="text-gray-300 text-sm sm:text-base">University: {item.university}</p>}
              <p className="text-gray-300 text-sm sm:text-base">Year: {item.year}</p>
              {item.percentage && <p className="text-gray-300 text-sm sm:text-base">Percentage: {item.percentage}</p>}
              {item.cgpa && <p className="text-gray-300 text-sm sm:text-base">CGPA: {item.cgpa}/10</p>}
              <p className="text-gray-400 mt-2 text-xs sm:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
