const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">Email</h3>
              <a
                href="mailto:loithienly@gmail.com"
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                loithienly@gmail.com
              </a>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h3 className="font-semibold mb-2 dark:text-white">Location</h3>
              <p className="dark:text-gray-300">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Social Links
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/thanys21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lợi-lý-thiên-26bbb3211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
