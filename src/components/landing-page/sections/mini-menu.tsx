import { cx } from "class-variance-authority";
import { useEffect, useState, useMemo } from "react";

interface MenuItem {
  id: string;
  icon: string;
  label: string;
}

const MiniMenu = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems: MenuItem[] = useMemo(
    () => [
      { id: "hero", icon: "👋", label: "Intro" },
      { id: "skills", icon: "💻", label: "Skills" },
      { id: "experience", icon: "📚", label: "Experience" },
      { id: "projects", icon: "🚀", label: "Projects" },
    //   { id: "contact", icon: "📧", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cx(
              "w-10 h-10 rounded-full",
              "flex items-center justify-center",
              "relative group transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/50",
              `${
                activeSection === item.id
                  ? "bg-purple-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              }`
            )}
          >
            <span>{item.icon}</span>
            <span
              className={cx(
                "absolute right-full mr-2 py-1 px-2",
                "bg-gray-900 dark:bg-gray-700",
                "text-white text-sm",
                "rounded opacity-0 invisible",
                "group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap"
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MiniMenu;
