import { useState } from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/icon.jpg";
import Contact from "./Contact";
import { AiOutlineDownload } from "react-icons/ai";

function Hero() {
  const [modalOpen, setModalOpen] = useState(false); // Modal State

  return (
    <>
      <div
        className="bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col items-center justify-center text-center h-screen px-6"
        id="hero"
      >
        {/* Animated Profile Image */}
        <motion.img
          src={HeroImage}
          alt="Omar Daghestani"
          className="w-60 h-60 rounded-full object-cover mb-6 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Omar Daghestani
          </span>
          , Full-Stack Developer
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg max-w-xl">
          Full Stack Developer skilled in web development and mentoring, focused
          on innovation and student success.
        </p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          {/* Contact Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110"
          >
            Contact Me
          </button>

          {/* Download Resume Button */}
          <a
            href="/Omar-Daghestani-Resume-2025.pdf"
            download="Omar-Daghestani-Resume-2025.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full shadow-md bg-gradient-to-r from-pink-500 to-yellow-500 text-white transition-transform duration-300 hover:scale-110"
          >
            <AiOutlineDownload size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Contact Modal (Appears when modalOpen is true) */}
      {modalOpen && <Contact closeModal={() => setModalOpen(false)} />}
    </>
  );
}

export default Hero;
