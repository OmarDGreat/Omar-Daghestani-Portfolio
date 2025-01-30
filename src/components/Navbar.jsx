import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  // Get theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

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

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white px-8 md:px-16 lg:px-24 fixed w-full top-0 left-0 z-50 shadow-md py-4">      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div href="#home" className="hover:bg-gray-500 cursor-pointer">
          <IoHomeOutline size={30} />
        </div>
        <div className="space-x-6">
          <button onClick={() => handleScroll("skills")} className="hover:text-gray-400">Skills</button>
          <button onClick={() => handleScroll("services")} className="hover:text-gray-400">Services</button>
          <button onClick={() => handleScroll("projects")} className="hover:text-gray-400">Projects</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-gray-400">Contact</button>
        </div>
        <div className="flex space-x-4">
          <button onClick={toggleTheme}>
            {theme === "light" ? <CiLight size={40} /> : <MdDarkMode size={40} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
