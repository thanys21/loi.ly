const Experience = () => {
  const experiences = [
    {
      company: "CIT Solutions",
      position: "Frontend Developer",
      period: "2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React and TypeScript",
        "Implemented UI components following modern design principles",
        "Collaborated with backend teams for API integration",
        "Participated in code reviews and technical discussions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  <p className="text-purple-600 font-semibold">{exp.position}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
