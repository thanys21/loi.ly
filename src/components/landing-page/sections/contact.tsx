const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:thienloictu@gmail.com"
                className="text-purple-600 hover:text-purple-700"
              >
                thienloictu@gmail.com
              </a>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Location</h3>
              <p>Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/loild193"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/loi-ly/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
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
