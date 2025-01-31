import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Icon

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false); // Controls the dropdown state

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-blue-100 dark:bg-gray-900 text-black dark:text-white fixed w-full top-0 left-0 z-50 shadow-md py-4">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        
        {/* Home Button */}
        <div className="cursor-pointer">
          <button onClick={() => handleScroll("hero")}>
            <IoHomeOutline size={30} className="hover:text-gray-500" />
            </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => handleScroll("skills")} className="hover:text-gray-500 transition-colors">
            Skills
          </button>
          <button onClick={() => handleScroll("projects")} className="hover:text-gray-500 transition-colors">
            Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="hover:text-gray-500 transition-colors">
            Contact
          </button>
        </div>

        {/* Desktop Dark Mode Toggle (Hidden on Mobile) */}
        <div className="hidden md:block cursor-pointer">
          <button onClick={toggleTheme}>
            {theme === "light" ? <CiLight size={30} /> : <MdDarkMode size={30} />}
          </button>
        </div>

        {/* Mobile Menu (Hamburger) - Theme Toggle Inside */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="btn btn-ghost">
            <GiHamburgerMenu size={30} />
          </button>
          
          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3">
              <li><button onClick={() => handleScroll("skills")} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">Skills</button></li>
              <li><button onClick={() => handleScroll("services")} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">Services</button></li>
              <li><button onClick={() => handleScroll("projects")} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">Projects</button></li>
              <li><button onClick={() => handleScroll("contact")} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">Contact</button></li>
              <li className="border-t border-gray-300 dark:border-gray-700 mt-2 pt-2">
                {/* Theme Toggle Inside Hamburger */}
                <button onClick={toggleTheme} className="flex items-center justify-between w-full px-2 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  {theme === "light" ? (
                    <>
                      <CiLight size={24} /> <span className="ml-2">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MdDarkMode size={24} /> <span className="ml-2">Dark Mode</span>
                    </>
                  )}
                </button>
              </li>
            </ul>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
