import { Button } from "../../ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ly Thien Loi
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              Web Engineer
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate frontend developer with expertise in React, TypeScript,
              and modern web technologies. Focused on creating beautiful and
              performant user interfaces.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="outline" size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            {/* Add your profile image or illustration here */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10">
                {/* Add your image here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
