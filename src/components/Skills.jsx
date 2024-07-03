import React from "react";

const skills = [
  { name: "JavaScript", icon: "fab fa-js-square", color: "#f0db4f" },
  { name: "React", icon: "fab fa-react", color: "#61dbfb" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#68a063" },
  { name: "Express", icon: "fas fa-server", color: "#000000" },
  { name: "MongoDB", icon: "fas fa-database", color: "#4db33d" },
  { name: "HTML", icon: "fab fa-html5", color: "#e34c26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#264de4" },
  { name: "Git", icon: "fab fa-git-alt", color: "#f34f29" },
  { name: "TypeScript", icon: "fab fa-js-square", color: "#007acc" },
  { name: "SQL", icon: "fas fa-database", color: "#cc6699" },
  { name: "Oops", icon: "fas fa-bug", color: "#8ed6fb" },
  { name: "TailwindCSS", icon: "fab fa-css3-alt", color: "#764abc" },
  { name: "Data Modeling", icon: "fas fa-project-diagram", color: "#e535ab" },
  { name: "RestAPI", icon: "fas fa-network-wired", color: "#2496ed" },
  { name: "Router", icon: "fas fa-project-diagram", color: "#326ce5" },
  { name: "Hooks", icon: "fab fa-react", color: "#326ce5" },
  { name: "Mongoose", icon: "fas fa-database", color: "#326ce5" },
  { name: "Axios", icon: "fas fa-network-wired", color: "#326ce5" },
];

function Skills() {
  const rows = [skills.slice(0, 9), skills.slice(9, 14), skills.slice(14, 18)];

  return (
    <section className="bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl bg-gray-800 overflow-hidden rounded-lg p-6 shadow-lg mx-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-col items-center" data-aos="fade-top-right">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center mb-4 space-x-4"
              data-aos="fade-up-right"
            >
              {row.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-700 rounded-full px-4 py-2 mb-4 md:mb-0"
                >
                  <i
                    className={`${skill.icon} mr-2 md:mr-4 text-lg md:text-xl`}
                    style={{ color: skill.color }}
                  ></i>
                  <span className="text-sm md:text-lg">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
