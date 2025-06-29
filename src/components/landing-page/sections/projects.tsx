const Projects = () => {
  const projects = [
    {
      title: "Micro Frontend",
      description: "Adopted micro front-end architecture to modularize large applications and streamline team workflows.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Redux"],
      role: "Frontend Developer"
    },
    {
      title: "Logistics Project",
      description: "Developed a responsive web application using React and Next.js for efficient transportation management.",
      technologies: ["React", "Next.js", "Redux", "TailwindCSS"],
      role: "Frontend Developer"
    },
    {
      title: "E-commerce Platform",
      description: "Built a modern e-commerce platform with real-time updates and dynamic product filtering.",
      technologies: ["React", "Node.js"],
      role: "Full Stack Developer"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Role: {project.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
