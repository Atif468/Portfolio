import React from 'react';



// Example icons - using FontAwesome CDN
const skills = [
  { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f0db4f' },
  { name: 'React', icon: 'fab fa-react', color: '#61dbfb' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#68a063' },
  { name: 'Express', icon: 'fas fa-server', color: '#000000' },
  { name: 'MongoDB', icon: 'fas fa-database', color: '#4db33d' },
  { name: 'HTML', icon: 'fab fa-html5', color: '#e34c26' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#264de4' },
  { name: 'Sass', icon: 'fab fa-sass', color: '#cc6699' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#f34f29' },
  { name: 'Webpack', icon: 'fab fa-js-square', color: '#8ed6fb' },
  { name: 'TypeScript', icon: 'fab fa-js-square', color: '#007acc' },
  { name: 'Redux', icon: 'fab fa-js-square', color: '#764abc' },
  { name: 'GraphQL', icon: 'fab fa-js-square', color: '#e535ab' },
  { name: 'Docker', icon: 'fab fa-js-square', color: '#2496ed' },
  { name: 'Kubernetes', icon: 'fab fa-js-square', color: '#326ce5' }
];

function  Skills() {

  const rows = [
    skills.slice(0, 6),
    skills.slice(6, 11),
    skills.slice(11, 15)
  ];

  return (
    <section className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="w-full max-w-5xl bg-gray-800 rounded-lg p-6 shadow-lg mx-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-col items-center" data-aos="fade'top-right">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-4 space-x-4" data-aos="fade-up-right">
              {row.map((skill, index) => (
                <div key={index} className="flex items-center bg-gray-700 rounded-full px-4 py-2">
                  <i className={`${skill.icon} mr-4`} style={{ color: skill.color }}></i>
                  <span className="text-lg">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
