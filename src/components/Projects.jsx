import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "PodCast.in",
    description:
      "A podcast platform where users can sign up, listen, like/dislike episodes, create playlists, search content, and upload/manage their own podcasts via a personalized dashboard.",
    imageUrl: "/assets/podcast2.jpeg",
    liveLink: "https://atifansari.vercel.app/",
    githubLink: "https://github.com/Atif468/Portfolio",
  },
  {
    title: "Qiuz Luxe",
    description:
      "Pick a topic, answer questions, and conquer your knowledge with our quiz app!",
    imageUrl: "/assets/Quiz.png",
    liveLink: "https://quiz-luxe.vercel.app/",
    githubLink: "https://github.com/Atif468/Quiz-Luxe",
  },
  {
    title: "Full Stack Auth",
    description:
      "Authentication secures user access by building login, registration, and authorization across both frontend and backend.",
    imageUrl: "/assets/auth.png",
    liveLink: "",
    githubLink: "https://github.com/Atif468/Full-Stack-Auth",
  },
  {
    title: "Connect with Backend",
    description:
      "This highlights the efficient flow of data between frontend and backend.",
    imageUrl: "/assets/connect.png",
    liveLink: "",
    githubLink: "https://github.com/Atif468/connect-with-backend",
  },
  {
    title: "Amazon UI Clone",
    description:
      "Explore a static replica of Amazon's interface built with HTML and Tailwind.",
    imageUrl: "/assets/clone.jpeg",
    liveLink: "https://atif468.github.io/Amazon/src/index.html",
    githubLink: "https://github.com/Atif468/Amazon",
  },
  {
    title: "Portfolio",
    description:
      "Created a responsive and visually appealing personal portfolio website. This project showcases my skills, projects, and achievements.",
    imageUrl: "/assets/portfolio.jpeg",
    liveLink: "https://atifansari.vercel.app/",
    githubLink: "https://github.com/Atif468/Portfolio",
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <section className="bg-black text-white font-sans min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl p-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent text-white">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-transparent border hover:shadow-blue rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                 <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-xl group-hover:blur-sm group-hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm italic group-hover:text-gray-200 transition duration-300">
                    {project.description}
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-x-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-semibold bg-blue-500 text-black rounded-lg shadow-md hover:bg-cyan-500 hover:scale-105 transition-transform duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-semibold bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300"
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
      <div className="mt-8 text-center text-4xl text-blue-400">
        <a
          target="_blank"
          href="https://github.com/Atif468"
          className="relative space-x-2 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-500 hover:after:w-full"
        >
          see more projects→
        </a>
      </div>
    </>
  );
}

export default Projects;
