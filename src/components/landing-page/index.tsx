import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import MiniMenu from "./sections/mini-menu";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import { ThemeProvider } from "../common/theme/theme-provider";
import ThemeToggle from "../ui/theme-toggle";

const LandingPage = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />

        {/* Mini menu section */}
        <MiniMenu />

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
