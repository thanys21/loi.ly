const Projects = () => {
  const projects = [
    {
      title: "Logistics Project",
      description: "Developed a responsive web application using React and Next.js for efficient transportation management.",
      technologies: ["React", "Next.js", "Redux", "Material-UI"],
      role: "Frontend Developer"
    },
    {
      title: "E-commerce Platform",
      description: "Built a modern e-commerce platform with real-time updates and dynamic product filtering.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      role: "Full Stack Developer"
    },
    {
      title: "Admin Dashboard",
      description: "Created an intuitive admin dashboard with comprehensive data visualization and management features.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
      role: "Frontend Developer"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">Role: {project.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
