
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {

  return (
    <footer className="bg-blue-100 dark:bg-gray-900 text-black dark:text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-lg font-semibold">Omar Daghestani</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer | Software Engineer</p>


        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a href="https://github.com/OmarDGreat" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/omar-daghestani/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors" />
          </a>
          <a href="mailto:omar.daghest@gmail.com">
            <FaEnvelope size={24} className="hover:text-red-500 dark:hover:text-red-300 transition-colors" />
          </a>
          <a href="https://omar-daghestani.dev" target="_blank" rel="noopener noreferrer">
            <FaGlobe size={24} className="hover:text-green-500 dark:hover:text-green-300 transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Omar Daghestani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
