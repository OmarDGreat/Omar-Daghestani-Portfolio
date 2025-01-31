import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Icon
import Contact from "./Contact"; // Import the Contact modal

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Modal State

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <>
      <nav className="bg-blue-100 dark:bg-gray-900 text-black dark:text-white fixed w-full top-0 left-0 z-50 shadow-md py-4">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          
          {/* Home Button */}
          <button onClick={() => handleScroll("hero")} className="hover:text-gray-500 cursor-pointer">
            <IoHomeOutline size={30} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleScroll("skills")} className="hover:text-gray-500 transition-colors">
              Skills
            </button>
            <button onClick={() => handleScroll("projects")} className="hover:text-gray-500 transition-colors">
              Projects
            </button>
            {/* Open Modal on Click */}
            <button onClick={() => setModalOpen(true)} className="hover:text-gray-500 transition-colors">
              Contact
            </button>
          </div>

          {/* Desktop Dark Mode Toggle (Hidden on Mobile) */}
          <div className="hidden md:block cursor-pointer">
            <button onClick={toggleTheme}>
              {theme === "light" ? <CiLight size={30} /> : <MdDarkMode size={30} />}
            </button>
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden relative">
            <button onClick={toggleMenu} className="btn btn-ghost">
              <GiHamburgerMenu size={30} />
            </button>
            
            {/* Dropdown Menu */}
            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3">
                <li>
                  <button onClick={() => handleScroll("skills")} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">
                    Skills
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScroll("projects")} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">
                    Projects
                  </button>
                </li>
                <li>
                  {/* Open Modal on Click in Mobile Menu */}
                  <button onClick={() => setModalOpen(true)} className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 block w-full">
                    Contact
                  </button>
                </li>
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

      {/* Contact Modal */}
      {modalOpen && <Contact closeModal={() => setModalOpen(false)} />}
    </>
  );
};

export default Navbar;
