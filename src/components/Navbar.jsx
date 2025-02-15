import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Icon
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Contact"; // Import the Contact modal

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "skills", "projects"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu after clicking
      setActiveSection(id);
    }
  };

  const navLinks = [
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "projects",
      label: "Projects",
    },
  ];

  const navbarClasses = `
    fixed w-full top-0 left-0 z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
        : "bg-blue-100 dark:bg-gray-900"
    }
    text-black dark:text-white py-4
  `;

  return (
    <>
      <motion.nav
        className={navbarClasses}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          {/* Home Button */}
          <motion.button
            onClick={() => handleScroll("hero")}
            className={`flex items-center space-x-2 transition-all duration-300
                      ${
                        activeSection === "hero"
                          ? "text-[#4776E6] dark:text-[#8E54E9]"
                          : "hover:text-[#4776E6] dark:hover:text-[#8E54E9]"
                      }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoHomeOutline size={24} />
            <span className="font-bold">Home</span>
          </motion.button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md
                          transition-all duration-300 relative
                          ${
                            activeSection === link.id
                              ? "text-[#4776E6] dark:text-[#8E54E9]"
                              : "hover:text-[#4776E6] dark:hover:text-[#8E54E9]"
                          }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4776E6] 
                              dark:bg-[#8E54E9] rounded-full"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setIsContactOpen(true)}
              className="px-4 py-2 rounded-md bg-[#4776E6] dark:bg-[#8E54E9] 
                        text-white hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 
                        transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "light" ? (
                    <CiLight size={24} />
                  ) : (
                    <MdDarkMode size={24} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 
                        dark:hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <GiHamburgerMenu size={24} />
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 
                          shadow-xl rounded-xl overflow-hidden border border-gray-200 
                          dark:border-gray-700 mr-6"
              >
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className={`w-full px-4 py-3 flex items-center space-x-2
                              transition-colors duration-300
                              ${
                                activeSection === link.id
                                  ? "text-[#4776E6] dark:text-[#8E54E9] bg-gray-100 dark:bg-gray-700"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
                              }`}
                  >
                    <span>{link.label}</span>
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 
                           dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  Contact
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
