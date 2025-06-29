const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "TailwindCSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Go"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "VS Code", "Webpack", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                {skillSet.category}
              </h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
