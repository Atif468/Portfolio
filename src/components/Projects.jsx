import React from "react";

const projects = [
  {
    title: "Qiuz Luxe",
    description:
      "Pick a topic, answer questions, and conquer your knowledge with our quiz app!",
    imageUrl: "../../assets/Quiz.png",
    liveLink: "https://quiz-luxe.vercel.app/",
    githubLink: "https://github.com/Atif468/Quiz-Luxe",
  },
  {
    title: "Full Stack Auth",
    description:
      "Authentication secures user access by building login, registration, and authorization across both frontend and backend.",
    imageUrl: "../../assets/auth.png",
    liveLink: "",
    githubLink: "https://github.com/Atif468/Full-Stack-Auth",
  },
  {
    title: "Connect with Backend",
    description:
      "This highlights the efficient flow of data between frontend and backend.",
    imageUrl: "../../assets/connect.png",
    liveLink: "",
    githubLink: "https://github.com/Atif468/connect-with-backend",
  },
  {
    title: "Amazon UI Clone",
    description:
      "Explore a static replica of Amazon's interface built with HTML and Tailwind.",
    imageUrl: "../../assets/clone.jpeg",
    liveLink: "https://atif468.github.io/Amazon/src/index.html",
    githubLink: "https://github.com/Atif468/Amazon",
  },
  {
    title: "Portfolio",
    description: "Created a responsive and visually appealing personal portfolio website. This project showcases my skills, projects, and achievements.",
    imageUrl: "../../assets/portfolio.jpeg",
    liveLink: "https://atifansari.vercel.app/",
    githubLink: "https://github.com/Atif468/Portfolio",
  },
];

function Projects() {
  return (
    <section className="text-white font-sans min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="max-w-7xl mx-auto overflow-hidden bg-transparent p-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative shadow text-white rounded-lg overflow-hidden group"
              data-aos="fade-up"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      className="text-lg text-blue-400 mr-5 hover:text-blue-300 mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  ) : (
                    <a></a>
                  )}
                  <a
                    href={project.githubLink}
                    className="text-lg text-green-400 hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
