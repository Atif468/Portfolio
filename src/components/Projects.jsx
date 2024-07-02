import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web application to manage tasks and deadlines effectively.',
    imageUrl: 'https://via.placeholder.com/300',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Two',
    description: 'A social media platform to connect with friends and share updates.',
    imageUrl: 'https://via.placeholder.com/300',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Three',
    description: 'A portfolio website showcasing my projects and skills.',
    imageUrl: 'https://via.placeholder.com/300',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Four',
    description: 'A task management tool to organize and prioritize your tasks.',
    imageUrl: 'https://via.placeholder.com/300',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Five',
    description: 'An e-commerce site with secure payment integration.',
    imageUrl: 'https://via.placeholder.com/300',
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Project Six',
    description: 'A blog platform with user authentication and content management.',
    imageUrl: 'https://via.placeholder.com/300',
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects = () => (
  <section className="text-white font-sans min-h-screen flex items-center justify-center">
    {/* Content */}
    <div className="max-w-7xl mx-auto bg-transparent p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative shadow text-white rounded-lg overflow-hidden group"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
            </div>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <a
                  href={project.liveLink}
                  className="text-lg text-blue-400 mr-5 hover:text-blue-300 mb-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
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

export default Projects;
