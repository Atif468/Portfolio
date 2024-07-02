import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// Placeholder data for educational milestones
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
    description: 'Completed high school education with excellent scores.',
  },
  {
    id: 3,
    title: 'BCA Degree',
    college: 'PSIT',
    university: 'CSJM',
    year: '2025',
    cgpa: '8.14',
    description: 'Graduated with a Bachelor of Computer Applications degree.',
  },
];

const Education = () => (
  <section className="bg-gray-900 text-white font-sans  min-h-screen flex items-center justify-center">
    <div className="mx-auto p-6 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

      <div className="grid grid-cols-1 m-auto w-screen md:grid-cols-2 pl-36 p-6">
        {/* Map over education data and render each item */}
        {educationData.map((item) => (
          <div key={item.id} className="flex items-center mb-8" data-aos="fade-left">
            {/* Icon */}
            <div className="h-20 w-20 flex items-center justify-center bg-gray-800 rounded-full">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-lg" />
            </div>

            {/* Details */}
            <div className="ml-4">
              <p className="text-xl font-bold">{item.title}</p>
              {item.board && <p className="text-gray-300">Board: {item.board}</p>}
              {item.college && <p className="text-gray-300">College: {item.college}</p>}
              {item.university && <p className="text-gray-300">University: {item.university}</p>}
              <p className="text-gray-300">Year: {item.year}</p>
              {item.percentage && <p className="text-gray-300">Percentage: {item.percentage}</p>}
              {item.cgpa && <p className="text-gray-300">CGPA: {item.cgpa}/4.00</p>}
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <p></p>
  </section>
);

export default Education;