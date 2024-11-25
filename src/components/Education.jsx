import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Timeline } from "./ui/timeline";


const educationData = [
  {
    id: 1,
    title: "10th Grade",
    board: "UP Board",
    year: "2020",
    percentage: "75.6%",
    description: "Achieved good results in 10th grade.",
  },
  {
    id: 2,
    title: "12th Grade",
    board: "UP Board",
    year: "2022",
    percentage: "69.6%",
    description: "Completed Intermediate school education with PCM.",
  },
  {
    id: 3,
    title: "BCA Degree",
    college: "PSIT",
    university: "CSJM",
    year: "2025",
    cgpa: "8.17",
    description: "Bachelor of Computer Applications.",
  },
];

const Education = () => (
  // <section className="relative text-white font-sans min-h-screen flex items-center justify-center py-16">
  //   <div className="max-w-5xl mx-auto p-6">
  //     <h2 className="text-4xl font-semibold mb-12 text-center tracking-wide text-white">
  //       Education
  //     </h2>
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  //       {educationData.map((item) => (
  //         <div
  //           key={item.id}
  //           className="relative flex flex-col sm:flex-row items-center border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
  //           data-aos="fade-left"
  //         >
  //            <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
  //           </div>

  //            <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center bg-blue-500 text-white rounded-full">
  //             <FontAwesomeIcon icon={faGraduationCap} className="text-xl sm:text-2xl" />
  //           </div>
  //            <div className="ml-4 mt-4 sm:mt-0">
  //             <p className="text-xl font-semibold text-blue-300">{item.title}</p>
  //             {item.board && (
  //               <p className="text-gray-300 text-sm sm:text-base">Board: {item.board}</p>
  //             )}
  //             {item.college && (
  //               <p className="text-gray-300 text-sm sm:text-base">College: {item.college}</p>
  //             )}
  //             {item.university && (
  //               <p className="text-gray-300 text-sm sm:text-base">University: {item.university}</p>
  //             )}
  //             <p className="text-gray-300 text-sm sm:text-base">Year: {item.year}</p>
  //             {item.percentage && (
  //               <p className="text-gray-300 text-sm sm:text-base">Percentage: {item.percentage}</p>
  //             )}
  //             {item.cgpa && (
  //               <p className="text-gray-300 text-sm sm:text-base">CGPA: {item.cgpa}/10</p>
  //             )}
  //             <p className="text-gray-400 mt-2 text-xs sm:text-sm">{item.description}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </section>
  <>
    <Timeline data={educationData} />
  </>
);

export default Education;
