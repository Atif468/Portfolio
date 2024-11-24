import React from "react";

const skills = [
  { name: "JavaScript", icon: "fab fa-js-square", color: "#f0db4f" },
  { name: "React", icon: "fab fa-react", color: "#61dbfb" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#68a063" },
  { name: "Express", icon: "fas fa-server", color: "#4fd1c5" },
  { name: "MongoDB", icon: "fas fa-database", color: "#4db33d" },
  { name: "HTML", icon: "fab fa-html5", color: "#e34c26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#264de4" },
  { name: "Git", icon: "fab fa-git-alt", color: "#f34f29" },
  { name: "TypeScript", icon: "fab fa-js-square", color: "#007acc" },
  { name: "SQL", icon: "fas fa-database", color: "#cc6699" },
  { name: "Oops", icon: "fas fa-bug", color: "#8ed6fb" },
  { name: "TailwindCSS", icon: "fab fa-css3-alt", color: "#38bdf8" },
  { name: "Data Modeling", icon: "fas fa-project-diagram", color: "#e535ab" },
  { name: "RestAPI", icon: "fas fa-network-wired", color: "#0ea5e9" },
  { name: "Router", icon: "fas fa-project-diagram", color: "#326ce5" },
  { name: "Hooks", icon: "fab fa-react", color: "#326ce5" },
  { name: "Mongoose", icon: "fas fa-database", color: "#326ce5" },
  { name: "Axios", icon: "fas fa-network-wired", color: "#38bdf8" },
];

function Skills() {
  const rows = [skills.slice(0, 9), skills.slice(9, 14), skills.slice(14, 18)];

  return (
    <section className="bg-black text-gray-300 font-sans min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl bg-gradient-to-br from-blue-400 via-black to-blue-500 rounded-lg p-8 shadow-2xl mx-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent text-white">
          My Skills
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay={`${rowIndex * 100}`}
            >
              {row.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-24 h-24  rounded-lg shadow-2xl transform hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  <i
                    className={`${skill.icon} text-2xl md:text-3xl mb-2`}
                    style={{ color: skill.color }}
                  ></i>
                  <span className="text-xs md:text-sm font-semibold text-gray-300 hover:text-blue-400 transition duration-300">
                    {skill.name}
                  </span>
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
