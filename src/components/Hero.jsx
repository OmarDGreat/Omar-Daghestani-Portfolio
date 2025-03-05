import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/icon.jpg";
import Contact from "./Contact";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/OmarDGreat",
      label: "GitHub",
      color: "hover:text-white/90",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/omar-daghestani",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]",
    },
    {
      icon: <HiMail size={24} />,
      url: "mailto:omar.daghest@gmail.com",
      label: "Email",
      color: "hover:text-[#EA4335]",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-blue-100 dark:bg-[#0a192f] text-black dark:text-gray-100"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 
                      dark:from-[#0a192f] dark:via-[#112240] dark:to-[#0a192f]"
      ></div>

      {/* Main content */}
      <motion.div
        className="relative container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with enhanced animation */}
        <motion.div variants={itemVariants} className="relative mb-12 group">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] rounded-full 
                         blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <img
            src={HeroImage}
            alt="Omar Daghestani"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl 
                     border-4 border-white dark:border-[#112240] transform transition-transform 
                     duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* Name and Title */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-black dark:text-gray-100">
            I'm{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-[#4776E6] to-[#8E54E9]"
            >
              Omar Daghestani
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light">
            Full-Stack Developer
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg md:text-xl text-center mb-12 text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          Full Stack Developer passionate about creating innovative web
          solutions and mentoring future developers. Specialized in building
          modern, scalable applications with cutting-edge technologies.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#4776E6] to-[#8E54E9] 
                     text-white font-semibold shadow-lg hover:shadow-xl transform 
                     hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Let's Connect
          </button>

          <a
            href="/Omar-Daghestani-Resume-2025.pdf"
            download
            className="px-8 py-4 rounded-full bg-white dark:bg-[#112240] text-gray-800 
                     dark:text-gray-100 font-semibold shadow-lg hover:shadow-xl 
                     transform hover:-translate-y-1 transition-all duration-300 
                     flex items-center gap-2 text-lg border border-gray-200 
                     dark:border-[#233554]"
          >
            <AiOutlineDownload size={24} />
            Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-white dark:bg-[#112240] shadow-md 
                       hover:shadow-xl transform hover:-translate-y-1 transition-all 
                       duration-300 border border-gray-200 dark:border-[#233554] ${link.color}`}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}

export default Hero;
