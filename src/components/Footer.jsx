import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/OmarDGreat",
      label: "GitHub",
      hoverColor: "hover:text-white/90",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/omar-daghestani/",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]",
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:omar.daghest@gmail.com",
      label: "Email",
      hoverColor: "hover:text-[#EA4335]",
    },
  ];

  return (
    <footer className="relative bg-blue-100 dark:bg-[#0a192f] text-black dark:text-white py-8">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-200/50 to-transparent 
                    dark:from-[#112240]/50 dark:to-transparent"
      ></div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* Name and Title */}
            <motion.div className="text-center" variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                Omar Daghestani
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Developer | Software Engineer
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex space-x-6" variants={fadeInUp}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transform transition-all duration-300 
                           hover:scale-110 ${link.hoverColor}`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center pt-6 border-t border-gray-200 dark:border-gray-800 w-full"
              variants={fadeInUp}
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Omar Daghestani. All rights
                reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Built with React & Tailwind CSS
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
