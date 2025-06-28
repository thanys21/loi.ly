import { useEffect, useState, useMemo } from "react";
import { animate } from "framer-motion";

interface MenuItem {
  id: string;
  icon: string;
  label: string;
}

const MiniMenu = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);

  const menuItems: MenuItem[] = useMemo(
    () => [
      { id: "hero", icon: "👋", label: "Intro" },
      { id: "skills", icon: "💻", label: "Skills" },
      { id: "experience", icon: "📚", label: "Experience" },
      { id: "projects", icon: "🚀", label: "Projects" },
      { id: "contact", icon: "📧", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

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
  }, [menuItems, isScrolling]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setIsScrolling(true);
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    setActiveSection(sectionId); // Set active ngay lập tức
    animate(window.scrollY, offsetPosition, {
      duration: 0.5, // Giảm thời gian animation
      ease: [0.1, 0.1, 0.1, 0.1], // Linear animation không có easing
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
      onComplete: () => {
        setIsScrolling(false);
      },
    });
  };

  const getActiveStyles = (itemId: string) => {
    const isActive = activeSection === itemId;
    const baseStyles =
      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform group relative ";
    const activeStyles = isActive
      ? "bg-purple-500 text-white shadow-lg scale-110"
      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95";

    return `${baseStyles} ${activeStyles} hover:bg-purple-100 dark:hover:bg-purple-900/50`;
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={getActiveStyles(item.id)}
          >
            <span
              className={`transition-transform duration-300 ${
                activeSection === item.id ? "animate-bounce" : ""
              }`}
            >
              {item.icon}
            </span>
            <span
              className="absolute right-full mr-2 py-1 px-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg
              opacity-0 invisible -translate-x-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-x-0
              transition-all duration-300 whitespace-nowrap"
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
